var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function l(t){let n;return u(t,t=>n=t)(),n}function s(t,n,e){t.$$.on_destroy.push(u(n,e))}function i(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function h(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t){return""===t?void 0:+t}function $(t,n){t.value=null==n?"":n}function b(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function v(t,n,e){t.classList[e?"add":"remove"](n)}let y;function w(t){y=t}const x=[],_=[],E=[],N=[],j=Promise.resolve();let k=!1;function A(t){E.push(t)}let C=!1;const O=new Set;function L(){if(!C){C=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];w(n),S(n.$$)}for(x.length=0;_.length;)_.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];O.has(n)||(O.add(n),n())}E.length=0}while(x.length);for(;N.length;)N.pop()();k=!1,C=!1,O.clear()}}function S(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const B=new Set;function I(t,n){t&&t.i&&(B.delete(t),t.i(n))}function M(t,e,c){const{fragment:u,on_mount:l,on_destroy:s,after_update:i}=t.$$;u&&u.m(e,c),A(()=>{const e=l.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(A)}function P(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function T(t,n){-1===t.$$.dirty[0]&&(x.push(t),k||(k=!0,j.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function q(n,o,c,u,l,s,i=[-1]){const f=y;w(n);const p=o.props||{},d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:i};let h=!1;if(d.ctx=c?c(n,p,(t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&T(n,t)),e}):[],d.update(),h=!0,r(d.before_update),d.fragment=!!u&&u(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();o.intro&&I(n.$$.fragment),M(n,o.target,o.anchor),L()}w(f)}class z{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const R=[];function D(n,e=t){let r;const o=[];function u(t){if(c(n,t)&&(n=t,r)){const t=!R.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),R.push(e,n)}if(t){for(let t=0;t<R.length;t+=2)R[t][0](R[t+1]);R.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(c,l=t){const s=[c,l];return o.push(s),1===o.length&&(r=e(u)||t),c(n),()=>{const t=o.indexOf(s);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function F(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function G(t){return function n(e){return 0===arguments.length||F(e)?n:t.apply(this,arguments)}}function H(t){return function n(e,r){switch(arguments.length){case 0:return n;case 1:return F(e)?n:G((function(n){return t(e,n)}));default:return F(e)&&F(r)?n:F(e)?G((function(n){return t(n,r)})):F(r)?G((function(n){return t(e,n)})):t(e,r)}}}function J(t){return"[object Number]"===Object.prototype.toString.call(t)}var K=H((function(t,n){if(!J(t)||!J(n))throw new TypeError("Both arguments to range must be numbers");for(var e=[],r=t;r<n;)e.push(r),r+=1;return e})),Q=H((function(t,n){var e,r=Number(n),o=0;if(r<0||isNaN(r))throw new RangeError("n must be a non-negative number");for(e=new Array(r);o<r;)e[o]=t(o),o+=1;return e})),U=H((function(t,n){for(var e,r=0,o=t.length,c=n.length,u=[];r<o;){for(e=0;e<c;)u[u.length]=[t[r],n[e]],e+=1;r+=1}return u}));const V=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],W=(t,n)=>n[t],X=({active:t,rows:n,cols:e})=>{const r=t.length!==n*e?t.slice(0,n*e):t.slice(0);return((t,n)=>U(K(0,t),K(0,n)))(n,e).forEach(([o,c])=>{const u=o*e+c,l=((t,n)=>t.filter(t=>W(t,n)).length)(((t,n,e,r)=>V.map(([e,r])=>[e+t,r+n]).filter(([t,n])=>((t,n,e,r)=>t>=0&&t<e&&n>=0&&n<r)(t,n,e,r)).map(([t,n])=>t*r+n))(o,c,n,e),t);l<2||l>3?r[u]=!1:W(u,t)||3!==l||(r[u]=!0)}),r},Y=t=>Q(t=>Math.random()>.7,t);const Z=D({rows:35,cols:90}),tt=D(Y(l(Z).rows*l(Z).cols),t=>{const n=setInterval(()=>{t(X({active:l(tt),...l(Z)}))},100);return()=>clearInterval(n)}),nt=()=>{tt.set(Y(l(Z).rows*l(Z).cols))};function et(t,n,e){const r=t.slice();return r[3]=n[e],r[5]=e,r}function rt(t){let n,e,r;function o(...n){return t[2](t[5],...n)}return{c(){n=p("div"),g(n,"class","cell svelte-8775p5"),v(n,"active",t[3])},m(t,c){f(t,n,c),e||(r=h(n,"click",o),e=!0)},p(e,r){t=e,2&r&&v(n,"active",t[3])},d(t){t&&a(n),e=!1,r()}}}function ot(n){let e,r=n[1],o=[];for(let t=0;t<r.length;t+=1)o[t]=rt(et(n,r,t));return{c(){e=p("div");for(let t=0;t<o.length;t+=1)o[t].c();g(e,"class","grid svelte-8775p5"),b(e,"--columns",n[0].cols)},m(t,n){f(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,[n]){if(2&n){let c;for(r=t[1],c=0;c<r.length;c+=1){const u=et(t,r,c);o[c]?o[c].p(u,n):(o[c]=rt(u),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}1&n&&b(e,"--columns",t[0].cols)},i:t,o:t,d(t){t&&a(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t)}}}function ct(t,n,e){let r,o;s(t,Z,t=>e(0,r=t)),s(t,tt,t=>e(1,o=t));return[r,o,t=>(t=>{const n=l(tt).splice(0);n[t]=!n[t],tt.set(n)})(t)]}class ut extends z{constructor(t){super(),q(this,t,ct,ot,c,{})}}function lt(t){let n,e,o,c,u,l,s,b,v,y,w,x,_;return y=new ut({}),{c(){var t;n=p("main"),e=p("h1"),e.textContent="game of life",o=d(),c=p("input"),u=d(),l=p("input"),s=d(),b=p("button"),b.textContent="randomize",v=d(),(t=y.$$.fragment)&&t.c(),g(e,"class","svelte-1e9puaw"),g(c,"type","number"),g(l,"type","number"),g(n,"class","svelte-1e9puaw")},m(r,a){f(r,n,a),i(n,e),i(n,o),i(n,c),$(c,t[0].rows),i(n,u),i(n,l),$(l,t[0].cols),i(n,s),i(n,b),i(n,v),M(y,n,null),w=!0,x||(_=[h(c,"input",t[1]),h(l,"input",t[2]),h(b,"click",nt)],x=!0)},p(t,[n]){1&n&&m(c.value)!==t[0].rows&&$(c,t[0].rows),1&n&&m(l.value)!==t[0].cols&&$(l,t[0].cols)},i(t){w||(I(y.$$.fragment,t),w=!0)},o(t){!function(t,n,e,r){if(t&&t.o){if(B.has(t))return;B.add(t),(void 0).c.push(()=>{B.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}(y.$$.fragment,t),w=!1},d(t){t&&a(n),P(y),x=!1,r(_)}}}function st(t,n,e){let r;return s(t,Z,t=>e(0,r=t)),[r,function(){r.rows=m(this.value),Z.set(r)},function(){r.cols=m(this.value),Z.set(r)}]}return new class extends z{constructor(t){super(),q(this,t,st,lt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
