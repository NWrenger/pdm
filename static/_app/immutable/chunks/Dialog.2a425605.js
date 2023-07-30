import{k as oe,l as ce,m as q,p as ie,s as z,n as w,r as se,e as ue,q as de,b as he}from"./scheduler.655984ec.js";import{p as re,t as x,b as ae,d as Z,S as G,i as F,g as m,s as I,m as H,h as p,j as y,z as j,c as B,n as M,f as _,k as u,a as L,x as h,A as P,o as W,r as fe,u as _e,v as be,w as me}from"./index.ccc5c112.js";import{p as pe}from"./stores.2cf74ecc.js";import{j as ve}from"./singletons.d986b91a.js";function le(n,e){const l=e.token={};function t(o,s,c,i){if(e.token!==l)return;e.resolved=i;let a=e.ctx;c!==void 0&&(a=a.slice(),a[c]=i);const r=o&&(e.current=o)(a);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,v)=>{v!==s&&f&&(re(),x(f,1,1,()=>{e.blocks[v]===f&&(e.blocks[v]=null)}),ae())}):e.block.d(1),r.c(),Z(r,1),r.m(e.mount(),e.anchor),d=!0),e.block=r,e.blocks&&(e.blocks[s]=r),d&&ie()}if(oe(n)){const o=ce();if(n.then(s=>{q(o),t(e.then,1,e.value,s),q(null)},s=>{if(q(o),t(e.catch,2,e.error,s),q(null),!e.hasCatch)throw s}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,n),!0;e.resolved=n}}function Pe(n,e,l){const t=e.slice(),{resolved:o}=n;n.current===n.then&&(t[n.value]=o),n.current===n.catch&&(t[n.error]=o),n.block.p(t,l)}const ge=ve("goto");function ke(n){let e,l,t,o='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>',s,c,i,a,r,d,f,v,C="Passwort ändern",b,g,k,U,V,T,N,S,K="Ausloggen",J,Q;return{c(){e=m("div"),l=m("div"),t=m("button"),t.innerHTML=o,s=I(),c=m("ul"),i=m("li"),a=m("h6"),r=H(n[0]),d=I(),f=m("li"),v=m("button"),v.textContent=C,b=I(),g=m("li"),k=m("button"),U=H("Logins Verwalten"),T=I(),N=m("li"),S=m("button"),S.textContent=K,this.h()},l(E){e=p(E,"DIV",{class:!0});var O=y(e);l=p(O,"DIV",{class:!0});var A=y(l);t=p(A,"BUTTON",{class:!0,type:!0,title:!0,"data-bs-toggle":!0,"aria-expanded":!0,"data-svelte-h":!0}),j(t)!=="svelte-l3650g"&&(t.innerHTML=o),s=B(A),c=p(A,"UL",{class:!0});var D=y(c);i=p(D,"LI",{});var R=y(i);a=p(R,"H6",{class:!0});var X=y(a);r=M(X,n[0]),X.forEach(_),R.forEach(_),d=B(D),f=p(D,"LI",{});var Y=y(f);v=p(Y,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),j(v)!=="svelte-e3icxy"&&(v.textContent=C),Y.forEach(_),b=B(D),g=p(D,"LI",{});var $=y(g);k=p($,"BUTTON",{id:!0,class:!0,type:!0});var ee=y(k);U=M(ee,"Logins Verwalten"),ee.forEach(_),$.forEach(_),T=B(D),N=p(D,"LI",{});var te=y(N);S=p(te,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),j(S)!=="svelte-1997fkn"&&(S.textContent=K),te.forEach(_),D.forEach(_),A.forEach(_),O.forEach(_),this.h()},h(){var E;u(t,"class","btn btn-outline-secondary dropdown-toggle hide-arrow svelte-1aynsk9"),u(t,"type","button"),u(t,"title","Profil"),u(t,"data-bs-toggle","dropdown"),u(t,"aria-expanded","false"),u(a,"class","dropdown-header"),u(v,"class","dropdown-item"),u(v,"type","button"),u(k,"id","login-creator"),u(k,"class","dropdown-item"),u(k,"type","button"),k.disabled=V=((E=n[1])==null?void 0:E.access_user)!=="Write",u(S,"class","dropdown-item"),u(S,"type","button"),u(c,"class","dropdown-menu dropdown-menu-end"),u(l,"class","btn-group dropdown"),u(e,"class","d-flex")},m(E,O){L(E,e,O),h(e,l),h(l,t),h(l,s),h(l,c),h(c,i),h(i,a),h(a,r),h(c,d),h(c,f),h(f,v),h(c,b),h(c,g),h(g,k),h(k,U),h(c,T),h(c,N),h(N,S),J||(Q=[P(v,"click",n[3]),P(k,"click",n[4]),P(S,"click",n[5])],J=!0)},p(E,[O]){var A;O&1&&W(r,E[0]),O&2&&V!==(V=((A=E[1])==null?void 0:A.access_user)!=="Write")&&(k.disabled=V)},i:w,o:w,d(E){E&&_(e),J=!1,se(Q)}}}function ye(n,e,l){let{currentUser:t}=e,{permission:o}=e,{onSelect:s}=e;const c=()=>{s&&s("password")},i=()=>{s&&s("login")},a=()=>{localStorage.clear(),ge("/login",{replaceState:!0})};return n.$$set=r=>{"currentUser"in r&&l(0,t=r.currentUser),"permission"in r&&l(1,o=r.permission),"onSelect"in r&&l(2,s=r.onSelect)},[t,o,s,c,i,a]}class we extends G{constructor(e){super(),F(this,e,ye,ke,z,{currentUser:0,permission:1,onSelect:2})}}function ne(n){let e,l;return e=new we({props:{onSelect:n[2],currentUser:n[0],permission:n[1]}}),{c(){fe(e.$$.fragment)},l(t){_e(e.$$.fragment,t)},m(t,o){be(e,t,o),l=!0},p(t,o){const s={};o&4&&(s.onSelect=t[2]),o&1&&(s.currentUser=t[0]),o&2&&(s.permission=t[1]),e.$set(s)},i(t){l||(Z(e.$$.fragment,t),l=!0)},o(t){x(e.$$.fragment,t),l=!1},d(t){me(e,t)}}}function Ee(n){let e,l,t,o,s,c,i,a=n[0]!=null&&ne(n);return{c(){e=m("nav"),l=m("div"),t=m("a"),o=H("SchillerDB"),c=I(),a&&a.c(),this.h()},l(r){e=p(r,"NAV",{class:!0});var d=y(e);l=p(d,"DIV",{class:!0});var f=y(l);t=p(f,"A",{href:!0,"data-sveltekit-reload":!0,class:!0});var v=y(t);o=M(v,"SchillerDB"),v.forEach(_),c=B(f),a&&a.l(f),f.forEach(_),d.forEach(_),this.h()},h(){u(t,"href",s=n[3].url.pathname),u(t,"data-sveltekit-reload",""),u(t,"class","navbar-brand svelte-114yh5g"),u(l,"class","container-fluid"),u(e,"class","nav navbar bg-secondary-subtle svelte-114yh5g")},m(r,d){L(r,e,d),h(e,l),h(l,t),h(t,o),h(l,c),a&&a.m(l,null),i=!0},p(r,[d]){(!i||d&8&&s!==(s=r[3].url.pathname))&&u(t,"href",s),r[0]!=null?a?(a.p(r,d),d&1&&Z(a,1)):(a=ne(r),a.c(),Z(a,1),a.m(l,null)):a&&(re(),x(a,1,1,()=>{a=null}),ae())},i(r){i||(Z(a),i=!0)},o(r){x(a),i=!1},d(r){r&&_(e),a&&a.d()}}}function Ce(n,e,l){let t;ue(n,pe,i=>l(3,t=i));let{currentUser:o=null}=e,{permission:s}=e,{onSelect:c}=e;return n.$$set=i=>{"currentUser"in i&&l(0,o=i.currentUser),"permission"in i&&l(1,s=i.permission),"onSelect"in i&&l(2,c=i.onSelect)},[o,s,c,t]}class He extends G{constructor(e){super(),F(this,e,Ce,Ee,z,{currentUser:0,permission:1,onSelect:2})}}function Se(n){let e,l="Schließen",t,o;return{c(){e=m("button"),e.textContent=l,this.h()},l(s){e=p(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),j(e)!=="svelte-wxd3is"&&(e.textContent=l),this.h()},h(){u(e,"type","button"),u(e,"class","btn btn-secondary mt-3")},m(s,c){L(s,e,c),t||(o=P(e,"click",n[9]),t=!0)},p:w,d(s){s&&_(e),t=!1,o()}}}function Ue(n){let e,l,t,o,s,c="Abbrechen",i,a,r={ctx:n,current:null,token:null,hasCatch:!1,pending:De,then:Ne,catch:Te};return le(l=n[4],r),{c(){e=m("button"),r.block.c(),t=H(`
					Ja`),o=I(),s=m("button"),s.textContent=c,this.h()},l(d){e=p(d,"BUTTON",{type:!0,class:!0});var f=y(e);r.block.l(f),t=M(f,`
					Ja`),f.forEach(_),o=B(d),s=p(d,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),j(s)!=="svelte-1fclmtg"&&(s.textContent=c),this.h()},h(){u(e,"type","button"),u(e,"class","btn btn-danger mt-3 ok"),u(s,"type","button"),u(s,"class","btn btn-secondary mt-3")},m(d,f){L(d,e,f),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=t,h(e,t),L(d,o,f),L(d,s,f),i||(a=[P(e,"click",n[7]),P(s,"click",n[8])],i=!0)},p(d,f){n=d,r.ctx=n,f&16&&l!==(l=n[4])&&le(l,r)},d(d){d&&(_(e),_(o),_(s)),r.block.d(),r.token=null,r=null,i=!1,se(a)}}}function Te(n){return{c:w,l:w,m:w,d:w}}function Ne(n){return{c:w,l:w,m:w,d:w}}function De(n){let e;return{c(){e=m("span"),this.h()},l(l){e=p(l,"SPAN",{id:!0,class:!0,role:!0,"aria-hidden":!0}),y(e).forEach(_),this.h()},h(){u(e,"id","add-login-button-spinner"),u(e,"class","spinner-border spinner-border-sm"),u(e,"role","status"),u(e,"aria-hidden","true")},m(l,t){L(l,e,t)},d(l){l&&_(e)}}}function Ie(n){let e,l,t,o,s,c,i,a,r,d,f;function v(g,k){return g[0]?Ue:Se}let C=v(n),b=C(n);return{c(){e=m("dialog"),l=m("div"),t=m("div"),o=H(n[1]),s=I(),c=m("div"),i=m("div"),a=H(n[2]),r=I(),b.c(),this.h()},l(g){e=p(g,"DIALOG",{class:!0});var k=y(e);l=p(k,"DIV",{class:!0});var U=y(l);t=p(U,"DIV",{class:!0});var V=y(t);o=M(V,n[1]),V.forEach(_),s=B(U),c=p(U,"DIV",{class:!0});var T=y(c);i=p(T,"DIV",{class:!0});var N=y(i);a=M(N,n[2]),N.forEach(_),r=B(T),b.l(T),T.forEach(_),U.forEach(_),k.forEach(_),this.h()},h(){u(t,"class","card-header"),u(i,"class","card-text"),u(c,"class","card-body"),u(l,"class","card"),u(e,"class","custom-dialog svelte-1fj4ifo")},m(g,k){L(g,e,k),h(e,l),h(l,t),h(t,o),h(l,s),h(l,c),h(c,i),h(i,a),h(c,r),b.m(c,null),n[10](e),d||(f=P(e,"close",n[6]),d=!0)},p(g,[k]){k&2&&W(o,g[1]),k&4&&W(a,g[2]),C===(C=v(g))&&b?b.p(g,k):(b.d(1),b=C(g),b&&(b.c(),b.m(c,null)))},i:w,o:w,d(g){g&&_(e),b.d(),n[10](null),d=!1,f()}}}function Be(n,e,l){let t,o,s,c,{fun:i}=e;function a(b,g){l(1,t=b),l(2,o=g),s.attributes.getNamedItem("open")||s.showModal()}function r(b){de.call(this,n,b)}const d=async()=>{i&&l(4,c=i()),c.then(()=>s.close())},f=()=>s.close(),v=()=>s.close();function C(b){he[b?"unshift":"push"](()=>{s=b,l(3,s)})}return n.$$set=b=>{"fun"in b&&l(0,i=b.fun)},[i,t,o,s,c,a,r,d,f,v,C]}class Me extends G{constructor(e){super(),F(this,e,Be,Ie,z,{fun:0,open:5})}get open(){return this.$$.ctx[5]}}export{Me as D,He as N,ge as g,le as h,Pe as u};
