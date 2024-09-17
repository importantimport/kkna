import{v as m,a2 as E,B as c,c as v,j as n,a as h,G as d,w as g,a1 as y,o as b}from"./chunks/framework.ibREHUAx.js";var x=class extends Event{constructor(s,t,e){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.callback=t,this.subscribe=e??!1}};var f=class{get value(){return this.o}set value(s){this.setValue(s)}setValue(s,t=!1){const e=t||!Object.is(s,this.o);this.o=s,e&&this.updateObservers()}constructor(s){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},s!==void 0&&(this.value=s)}addCallback(s,t,e){if(!e)return void s(this.value);this.subscriptions.has(s)||this.subscriptions.set(s,{disposer:()=>{this.subscriptions.delete(s)},consumerHost:t});const{disposer:i}=this.subscriptions.get(s);s(this.value,i)}clearCallbacks(){this.subscriptions.clear()}},_=class extends Event{constructor(s){super("context-provider",{bubbles:!0,composed:!0}),this.context=s}},C=class extends f{constructor(s,t,e){var i,r;super(t.context!==void 0?t.initialValue:e),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const p=new Set;for(const[o,{consumerHost:u}]of this.subscriptions)p.has(o)||(p.add(o),u.dispatchEvent(new x(this.context,o,!0)));a.stopPropagation()},this.host=s,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(r=(i=this.host).addController)==null||r.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new _(this.context))}},F=Symbol.for("@kkna/context");/*! Bundled license information:

@lit/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var w=(s,t)=>new C(s,{...t,context:F}),P=s=>{w(document.body,{initialValue:s}).hostConnected()},B=s=>s,R=s=>s,j=s=>s,A=s=>s,D=s=>({acct:s.acct,avatar:s.avatar,emojis:s.emojis,name:s.display_name,username:s.username}),L=async(s,t)=>await fetch(new URL(`/api/v1/statuses/${s}/context`,t),{headers:{accept:"application/json"}}).then(e=>e.json()),q=({descendants:s},t)=>s.map(e=>({author:D(e.account),content:e.content,emojis:e.emojis,id:e.id,in_reply_to_id:e.in_reply_to_id===t?void 0:e.in_reply_to_id??void 0,published:new Date(e.created_at),replies:[],url:e.url?new URL(e.url):void 0})),O=async(s,t)=>await fetch(new URL(`/api/v1/statuses/${s}/reblogged_by`,t),{headers:{accept:"application/json"}}).then(e=>e.json()),V=async(s,t)=>await fetch(new URL(`/api/v1/statuses/${s}/favourited_by`,t),{headers:{accept:"application/json"}}).then(e=>e.json()),k=s=>s.length,U=j(s=>({name:"mastodon",options:s,task:A(async()=>({comments:await L(s.id,s.instance).then(t=>q(t,s.id)),reactions:{emojis:{"♺":await O(s.id,s.instance).then(t=>k(t)),"⭐":await V(s.id,s.instance).then(t=>k(t))}}}))})),N=B(s=>({name:"hatsu",options:s,task:R(async t=>{const e=btoa(t.url.href).replaceAll("+","-").replaceAll("/","_"),{task:i}=U({...s,id:e});return await i(t)})}));const $=JSON.parse('{"title":"Example","description":"","frontmatter":{},"headers":[],"relativePath":"intro/example.md","filePath":"intro/example.md"}'),T={name:"intro/example.md"},H=Object.assign(T,{setup(s){return m(()=>{E(()=>import("./chunks/index.BUn5Ce-W.js"),[]),P({overrides:{url:new URL("https://kwaa-blog-next.deno.dev/articles/test/")},presets:[N({instance:"https://hatsu-nightly-debug.hyp3r.link"})]})}),(t,e)=>{const i=c("kkna-material"),r=c("ClientOnly");return b(),v("div",null,[e[0]||(e[0]=n("h1",{id:"example",tabindex:"-1"},[h("Example "),n("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1)),e[1]||(e[1]=n("p",null,[h("This is an "),n("a",{href:"./../components/material.html"},[n("code",null,"@kkna/component-material")]),h(" example using the "),n("a",{href:"./../presets/hatsu.html"},[n("code",null,"@kkna/preset-hatsu")]),h(" preset.")],-1)),d(r,null,{default:g(()=>[d(i)]),_:1}),e[2]||(e[2]=y(`<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { hatsu } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@kkna/preset-hatsu&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;kkna&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;kkna/context&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  overrides: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://kwaa-blog-next.deno.dev/articles/test/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  presets: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    hatsu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ instance: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://hatsu-nightly-debug.hyp3r.link&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kkna-material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">kkna-material</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="comments-reactions" tabindex="-1">Comments / Reactions <a class="header-anchor" href="#comments-reactions" aria-label="Permalink to &quot;Comments / Reactions&quot;">​</a></h2><p>You can send comments/reactions to <a href="https://hatsu-nightly-debug.hyp3r.link/posts/https://kwaa-blog-next.deno.dev/articles/test/" target="_blank" rel="noreferrer">https://hatsu-nightly-debug.hyp3r.link/posts/https://kwaa-blog-next.deno.dev/articles/test/</a>, which will be displayed here.</p>`,5))])}}});export{$ as __pageData,H as default};
