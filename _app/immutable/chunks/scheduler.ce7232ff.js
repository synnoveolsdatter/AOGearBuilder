function w(){}const M=t=>t;function j(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function A(){return Object.create(null)}function v(t){t.forEach(E)}function B(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function S(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function U(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t){let n;return y(t,e=>n=e)(),n}function D(t,n,e){t.$$.on_destroy.push(y(n,e))}function G(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const i=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)i[u]=n.dirty[u]|o[u];return i}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,i){if(o){const _=m(n,e,r,i);t.p(_,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t,n,e){return t.set(e),n}function L(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function d(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){x().$$.on_mount.push(t)}function Q(t){x().$$.after_update.push(t)}const a=[],g=[];let c=[];const b=[],k=Promise.resolve();let p=!1;function q(){p||(p=!0,k.then(z))}function R(){return q(),k}function O(t){c.push(t)}const h=new Set;let s=0;function z(){if(s!==0)return;const t=f;do{try{for(;s<a.length;){const n=a[s];s++,d(n),F(n.$$)}}catch(n){throw a.length=0,s=0,n}for(d(null),a.length=0,s=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{a as A,q as B,Q as a,g as b,O as c,S as d,D as e,G as f,J as g,H as h,C as i,K as j,M as k,L as l,B as m,w as n,N as o,A as p,z as q,v as r,P as s,R as t,I as u,U as v,T as w,f as x,d as y,E as z};