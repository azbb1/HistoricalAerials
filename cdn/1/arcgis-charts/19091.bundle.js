"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[19091],{22445:(e,t,r)=>{r.d(t,{r:()=>s});class s{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const s=this._outer.get(e);s?s.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},19091:(e,t,r)=>{r.r(t),r.d(t,{BufferObject:()=>s.f,FramebufferObject:()=>o.X,Program:()=>n.$,ProgramCache:()=>i.G,Renderbuffer:()=>c.r,ShaderCompiler:()=>f.B,Texture:()=>a.x,VertexArrayObject:()=>u.U,createContextForView:()=>d.dz,createProgram:()=>l.H,glslifyDefineMap:()=>h.K});var s=r(78951),o=r(18567),n=r(69609),i=r(18636),c=r(37165),f=r(78311),a=r(71449),u=r(29620),h=r(73353),l=r(84172),d=r(8396)},18636:(e,t,r)=>{r.d(t,{G:()=>n});var s=r(22445),o=r(69609);class n{constructor(e){this._rctx=e,this._store=new s.r}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,r,s){const n=this._store.get(e,t);if(null!=n)return n.ref(),n;const i=new o.$(this._rctx,e,t,r,s);return i.ref(),this._store.set(e,t,i),i}get test(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLObjects:e}}}},73353:(e,t,r)=>{function s(e){const{options:t,value:r}=e;return"number"==typeof t[r]}function o(e){let t="";for(const r in e){const o=e[r];if("boolean"==typeof o)o&&(t+=`#define ${r}\n`);else if("number"==typeof o)t+=`#define ${r} ${o.toFixed()}\n`;else if("object"==typeof o)if(s(o)){const{value:e,options:s,namespace:n}=o,i=n?`${n}_`:"";for(const e in s)t+=`#define ${i}${e} ${s[e].toFixed()}\n`;t+=`#define ${r} ${i}${e}\n`}else{const e=o.options;let s=0;for(const r in e)t+=`#define ${e[r]} ${(s++).toFixed()}\n`;t+=`#define ${r} ${e[o.value]}\n`}}return t}r.d(t,{K:()=>o})}}]);