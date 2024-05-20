import{k as E,a3 as m,D as c,c as g,I as d,w as v,l as n,a as l,a2 as y,o as b}from"./chunks/framework.D_Hi0FJr.js";var _=class extends Event{constructor(s,t,e){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.callback=t,this.subscribe=e??!1}};var x=class{get value(){return this.o}set value(s){this.setValue(s)}setValue(s,t=!1){const e=t||!Object.is(s,this.o);this.o=s,e&&this.updateObservers()}constructor(s){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},s!==void 0&&(this.value=s)}addCallback(s,t,e){if(!e)return void s(this.value);this.subscriptions.has(s)||this.subscriptions.set(s,{disposer:()=>{this.subscriptions.delete(s)},consumerHost:t});const{disposer:i}=this.subscriptions.get(s);s(this.value,i)}clearCallbacks(){this.subscriptions.clear()}},f=class extends Event{constructor(s){super("context-provider",{bubbles:!0,composed:!0}),this.context=s}},C=class extends x{constructor(s,t,e){var i,h;super(t.context!==void 0?t.initialValue:e),this.onContextRequest=a=>{const r=a.composedPath()[0];a.context===this.context&&r!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,r,a.subscribe))},this.onProviderRequest=a=>{const r=a.composedPath()[0];if(a.context!==this.context||r===this.host)return;const p=new Set;for(const[o,{consumerHost:u}]of this.subscriptions)p.has(o)||(p.add(o),u.dispatchEvent(new _(this.context,o,!0)));a.stopPropagation()},this.host=s,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(h=(i=this.host).addController)==null||h.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new f(this.context))}},F=Symbol.for("@kkna/context");/*! Bundled license information:

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
*/var w=(s,t)=>new C(s,{...t,context:F}),P=s=>{w(document.body,{initialValue:s}).hostConnected()},A=s=>s,R=s=>s,B=s=>s,j=s=>s,D=s=>({acct:s.acct,avatar:s.avatar,emojis:s.emojis,name:s.display_name,username:s.username}),L=async(s,t)=>await fetch(new URL(`/api/v1/statuses/${s}/context`,t),{headers:{accept:"application/json"}}).then(e=>e.json()),T=({descendants:s},t)=>s.map(e=>({author:D(e.account),content:e.content,emojis:e.emojis,id:e.id,in_reply_to_id:e.in_reply_to_id===t?void 0:e.in_reply_to_id??void 0,published:new Date(e.created_at),replies:[],url:e.url?new URL(e.url):void 0})),q=async(s,t)=>await fetch(new URL(`/api/v1/statuses/${s}/reblogged_by`,t),{headers:{accept:"application/json"}}).then(e=>e.json()),V=async(s,t)=>await fetch(new URL(`/api/v1/statuses/${s}/favourited_by`,t),{headers:{accept:"application/json"}}).then(e=>e.json()),k=s=>s.length,O=B(s=>({name:"mastodon",options:s,task:j(async()=>({comments:await L(s.id,s.instance).then(t=>T(t,s.id)),reactions:{emojis:{"♺":await q(s.id,s.instance).then(t=>k(t)),"⭐":await V(s.id,s.instance).then(t=>k(t))}}}))})),S=A(s=>({name:"hatsu",options:s,task:R(async t=>{const e=btoa(t.url.href).replaceAll("+","-").replaceAll("/","_"),{task:i}=O({...s,id:e});return await i(t)})}));const N=n("h1",{id:"example",tabindex:"-1"},[l("Example "),n("a",{class:"header-anchor",href:"#example","aria-label":'Permalink to "Example"'},"​")],-1),U=n("p",null,[l("This is an "),n("a",{href:"./../components/material.html"},[n("code",null,"@kkna/component-material")]),l(" example using the "),n("a",{href:"./../presets/hatsu.html"},[n("code",null,"@kkna/preset-hatsu")]),l(" preset.")],-1),I=y("",5),M=JSON.parse('{"title":"Example","description":"","frontmatter":{},"headers":[],"relativePath":"intro/example.md","filePath":"intro/example.md"}'),$={name:"intro/example.md"},J=Object.assign($,{setup(s){return E(()=>{m(()=>import("./chunks/index.Cw6_3fS-.js"),[]),P({overrides:{url:new URL("https://kwaa-blog-next.deno.dev/articles/test/")},presets:[S({instance:"https://hatsu-nightly-debug.hyp3r.link"})]})}),(t,e)=>{const i=c("kkna-material"),h=c("ClientOnly");return b(),g("div",null,[N,U,d(h,null,{default:v(()=>[d(i)]),_:1}),I])}}});export{M as __pageData,J as default};