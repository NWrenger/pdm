import{s as W,n as Z,r as se,e as le,q as ae,b as ne}from"./scheduler.876dbae6.js";import{S as z,i as G,g as h,s as D,m as O,h as _,j as g,A as M,c as I,n as A,f as v,k as d,a as F,x as c,z as B,o as q,d as P,p as re,t as x,b as oe,r as ie,u as ce,v as ue,w as de}from"./index.ba11a9a1.js";import{p as fe}from"./stores.34dfe75b.js";import{j as he}from"./singletons.20cb8f35.js";const _e=he("goto");function ve(n){let t,s,e,f='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>',a,r,o,l,i,u,p,m,L="Passwort ändern",w,U,b,N,y,T,V,k,J="Ausloggen",j,K;return{c(){t=h("div"),s=h("div"),e=h("button"),e.innerHTML=f,a=D(),r=h("ul"),o=h("li"),l=h("h6"),i=O(n[0]),u=D(),p=h("li"),m=h("button"),m.textContent=L,w=D(),U=h("li"),b=h("button"),N=O("Logins Verwalten"),T=D(),V=h("li"),k=h("button"),k.textContent=J,this.h()},l(E){t=_(E,"DIV",{class:!0});var C=g(t);s=_(C,"DIV",{class:!0});var H=g(s);e=_(H,"BUTTON",{class:!0,type:!0,title:!0,"data-bs-toggle":!0,"aria-expanded":!0,"data-svelte-h":!0}),M(e)!=="svelte-1y4fith"&&(e.innerHTML=f),a=I(H),r=_(H,"UL",{class:!0});var S=g(r);o=_(S,"LI",{});var Q=g(o);l=_(Q,"H6",{class:!0});var R=g(l);i=A(R,n[0]),R.forEach(v),Q.forEach(v),u=I(S),p=_(S,"LI",{});var X=g(p);m=_(X,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),M(m)!=="svelte-e3icxy"&&(m.textContent=L),X.forEach(v),w=I(S),U=_(S,"LI",{});var Y=g(U);b=_(Y,"BUTTON",{id:!0,class:!0,type:!0});var $=g(b);N=A($,"Logins Verwalten"),$.forEach(v),Y.forEach(v),T=I(S),V=_(S,"LI",{});var ee=g(V);k=_(ee,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),M(k)!=="svelte-1997fkn"&&(k.textContent=J),ee.forEach(v),S.forEach(v),H.forEach(v),C.forEach(v),this.h()},h(){d(e,"class","btn btn-outline-danger dropdown-toggle hide-arrow svelte-1aynsk9"),d(e,"type","button"),d(e,"title","Profil"),d(e,"data-bs-toggle","dropdown"),d(e,"aria-expanded","false"),d(l,"class","dropdown-header"),d(m,"class","dropdown-item"),d(m,"type","button"),d(b,"id","login-creator"),d(b,"class","dropdown-item"),d(b,"type","button"),b.disabled=y=n[1]!=="Write",d(k,"class","dropdown-item"),d(k,"type","button"),d(r,"class","dropdown-menu dropdown-menu-end"),d(s,"class","btn-group dropdown"),d(t,"class","d-flex")},m(E,C){F(E,t,C),c(t,s),c(s,e),c(s,a),c(s,r),c(r,o),c(o,l),c(l,i),c(r,u),c(r,p),c(p,m),c(r,w),c(r,U),c(U,b),c(b,N),c(r,T),c(r,V),c(V,k),j||(K=[B(m,"click",n[3]),B(b,"click",n[4]),B(k,"click",n[5])],j=!0)},p(E,[C]){C&1&&q(i,E[0]),C&2&&y!==(y=E[1]!=="Write")&&(b.disabled=y)},i:Z,o:Z,d(E){E&&v(t),j=!1,se(K)}}}function ge(n,t,s){let{currentUser:e}=t,{accessUser:f}=t,{onSelect:a}=t;const r=()=>{a&&a("password")},o=()=>{a&&a("login")},l=()=>{localStorage.clear(),_e("/login",{replaceState:!0})};return n.$$set=i=>{"currentUser"in i&&s(0,e=i.currentUser),"accessUser"in i&&s(1,f=i.accessUser),"onSelect"in i&&s(2,a=i.onSelect)},[e,f,a,r,o,l]}class me extends z{constructor(t){super(),G(this,t,ge,ve,W,{currentUser:0,accessUser:1,onSelect:2})}}function te(n){let t,s;return t=new me({props:{onSelect:n[2],currentUser:n[0],accessUser:n[1]}}),{c(){ie(t.$$.fragment)},l(e){ce(t.$$.fragment,e)},m(e,f){ue(t,e,f),s=!0},p(e,f){const a={};f&4&&(a.onSelect=e[2]),f&1&&(a.currentUser=e[0]),f&2&&(a.accessUser=e[1]),t.$set(a)},i(e){s||(P(t.$$.fragment,e),s=!0)},o(e){x(t.$$.fragment,e),s=!1},d(e){de(t,e)}}}function be(n){let t,s,e,f,a,r,o,l=n[0]!=null&&te(n);return{c(){t=h("nav"),s=h("div"),e=h("a"),f=O("SchillerDB"),r=D(),l&&l.c(),this.h()},l(i){t=_(i,"NAV",{class:!0});var u=g(t);s=_(u,"DIV",{class:!0});var p=g(s);e=_(p,"A",{href:!0,"data-sveltekit-reload":!0,class:!0});var m=g(e);f=A(m,"SchillerDB"),m.forEach(v),r=I(p),l&&l.l(p),p.forEach(v),u.forEach(v),this.h()},h(){d(e,"href",a=n[3].url.pathname),d(e,"data-sveltekit-reload",""),d(e,"class","navbar-brand svelte-114yh5g"),d(s,"class","container-fluid"),d(t,"class","nav navbar bg-secondary-subtle svelte-114yh5g")},m(i,u){F(i,t,u),c(t,s),c(s,e),c(e,f),c(s,r),l&&l.m(s,null),o=!0},p(i,[u]){(!o||u&8&&a!==(a=i[3].url.pathname))&&d(e,"href",a),i[0]!=null?l?(l.p(i,u),u&1&&P(l,1)):(l=te(i),l.c(),P(l,1),l.m(s,null)):l&&(re(),x(l,1,1,()=>{l=null}),oe())},i(i){o||(P(l),o=!0)},o(i){x(l),o=!1},d(i){i&&v(t),l&&l.d()}}}function pe(n,t,s){let e;le(n,fe,o=>s(3,e=o));let{currentUser:f=null}=t,{accessUser:a=null}=t,{onSelect:r}=t;return n.$$set=o=>{"currentUser"in o&&s(0,f=o.currentUser),"accessUser"in o&&s(1,a=o.accessUser),"onSelect"in o&&s(2,r=o.onSelect)},[f,a,r,e]}class Ce extends z{constructor(t){super(),G(this,t,pe,be,W,{currentUser:0,accessUser:1,onSelect:2})}}function Ue(n){let t,s,e,f,a,r,o,l,i,u,p="Schließen",m,L;return{c(){t=h("dialog"),s=h("div"),e=h("div"),f=O(n[0]),a=D(),r=h("div"),o=h("div"),l=O(n[1]),i=D(),u=h("button"),u.textContent=p,this.h()},l(w){t=_(w,"DIALOG",{class:!0});var U=g(t);s=_(U,"DIV",{class:!0});var b=g(s);e=_(b,"DIV",{class:!0});var N=g(e);f=A(N,n[0]),N.forEach(v),a=I(b),r=_(b,"DIV",{class:!0});var y=g(r);o=_(y,"DIV",{class:!0});var T=g(o);l=A(T,n[1]),T.forEach(v),i=I(y),u=_(y,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),M(u)!=="svelte-h6oa6y"&&(u.textContent=p),y.forEach(v),b.forEach(v),U.forEach(v),this.h()},h(){d(e,"class","card-header"),d(o,"class","card-text"),d(u,"type","button"),d(u,"class","btn btn-secondary mt-3"),d(r,"class","card-body"),d(s,"class","card"),d(t,"class","custom-dialog svelte-1fj4ifo")},m(w,U){F(w,t,U),c(t,s),c(s,e),c(e,f),c(s,a),c(s,r),c(r,o),c(o,l),c(r,i),c(r,u),n[6](t),m||(L=[B(u,"click",n[5]),B(t,"close",n[4])],m=!0)},p(w,[U]){U&1&&q(f,w[0]),U&2&&q(l,w[1])},i:Z,o:Z,d(w){w&&v(t),n[6](null),m=!1,se(L)}}}function we(n,t,s){let e,f,a;function r(u,p){s(0,e=u),s(1,f=p),a.attributes.getNamedItem("open")||a.showModal()}function o(u){ae.call(this,n,u)}const l=()=>a.close();function i(u){ne[u?"unshift":"push"](()=>{a=u,s(2,a)})}return[e,f,a,r,o,l,i]}class De extends z{constructor(t){super(),G(this,t,we,Ue,W,{open:3})}get open(){return this.$$.ctx[3]}}export{De as D,Ce as N,_e as g};
