import{s as fa,n as ba,r as wa,e as Ht}from"../chunks/scheduler.e108d1fd.js";import{S as ya,i as xa,g as l,s as o,m as at,z as _a,h as a,f as s,c as r,j as n,x as i,n as st,k as t,A as F,l as Ca,y as e,a as pa,B as va,o as nt}from"../chunks/index.a9aad4a7.js";import{g as ha,M as ga}from"../chunks/modal.f31235d0.js";import{c as ma,m as Ea,s as Ia,d as Aa}from"../chunks/store.154c51a5.js";const Ba=!1,Da=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ba},Symbol.toStringTag,{value:"Module"}));function Ta(c){let D,v,h,B,x,_,ct="SNDI",Ne,T,m,u,Q='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg>',H,b,N,ot='<h6 class="dropdown-header">Profil</h6>',Pe,X,C,rt="Aktueller Benutzer",Oe,Y,ut='<button class="dropdown-item" type="button">Passwort ändern</button>',it,d,P='<button id="login-creator" class="dropdown-item" type="button">Logins Verwalten</button>',dt,$,f,bl="Ausloggen",Nt,Ce,pl=`<div class="bg-dark-subtle"><div class="btn-group p-2 svelte-1y81bwy"><button id="add" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Hinzufügen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="edit" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Bearbeiten" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="del" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Entfernen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="cancel" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Schließen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path></svg></button></div></div> <ul class="sidebar-list list-group list-group-flush svelte-1y81bwy" id="sidebar-list"></ul> <div class="sidebar-search input-group pb-1 px-1 svelte-1y81bwy"><button id="advanced" class="btn btn-outline-secondary dropdown-toggle hide-arrow svelte-1y81bwy" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside" title="Nach Parametern Suchen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path></svg></button> <ul class="dropdown-menu" id="group-select-dropdown"><li><h6 class="dropdown-header">Gruppe</h6></li> <form class="px-3 py-1" action="javascript:handleAdvanced()"><div class="mb-2"><select id="group-select" class="form-select" aria-label="Group Select"></select></div> <button id="button-group-select" type="submit" class="btn btn-primary"><span id="spinner-group-select" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
						Suchen</button></form></ul> <input type="text" class="form-control" placeholder="Suche" id="search"/> <button id="select-button" class="btn btn-outline-secondary dropdown-toggle" type="button" title="Kategorie" data-bs-toggle="dropdown" aria-expanded="false">Bürger</button> <ul class="dropdown-menu dropdown-menu-end"><li><h6 class="dropdown-header">Kategorie</h6></li> <li><button id="user" class="dropdown-item active" type="button">Bürger</button></li> <li><button id="workless" class="dropdown-item" type="button">Arbeitslosenreg.</button></li> <li><button id="criminal" class="dropdown-item" type="button">Kriminalregister</button></li></ul></div>`,Pt,p,ee,vl='<div class="card-title row"><div class="col"><label for="forename" class="form-label">Vorname</label> <input id="forename" type="text" class="form-control" placeholder="Vorname" aria-label="Vorname" readonly=""/></div> <div class="col"><label for="surname" class="form-label">Nachname</label> <input id="surname" type="text" class="form-control" placeholder="Nachname" aria-label="Nachname" readonly=""/></div></div> <div class="row"><div class="col"><label for="account" class="form-label">Account</label> <input id="account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div> <div class="col"><label for="role" class="form-label">Gruppe</label> <input id="role" type="text" class="form-control" placeholder="Gruppe" aria-label="Gruppe" readonly=""/></div></div> <button id="user-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="user-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="user-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="user-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="user-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button>',Ot,te,hl='<div class="card-title row"><div class="col"><label for="workless-select" class="form-label">Account</label> <div class="input-group mb-3 workless-select"><button id="workless-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="workless-select-dropdown" class="dropdown-menu"></ul> <input id="workless-account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div></div> <div class="col"><label for="old-company" class="form-label">Vorheriger Betrieb</label> <input id="old-company" type="text" class="form-control" placeholder="Vorgeriger Betrieb" aria-label="Vorgeriger Betrieb" readonly=""/></div></div> <div class="row"><div class="col form-group"><label for="date-of-dismiss" class="form-label">Datum der Entlassung</label> <input type="date" class="form-control" id="date-of-dismiss" readonly=""/></div> <div class="col"><label for="currently-workless" class="form-label">Aktuell Arbeitslos</label> <div class="input-group mb-3 currently-select"><button id="currently-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswahl">Auswahl</button> <ul id="currently-select-dropdown" class="dropdown-menu"><li><button id="yes-currently" class="dropdown-item" type="button">Ja</button></li> <li><button id="no-currently" class="dropdown-item" type="button">Nein</button></li></ul> <input id="currently-workless" type="text" class="form-control" placeholder="Auswahl" aria-label="Auswahl" readonly=""/></div></div></div> <div id="only-on-currently-no" class="row" hidden=""><div class="col"><label for="new-company" class="form-label">Neuer Betrieb</label> <input id="new-company" type="text" class="form-control" placeholder="Neuer Betrieb" aria-label="Neuer Betrieb" readonly=""/></div> <div class="col"><label for="total-time" class="form-label">Insgeammte arbeitslose Zeit</label> <input id="total-time" type="text" class="form-control" placeholder="Insgeammte arbeitslose Zeit" aria-label="Insgeammte arbeitslose Zeit" readonly=""/></div></div> <button id="workless-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="workless-confirm-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="workless-abort-button" class="btn btn-outline-danger m-3" type="button" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 justify-content-center get-user" style="max-width: 160px;">Bürger abrufen</button>',St,le,gl='<div class="card-title row"><div class="col"><label for="criminal-select" class="form-label">Beschuldigter</label> <div class="input-group mb-3 criminal-select"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="criminal-select-dropdown" class="dropdown-menu"></ul> <input id="criminal-account" type="text" class="form-control" placeholder="Beschuldigter" aria-label="Beschuldigter" readonly=""/></div></div> <div class="col"><label for="kind" class="form-label">Art</label> <input id="kind" type="text" class="form-control" placeholder="Art" aria-label="Art" readonly=""/></div></div> <div class="row"><div class="col"><label for="accuser-select" class="form-label">Anzeiger</label> <div class="input-group mb-3 accuser-select"><button id="accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="accuser-select-dropdown" class="dropdown-menu"></ul> <input id="accuser" type="text" class="form-control" placeholder="Anzeiger" aria-label="Anzeiger" readonly=""/></div></div> <div class="col"><label for="police-consultant" class="form-label">Sachberater Polizei</label> <div class="input-group mb-3 police-consultant-select"><button id="police-consultant-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="police-consultant-select-dropdown" class="dropdown-menu"></ul> <input id="police-consultant" type="text" class="form-control" placeholder="Sachberater Polizei" aria-label="Sachberater Polizei" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="lawyer-culprit" class="form-label">Anwalt des Beschuldigtens</label> <div class="input-group mb-3 lawyer-culprit-select"><button id="lawyer-culprit-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-culprit-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-culprit" type="text" class="form-control" placeholder="Anwalt des Beschuldigtens" aria-label="Anwalt des Beschuldigtens" readonly=""/></div></div> <div class="col"><label for="lawyer-accuser" class="form-label">Anwalt des Anzeigers</label> <div class="input-group mb-3 lawyer-accuser-select"><button id="lawyer-accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-accuser-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-accuser" type="text" class="form-control" placeholder="Anwalt des Anzeigers" aria-label="Anwalt des Anzeigers" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="facts" class="form-label">Tatbestand</label> <input id="facts" type="text" class="form-control" placeholder="Tatbestand" aria-label="Tatbestand" readonly=""/></div></div> <div class="row"><div class="col"><label for="time-of-crime" class="form-label">Zeitpunkt der Tat</label> <input id="time-of-crime" type="text" class="form-control" placeholder="Zeitpunkt der Tat" aria-label="Zeitpunkt der Tat" readonly=""/></div> <div class="col"><label for="location-of-crime" class="form-label">Ort der Tat</label> <input id="location-of-crime" type="text" class="form-control" placeholder="Ort der Tat" aria-label="Ort der Tat" readonly=""/></div></div> <div class="row"><div class="col"><label for="note" class="form-label">Kommentar</label> <input id="note" type="text" class="form-control" placeholder="Kommentar" aria-label="Kommentar" readonly=""/></div></div> <div class="row"><div class="col"><label for="verdict" class="form-label">Urteil</label> <div class="input-group mb-3 verdict-select"><button id="verdict-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen">Urteil</button> <ul id="verdict-select-dropdown" class="dropdown-menu"><li><button id="no-yet" class="dropdown-item" type="button">a.) Noch kein Verfahren</button></li> <li><button id="guilty" class="dropdown-item" type="button">b.) Schuldig</button></li> <li><button id="innocent" class="dropdown-item" type="button">c.) Unschuldig</button></li></ul> <input id="verdict" type="text" class="form-control" placeholder="Urteil" aria-label="Urteil" readonly=""/></div></div></div> <button id="criminal-add-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="criminal-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="criminal-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 get-user" style="max-width: 160px;">Bürger abrufen</button>',Zt,w,I,ae,ml="Einen Login hinzufügen:",qt,Ee,fl='<div class="col"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-add-select-dropdown" class="dropdown-menu"></ul> <input id="login-add-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <div class="col"><label for="login-add-password" class="form-label">Passwort</label> <input id="login-add-password" type="password" class="form-control" placeholder="Passwort" aria-label="Passwort"/></div>',jt,A,se,ne,wl="Rechte für Bürger",Ut,L,O,yl="None",S,xl="ReadOnly",Z,_l="Write",Rt,oe,re,Cl="Rechte für Arbeitslose",Wt,M,q,El="None",j,Il="ReadOnly",U,Al="Write",Kt,ie,de,Bl="Rechte für das Kriminalregister",Gt,V,R,Tl="None",W,Ll="ReadOnly",K,Ml="Write",Jt,G,Vl=`<span id="add-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Hinzufügen`,Ft,Se,zl=`<label for="delete-login" class="form-label">Einen Login entfernen:</label> <div class="card-title row col delete-login"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-delete-select-dropdown" class="dropdown-menu"></ul> <input id="login-delete-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <button id="delete-login-button" type="button" class="btn btn-outline-danger m-3"><span id="delete-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Entfernen</button>`,Qt,Ze,kl=`<p style="margin: 0;">Alle Logins entfernen:</p> <button id="delete-all-logins-button" type="button" class="btn btn-outline-danger m-3 delete-all-logins"><span id="delete-all-logins-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Alle Logins löschen</button>`,Xt,ce,Dl="Schließen",Yt,ue,Hl=`<div><label for="password-changer" class="form-label">Passwort ändern:</label> <div class="card-title row password-changer"><div class="col"><label for="new-password" class="form-label">Neues Passwort</label> <input id="new-password" type="password" class="form-control" placeholder="Neues Passwort" aria-label="Neues Passwort"/></div> <div class="col"><label for="new-password-wdh" class="form-label">Wiederholen</label> <input id="new-password-wdh" type="password" class="form-control" placeholder="Wiederholen" aria-label="Wiederholen"/></div></div> <button id="change-password-button" type="button" class="btn btn-outline-danger m-3"><span id="change-password-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
					Ändern</button></div> <button class="btn btn-outline-danger m-2" type="button">Schließen</button>`,$t,z,be,qe,je,pe,Ie,Nl="Name",el,Ae,bt,tl,Ue,Re,ve,Be,Pl="Version",ll,Te,pt,al,he,We,Ke,ge,Le,Ol="Entwickler",sl,Me,vt,nl,Ge,Je,me,Ve,Sl="Repository",ol,Fe,J,ht,rl,fe,Qe,Xe,we,ze,Zl="Beschreibung",il,ke,gt,dl,Ye,$e,ye,De,ql="Bürger insgesammt",cl,He,mt,ul,jl;return{c(){D=l("meta"),v=o(),h=l("section"),B=l("nav"),x=l("div"),_=l("a"),_.textContent=ct,Ne=o(),T=l("div"),m=l("div"),u=l("button"),u.innerHTML=Q,H=o(),b=l("ul"),N=l("li"),N.innerHTML=ot,Pe=o(),X=l("li"),C=l("button"),C.textContent=rt,Oe=o(),Y=l("li"),Y.innerHTML=ut,it=o(),d=l("li"),d.innerHTML=P,dt=o(),$=l("li"),f=l("button"),f.textContent=bl,Nt=o(),Ce=l("div"),Ce.innerHTML=pl,Pt=o(),p=l("div"),ee=l("div"),ee.innerHTML=vl,Ot=o(),te=l("div"),te.innerHTML=hl,St=o(),le=l("div"),le.innerHTML=gl,Zt=o(),w=l("div"),I=l("div"),ae=l("label"),ae.textContent=ml,qt=o(),Ee=l("div"),Ee.innerHTML=fl,jt=o(),A=l("div"),se=l("div"),ne=l("label"),ne.textContent=wl,Ut=o(),L=l("select"),O=l("option"),O.textContent=yl,S=l("option"),S.textContent=xl,Z=l("option"),Z.textContent=_l,Rt=o(),oe=l("div"),re=l("label"),re.textContent=Cl,Wt=o(),M=l("select"),q=l("option"),q.textContent=El,j=l("option"),j.textContent=Il,U=l("option"),U.textContent=Al,Kt=o(),ie=l("div"),de=l("label"),de.textContent=Bl,Gt=o(),V=l("select"),R=l("option"),R.textContent=Tl,W=l("option"),W.textContent=Ll,K=l("option"),K.textContent=Ml,Jt=o(),G=l("button"),G.innerHTML=Vl,Ft=o(),Se=l("div"),Se.innerHTML=zl,Qt=o(),Ze=l("div"),Ze.innerHTML=kl,Xt=o(),ce=l("button"),ce.textContent=Dl,Yt=o(),ue=l("div"),ue.innerHTML=Hl,$t=o(),z=l("div"),be=l("div"),qe=l("div"),je=l("div"),pe=l("div"),Ie=l("h5"),Ie.textContent=Nl,el=o(),Ae=l("p"),bt=at(c[0]),tl=o(),Ue=l("div"),Re=l("div"),ve=l("div"),Be=l("h5"),Be.textContent=Pl,ll=o(),Te=l("p"),pt=at(c[1]),al=o(),he=l("div"),We=l("div"),Ke=l("div"),ge=l("div"),Le=l("h5"),Le.textContent=Ol,sl=o(),Me=l("p"),vt=at(c[2]),nl=o(),Ge=l("div"),Je=l("div"),me=l("div"),Ve=l("h5"),Ve.textContent=Sl,ol=o(),Fe=l("p"),J=l("a"),ht=at(c[3]),rl=o(),fe=l("div"),Qe=l("div"),Xe=l("div"),we=l("div"),ze=l("h5"),ze.textContent=Zl,il=o(),ke=l("p"),gt=at(c[4]),dl=o(),Ye=l("div"),$e=l("div"),ye=l("div"),De=l("h5"),De.textContent=ql,cl=o(),He=l("p"),mt=at(c[5]),this.h()},l(g){const y=_a("svelte-pset25",document.head);D=a(y,"META",{name:!0,content:!0}),y.forEach(s),v=r(g),h=a(g,"SECTION",{class:!0});var et=n(h);B=a(et,"NAV",{class:!0});var Ul=n(B);x=a(Ul,"DIV",{class:!0});var ft=n(x);_=a(ft,"A",{href:!0,class:!0,"data-svelte-h":!0}),i(_)!=="svelte-130echy"&&(_.textContent=ct),Ne=r(ft),T=a(ft,"DIV",{class:!0});var Rl=n(T);m=a(Rl,"DIV",{class:!0});var wt=n(m);u=a(wt,"BUTTON",{class:!0,type:!0,title:!0,"data-bs-toggle":!0,"aria-expanded":!0,"data-svelte-h":!0}),i(u)!=="svelte-1uf5uhq"&&(u.innerHTML=Q),H=r(wt),b=a(wt,"UL",{class:!0});var k=n(b);N=a(k,"LI",{"data-svelte-h":!0}),i(N)!=="svelte-juqfu2"&&(N.innerHTML=ot),Pe=r(k),X=a(k,"LI",{});var Wl=n(X);C=a(Wl,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),i(C)!=="svelte-1qwv6wx"&&(C.textContent=rt),Wl.forEach(s),Oe=r(k),Y=a(k,"LI",{"data-svelte-h":!0}),i(Y)!=="svelte-1ejrwio"&&(Y.innerHTML=ut),it=r(k),d=a(k,"LI",{"data-svelte-h":!0}),i(d)!=="svelte-1wg4okg"&&(d.innerHTML=P),dt=r(k),$=a(k,"LI",{});var Kl=n($);f=a(Kl,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),i(f)!=="svelte-2ibqva"&&(f.textContent=bl),Kl.forEach(s),k.forEach(s),wt.forEach(s),Rl.forEach(s),ft.forEach(s),Ul.forEach(s),Nt=r(et),Ce=a(et,"DIV",{class:!0,"data-svelte-h":!0}),i(Ce)!=="svelte-1axk1q2"&&(Ce.innerHTML=pl),Pt=r(et),p=a(et,"DIV",{class:!0});var E=n(p);ee=a(E,"DIV",{id:!0,"data-svelte-h":!0}),i(ee)!=="svelte-1gdqj6y"&&(ee.innerHTML=vl),Ot=r(E),te=a(E,"DIV",{id:!0,"data-svelte-h":!0}),i(te)!=="svelte-1q1683a"&&(te.innerHTML=hl),St=r(E),le=a(E,"DIV",{id:!0,"data-svelte-h":!0}),i(le)!=="svelte-yubxqo"&&(le.innerHTML=gl),Zt=r(E),w=a(E,"DIV",{id:!0});var xe=n(w);I=a(xe,"DIV",{});var _e=n(I);ae=a(_e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),i(ae)!=="svelte-1elzi6x"&&(ae.textContent=ml),qt=r(_e),Ee=a(_e,"DIV",{class:!0,"data-svelte-h":!0}),i(Ee)!=="svelte-1nek0y8"&&(Ee.innerHTML=fl),jt=r(_e),A=a(_e,"DIV",{class:!0,style:!0});var tt=n(A);se=a(tt,"DIV",{class:!0});var yt=n(se);ne=a(yt,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),i(ne)!=="svelte-1dy4v9n"&&(ne.textContent=wl),Ut=r(yt),L=a(yt,"SELECT",{id:!0,class:!0,"aria-label":!0});var xt=n(L);O=a(xt,"OPTION",{"data-svelte-h":!0}),i(O)!=="svelte-qtemz2"&&(O.textContent=yl),S=a(xt,"OPTION",{"data-svelte-h":!0}),i(S)!=="svelte-qphrza"&&(S.textContent=xl),Z=a(xt,"OPTION",{"data-svelte-h":!0}),i(Z)!=="svelte-ov28pk"&&(Z.textContent=_l),xt.forEach(s),yt.forEach(s),Rt=r(tt),oe=a(tt,"DIV",{class:!0});var _t=n(oe);re=a(_t,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),i(re)!=="svelte-1ylgrto"&&(re.textContent=Cl),Wt=r(_t),M=a(_t,"SELECT",{id:!0,class:!0,"aria-label":!0});var Ct=n(M);q=a(Ct,"OPTION",{"data-svelte-h":!0}),i(q)!=="svelte-qtemz2"&&(q.textContent=El),j=a(Ct,"OPTION",{"data-svelte-h":!0}),i(j)!=="svelte-qphrza"&&(j.textContent=Il),U=a(Ct,"OPTION",{"data-svelte-h":!0}),i(U)!=="svelte-ov28pk"&&(U.textContent=Al),Ct.forEach(s),_t.forEach(s),Kt=r(tt),ie=a(tt,"DIV",{class:!0});var Et=n(ie);de=a(Et,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),i(de)!=="svelte-d0gpuu"&&(de.textContent=Bl),Gt=r(Et),V=a(Et,"SELECT",{id:!0,class:!0,"aria-label":!0});var It=n(V);R=a(It,"OPTION",{"data-svelte-h":!0}),i(R)!=="svelte-qtemz2"&&(R.textContent=Tl),W=a(It,"OPTION",{"data-svelte-h":!0}),i(W)!=="svelte-qphrza"&&(W.textContent=Ll),K=a(It,"OPTION",{"data-svelte-h":!0}),i(K)!=="svelte-ov28pk"&&(K.textContent=Ml),It.forEach(s),Et.forEach(s),tt.forEach(s),Jt=r(_e),G=a(_e,"BUTTON",{id:!0,type:!0,class:!0,"data-svelte-h":!0}),i(G)!=="svelte-1h1u1w8"&&(G.innerHTML=Vl),_e.forEach(s),Ft=r(xe),Se=a(xe,"DIV",{"data-svelte-h":!0}),i(Se)!=="svelte-k308nx"&&(Se.innerHTML=zl),Qt=r(xe),Ze=a(xe,"DIV",{"data-svelte-h":!0}),i(Ze)!=="svelte-2smmib"&&(Ze.innerHTML=kl),Xt=r(xe),ce=a(xe,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),i(ce)!=="svelte-muivp7"&&(ce.textContent=Dl),xe.forEach(s),Yt=r(E),ue=a(E,"DIV",{id:!0,"data-svelte-h":!0}),i(ue)!=="svelte-19r1zvj"&&(ue.innerHTML=Hl),$t=r(E),z=a(E,"DIV",{id:!0});var lt=n(z);be=a(lt,"DIV",{class:!0});var At=n(be);qe=a(At,"DIV",{class:!0});var Gl=n(qe);je=a(Gl,"DIV",{class:!0});var Jl=n(je);pe=a(Jl,"DIV",{class:!0});var Bt=n(pe);Ie=a(Bt,"H5",{class:!0,"data-svelte-h":!0}),i(Ie)!=="svelte-1kwnnjr"&&(Ie.textContent=Nl),el=r(Bt),Ae=a(Bt,"P",{class:!0,id:!0});var Fl=n(Ae);bt=st(Fl,c[0]),Fl.forEach(s),Bt.forEach(s),Jl.forEach(s),Gl.forEach(s),tl=r(At),Ue=a(At,"DIV",{class:!0});var Ql=n(Ue);Re=a(Ql,"DIV",{class:!0});var Xl=n(Re);ve=a(Xl,"DIV",{class:!0});var Tt=n(ve);Be=a(Tt,"H5",{class:!0,"data-svelte-h":!0}),i(Be)!=="svelte-17yk5mw"&&(Be.textContent=Pl),ll=r(Tt),Te=a(Tt,"P",{class:!0,id:!0});var Yl=n(Te);pt=st(Yl,c[1]),Yl.forEach(s),Tt.forEach(s),Xl.forEach(s),Ql.forEach(s),At.forEach(s),al=r(lt),he=a(lt,"DIV",{class:!0});var Lt=n(he);We=a(Lt,"DIV",{class:!0});var $l=n(We);Ke=a($l,"DIV",{class:!0});var ea=n(Ke);ge=a(ea,"DIV",{class:!0});var Mt=n(ge);Le=a(Mt,"H5",{class:!0,"data-svelte-h":!0}),i(Le)!=="svelte-608fws"&&(Le.textContent=Ol),sl=r(Mt),Me=a(Mt,"P",{class:!0,id:!0});var ta=n(Me);vt=st(ta,c[2]),ta.forEach(s),Mt.forEach(s),ea.forEach(s),$l.forEach(s),nl=r(Lt),Ge=a(Lt,"DIV",{class:!0});var la=n(Ge);Je=a(la,"DIV",{class:!0});var aa=n(Je);me=a(aa,"DIV",{class:!0});var Vt=n(me);Ve=a(Vt,"H5",{class:!0,"data-svelte-h":!0}),i(Ve)!=="svelte-j7xmxi"&&(Ve.textContent=Sl),ol=r(Vt),Fe=a(Vt,"P",{class:!0});var sa=n(Fe);J=a(sa,"A",{target:!0,id:!0,href:!0});var na=n(J);ht=st(na,c[3]),na.forEach(s),sa.forEach(s),Vt.forEach(s),aa.forEach(s),la.forEach(s),Lt.forEach(s),rl=r(lt),fe=a(lt,"DIV",{class:!0});var zt=n(fe);Qe=a(zt,"DIV",{class:!0});var oa=n(Qe);Xe=a(oa,"DIV",{class:!0});var ra=n(Xe);we=a(ra,"DIV",{class:!0});var kt=n(we);ze=a(kt,"H5",{class:!0,"data-svelte-h":!0}),i(ze)!=="svelte-taedct"&&(ze.textContent=Zl),il=r(kt),ke=a(kt,"P",{class:!0,id:!0});var ia=n(ke);gt=st(ia,c[4]),ia.forEach(s),kt.forEach(s),ra.forEach(s),oa.forEach(s),dl=r(zt),Ye=a(zt,"DIV",{class:!0});var da=n(Ye);$e=a(da,"DIV",{class:!0});var ca=n($e);ye=a(ca,"DIV",{class:!0});var Dt=n(ye);De=a(Dt,"H5",{class:!0,"data-svelte-h":!0}),i(De)!=="svelte-1rja4xk"&&(De.textContent=ql),cl=r(Dt),He=a(Dt,"P",{class:!0,id:!0});var ua=n(He);mt=st(ua,c[5]),ua.forEach(s),Dt.forEach(s),ca.forEach(s),da.forEach(s),zt.forEach(s),lt.forEach(s),E.forEach(s),et.forEach(s),this.h()},h(){document.title="SNDM",t(D,"name","description"),t(D,"content","Main Page"),t(_,"href","/"),t(_,"class","navbar-brand svelte-1y81bwy"),t(u,"class","btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy"),t(u,"type","button"),t(u,"title","Profil"),t(u,"data-bs-toggle","dropdown"),t(u,"aria-expanded","false"),t(C,"class","dropdown-item"),t(C,"type","button"),t(f,"class","dropdown-item"),t(f,"type","button"),t(b,"class","dropdown-menu dropdown-menu-end"),t(m,"class","btn-group dropdown"),t(T,"class","d-flex"),t(x,"class","container-fluid"),t(B,"class","nav navbar bg-secondary-subtle svelte-1y81bwy"),t(Ce,"class","sidebar bg-dark svelte-1y81bwy"),t(ee,"id","user-container"),ee.hidden=!0,t(te,"id","workless-container"),te.hidden=!0,t(le,"id","criminal-container"),le.hidden=!0,t(ae,"for","add-login"),t(ae,"class","form-label"),t(Ee,"class","card-title row add-login"),t(ne,"for","login-add-user-permissions"),t(ne,"class","form-label"),O.__value="None",F(O,O.__value),S.__value="ReadOnly",F(S,S.__value),Z.__value="Write",F(Z,Z.__value),t(L,"id","login-add-user-permissions"),t(L,"class","form-select"),t(L,"aria-label","Permissions"),t(se,"class","col"),t(re,"for","login-add-workless-permissions"),t(re,"class","form-label"),q.__value="None",F(q,q.__value),j.__value="ReadOnly",F(j,j.__value),U.__value="Write",F(U,U.__value),t(M,"id","login-add-workless-permissions"),t(M,"class","form-select"),t(M,"aria-label","Permissions"),t(oe,"class","col"),t(de,"for","login-add-criminal-permissions"),t(de,"class","form-label"),R.__value="None",F(R,R.__value),W.__value="ReadOnly",F(W,W.__value),K.__value="Write",F(K,K.__value),t(V,"id","login-add-criminal-permissions"),t(V,"class","form-select"),t(V,"aria-label","Permissions"),t(ie,"class","col"),t(A,"class","row"),Ca(A,"padding-top","5px"),t(G,"id","add-login-button"),t(G,"type","button"),t(G,"class","btn btn-outline-danger m-3"),t(ce,"class","btn btn-outline-danger m-2"),t(ce,"type","button"),t(w,"id","login-container"),w.hidden=!0,t(ue,"id","password-changer-container"),ue.hidden=!0,t(Ie,"class","card-title"),t(Ae,"class","card-text"),t(Ae,"id","name"),t(pe,"class","card-body"),t(je,"class","card"),t(qe,"class","col-sm-6 mb-3 mb-sm-0"),t(Be,"class","card-title"),t(Te,"class","card-text"),t(Te,"id","version"),t(ve,"class","card-body"),t(Re,"class","card"),t(Ue,"class","col-sm-6"),t(be,"class","row p-3"),t(Le,"class","card-title"),t(Me,"class","card-text"),t(Me,"id","devs"),t(ge,"class","card-body"),t(Ke,"class","card"),t(We,"class","col-sm-6 mb-3 mb-sm-0"),t(Ve,"class","card-title"),t(J,"target","_blank"),t(J,"id","repo"),t(J,"href",c[3]),t(Fe,"class","card-text"),t(me,"class","card-body"),t(Je,"class","card"),t(Ge,"class","col-sm-6"),t(he,"class","row p-3"),t(ze,"class","card-title"),t(ke,"class","card-text"),t(ke,"id","description"),t(we,"class","card-body"),t(Xe,"class","card"),t(Qe,"class","col-sm-6 mb-3 mb-sm-0"),t(De,"class","card-title"),t(He,"class","card-text"),t(He,"id","users"),t(ye,"class","card-body"),t($e,"class","card"),t(Ye,"class","col-sm-6"),t(fe,"class","row p-3"),t(z,"id","stats-container"),t(p,"class","mid p-3 bg-body-secondary svelte-1y81bwy"),t(h,"class","main svelte-1y81bwy")},m(g,y){e(document.head,D),pa(g,v,y),pa(g,h,y),e(h,B),e(B,x),e(x,_),e(x,Ne),e(x,T),e(T,m),e(m,u),e(m,H),e(m,b),e(b,N),e(b,Pe),e(b,X),e(X,C),e(b,Oe),e(b,Y),e(b,it),e(b,d),e(b,dt),e(b,$),e($,f),e(h,Nt),e(h,Ce),e(h,Pt),e(h,p),e(p,ee),e(p,Ot),e(p,te),e(p,St),e(p,le),e(p,Zt),e(p,w),e(w,I),e(I,ae),e(I,qt),e(I,Ee),e(I,jt),e(I,A),e(A,se),e(se,ne),e(se,Ut),e(se,L),e(L,O),e(L,S),e(L,Z),e(A,Rt),e(A,oe),e(oe,re),e(oe,Wt),e(oe,M),e(M,q),e(M,j),e(M,U),e(A,Kt),e(A,ie),e(ie,de),e(ie,Gt),e(ie,V),e(V,R),e(V,W),e(V,K),e(I,Jt),e(I,G),e(w,Ft),e(w,Se),e(w,Qt),e(w,Ze),e(w,Xt),e(w,ce),e(p,Yt),e(p,ue),e(p,$t),e(p,z),e(z,be),e(be,qe),e(qe,je),e(je,pe),e(pe,Ie),e(pe,el),e(pe,Ae),e(Ae,bt),e(be,tl),e(be,Ue),e(Ue,Re),e(Re,ve),e(ve,Be),e(ve,ll),e(ve,Te),e(Te,pt),e(z,al),e(z,he),e(he,We),e(We,Ke),e(Ke,ge),e(ge,Le),e(ge,sl),e(ge,Me),e(Me,vt),e(he,nl),e(he,Ge),e(Ge,Je),e(Je,me),e(me,Ve),e(me,ol),e(me,Fe),e(Fe,J),e(J,ht),e(z,rl),e(z,fe),e(fe,Qe),e(Qe,Xe),e(Xe,we),e(we,ze),e(we,il),e(we,ke),e(ke,gt),e(fe,dl),e(fe,Ye),e(Ye,$e),e($e,ye),e(ye,De),e(ye,cl),e(ye,He),e(He,mt),ul||(jl=[va(C,"click",c[11]),va(f,"click",c[12])],ul=!0)},p(g,[y]){y&1&&nt(bt,g[0]),y&2&&nt(pt,g[1]),y&4&&nt(vt,g[2]),y&8&&nt(ht,g[3]),y&8&&t(J,"href",g[3]),y&16&&nt(gt,g[4]),y&32&&nt(mt,g[5])},i:ba,o:ba,d(g){g&&(s(v),s(h)),s(D),ul=!1,wa(jl)}}}function La(c,D,v){let h,B,x,_;Ht(c,ma,d=>v(7,h=d)),Ht(c,Ea,d=>v(8,B=d)),Ht(c,Ia,d=>v(9,x=d)),Ht(c,Aa,d=>v(10,_=d));async function ct(d,P,dt){const $=await fetch(d,{method:P,headers:{Authorization:"Basic "+Ne,"Content-Type":"application/json; charset=utf-8"},body:dt});let f=await $.json();if($.status===200&&!f.Err)return f.Ok;b(f.Err)}var Ne=localStorage.getItem("auth");const T=localStorage.getItem("current_user");var m=localStorage.getItem("permissions");m&&(m=JSON.parse(m)),(!Ne||!T||!m)&&(ha("/login",{replaceState:!0}),b("InvalidLocalKeys"));let u,Q,H;function b(d){if(u&&Q&&H){const P=new ga(u);Q.textContent="Fehler",H.textContent=d,P.toggle()}throw d}function N(){if(u&&Q&&H&&T){const d=new ga(u);Q.textContent="Info",H.textContent="Der akutelle Benutzer ist "+T,d.toggle()}}ma.set("sss");let ot="",Pe="",X="",C="",rt="",Oe="";async function Y(){const d=await ct("/stats","GET",null),P=d.developer.split(":");v(0,ot=d.name),v(1,Pe=d.version),v(2,X="Programmer/Project Lead "+P[0]+" und Assistant Programmer "+P[1]),v(3,C=d.repo),v(4,rt=d.description),v(5,Oe=d.users)}const ut=()=>N(),it=()=>{localStorage.clear(),ha("/login",{replaceState:!0})};return c.$$.update=()=>{c.$$.dirty&1792&&(u=_,Q=x,H=B),c.$$.dirty&128&&console.log(h)},Y(),[ot,Pe,X,C,rt,Oe,N,h,B,x,_,ut,it]}class Ha extends ya{constructor(D){super(),xa(this,D,La,Ta,fa,{})}}export{Ha as component,Da as universal};
