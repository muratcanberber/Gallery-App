function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function c(t,n,e=n){return t.set(e),n}function i(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function l(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function g(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t){return Array.from(t.childNodes)}function b(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):d(n)}function y(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return h(n)}function _(t){return y(t," ")}function x(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function v(t,n){t.value=null==n?"":n}function w(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let E;function k(t){E=t}const A=[],N=[],j=[],O=[],S=Promise.resolve();let C=!1;function T(t){j.push(t)}let q=!1;const B=new Set;function L(){if(!q){q=!0;do{for(let t=0;t<A.length;t+=1){const n=A[t];k(n),P(n.$$)}for(k(null),A.length=0;N.length;)N.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];B.has(n)||(B.add(n),n())}j.length=0}while(A.length);for(;O.length;)O.pop()();C=!1,q=!1,B.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const z=new Set;let D;function M(){D={r:0,c:[],p:D}}function F(){D.r||o(D.c),D=D.p}function G(t,n){t&&t.i&&(z.delete(t),t.i(n))}function H(t,n,e,o){if(t&&t.o){if(z.has(t))return;z.add(t),D.c.push((()=>{z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function I(t){t&&t.c()}function J(t,n){t&&t.l(n)}function K(t,e,s,u){const{fragment:c,on_mount:i,on_destroy:a,after_update:f}=t.$$;c&&c.m(e,s),u||T((()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(T)}function Q(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function R(t,n){-1===t.$$.dirty[0]&&(A.push(t),C||(C=!0,S.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function U(n,r,s,u,c,i,a=[-1]){const l=E;k(n);const d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let h=!1;if(d.ctx=s?s(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&R(n,t)),e})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!u&&u(d.ctx),r.target){if(r.hydrate){const t=$(r.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();r.intro&&G(n.$$.fragment),K(n,r.target,r.anchor,r.customElement),L()}k(l)}class V{$destroy(){Q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W=[];function X(n,e=t){let o;const r=[];function u(t){if(s(n,t)&&(n=t,o)){const t=!W.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),W.push(t,n)}if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(s,c=t){const i=[s,c];return r.push(i),1===r.length&&(o=e(u)||t),s(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{v as A,g as B,o as C,c as D,w as E,V as S,$ as a,y as b,b as c,f as d,d as e,m as f,a as g,i as h,U as i,p as j,_ as k,x as l,I as m,t as n,J as o,K as p,G as q,H as r,s,h as t,Q as u,M as v,X as w,F as x,l as y,u as z};