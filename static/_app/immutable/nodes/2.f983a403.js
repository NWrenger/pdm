import{s as et,n as Me,e as Te}from"../chunks/scheduler.e108d1fd.js";import{S as tt,i as lt,g as l,s as n,z as at,h as a,f as i,c as o,j as v,x as s,k as t,A as H,l as st,y as e,a as $e}from"../chunks/index.a9aad4a7.js";import"../chunks/bootstrap.esm.5e9b5585.js";import{m as nt,s as ot,d as rt}from"../chunks/store.04b0bdc9.js";const it=!1,ht=Object.freeze(Object.defineProperty({__proto__:null,ssr:it},Symbol.toStringTag,{value:"Module"}));function dt(G){let f,N,d,h,le='<div class="container-fluid"><a href="/" class="navbar-brand svelte-1y81bwy">SNDI</a> <div class="d-flex"><div class="btn-group dropdown"><button class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" title="Profil" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path></svg></button> <ul class="dropdown-menu dropdown-menu-end"><li><h6 class="dropdown-header">Profil</h6></li> <li><button class="dropdown-item" type="button">Aktueller Benutzer</button></li> <li><button class="dropdown-item" type="button">Passwort ändern</button></li> <li><button id="login-creator" class="dropdown-item" type="button">Logins Verwalten</button></li> <li><button class="dropdown-item" type="button">Ausloggen</button></li></ul></div></div></div>',y,J,Le=`<div class="bg-dark-subtle"><div class="btn-group p-2 svelte-1y81bwy"><button id="add" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Hinzufügen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="edit" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Bearbeiten" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="del" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Entfernen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path></svg></button></div> <div class="btn-group p-2 svelte-1y81bwy"><button id="cancel" class="btn btn-outline-danger" type="button" aria-expanded="false" title="Schließen" hidden=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path></svg></button></div></div> <ul class="sidebar-list list-group list-group-flush svelte-1y81bwy" id="sidebar-list"></ul> <div class="sidebar-search input-group pb-1 px-1 svelte-1y81bwy"><button id="advanced" class="btn btn-outline-secondary dropdown-toggle hide-arrow svelte-1y81bwy" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-auto-close="outside" title="Nach Parametern Suchen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path></svg></button> <ul class="dropdown-menu" id="group-select-dropdown"><li><h6 class="dropdown-header">Gruppe</h6></li> <form class="px-3 py-1" action="javascript:handleAdvanced()"><div class="mb-2"><select id="group-select" class="form-select" aria-label="Group Select"></select></div> <button id="button-group-select" type="submit" class="btn btn-primary"><span id="spinner-group-select" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
						Suchen</button></form></ul> <input type="text" class="form-control" placeholder="Suche" id="search"/> <button id="select-button" class="btn btn-outline-secondary dropdown-toggle" type="button" title="Kategorie" data-bs-toggle="dropdown" aria-expanded="false">Bürger</button> <ul class="dropdown-menu dropdown-menu-end"><li><h6 class="dropdown-header">Kategorie</h6></li> <li><button id="user" class="dropdown-item active" type="button">Bürger</button></li> <li><button id="workless" class="dropdown-item" type="button">Arbeitslosenreg.</button></li> <li><button id="criminal" class="dropdown-item" type="button">Kriminalregister</button></li></ul></div>`,ce,r,V,ke='<div class="card-title row"><div class="col"><label for="forename" class="form-label">Vorname</label> <input id="forename" type="text" class="form-control" placeholder="Vorname" aria-label="Vorname" readonly=""/></div> <div class="col"><label for="surname" class="form-label">Nachname</label> <input id="surname" type="text" class="form-control" placeholder="Nachname" aria-label="Nachname" readonly=""/></div></div> <div class="row"><div class="col"><label for="account" class="form-label">Account</label> <input id="account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div> <div class="col"><label for="role" class="form-label">Gruppe</label> <input id="role" type="text" class="form-control" placeholder="Gruppe" aria-label="Gruppe" readonly=""/></div></div> <button id="user-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="user-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="user-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="user-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="user-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button>',ue,O,He='<div class="card-title row"><div class="col"><label for="workless-select" class="form-label">Account</label> <div class="input-group mb-3 workless-select"><button id="workless-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="workless-select-dropdown" class="dropdown-menu"></ul> <input id="workless-account" type="text" class="form-control" placeholder="Account" aria-label="Account" readonly=""/></div></div> <div class="col"><label for="old-company" class="form-label">Vorheriger Betrieb</label> <input id="old-company" type="text" class="form-control" placeholder="Vorgeriger Betrieb" aria-label="Vorgeriger Betrieb" readonly=""/></div></div> <div class="row"><div class="col form-group"><label for="date-of-dismiss" class="form-label">Datum der Entlassung</label> <input type="date" class="form-control" id="date-of-dismiss" readonly=""/></div> <div class="col"><label for="currently-workless" class="form-label">Aktuell Arbeitslos</label> <div class="input-group mb-3 currently-select"><button id="currently-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswahl">Auswahl</button> <ul id="currently-select-dropdown" class="dropdown-menu"><li><button id="yes-currently" class="dropdown-item" type="button">Ja</button></li> <li><button id="no-currently" class="dropdown-item" type="button">Nein</button></li></ul> <input id="currently-workless" type="text" class="form-control" placeholder="Auswahl" aria-label="Auswahl" readonly=""/></div></div></div> <div id="only-on-currently-no" class="row" hidden=""><div class="col"><label for="new-company" class="form-label">Neuer Betrieb</label> <input id="new-company" type="text" class="form-control" placeholder="Neuer Betrieb" aria-label="Neuer Betrieb" readonly=""/></div> <div class="col"><label for="total-time" class="form-label">Insgeammte arbeitslose Zeit</label> <input id="total-time" type="text" class="form-control" placeholder="Insgeammte arbeitslose Zeit" aria-label="Insgeammte arbeitslose Zeit" readonly=""/></div></div> <button id="workless-add-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="workless-confirm-button" class="btn btn-outline-danger m-3" type="button" hidden=""><span id="workless-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="workless-abort-button" class="btn btn-outline-danger m-3" type="button" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 justify-content-center get-user" style="max-width: 160px;">Bürger abrufen</button>',be,E,Ne='<div class="card-title row"><div class="col"><label for="criminal-select" class="form-label">Beschuldigter</label> <div class="input-group mb-3 criminal-select"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="criminal-select-dropdown" class="dropdown-menu"></ul> <input id="criminal-account" type="text" class="form-control" placeholder="Beschuldigter" aria-label="Beschuldigter" readonly=""/></div></div> <div class="col"><label for="kind" class="form-label">Art</label> <input id="kind" type="text" class="form-control" placeholder="Art" aria-label="Art" readonly=""/></div></div> <div class="row"><div class="col"><label for="accuser-select" class="form-label">Anzeiger</label> <div class="input-group mb-3 accuser-select"><button id="accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="accuser-select-dropdown" class="dropdown-menu"></ul> <input id="accuser" type="text" class="form-control" placeholder="Anzeiger" aria-label="Anzeiger" readonly=""/></div></div> <div class="col"><label for="police-consultant" class="form-label">Sachberater Polizei</label> <div class="input-group mb-3 police-consultant-select"><button id="police-consultant-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="police-consultant-select-dropdown" class="dropdown-menu"></ul> <input id="police-consultant" type="text" class="form-control" placeholder="Sachberater Polizei" aria-label="Sachberater Polizei" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="lawyer-culprit" class="form-label">Anwalt des Beschuldigtens</label> <div class="input-group mb-3 lawyer-culprit-select"><button id="lawyer-culprit-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-culprit-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-culprit" type="text" class="form-control" placeholder="Anwalt des Beschuldigtens" aria-label="Anwalt des Beschuldigtens" readonly=""/></div></div> <div class="col"><label for="lawyer-accuser" class="form-label">Anwalt des Anzeigers</label> <div class="input-group mb-3 lawyer-accuser-select"><button id="lawyer-accuser-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="lawyer-accuser-select-dropdown" class="dropdown-menu"></ul> <input id="lawyer-accuser" type="text" class="form-control" placeholder="Anwalt des Anzeigers" aria-label="Anwalt des Anzeigers" readonly=""/></div></div></div> <div class="row"><div class="col"><label for="facts" class="form-label">Tatbestand</label> <input id="facts" type="text" class="form-control" placeholder="Tatbestand" aria-label="Tatbestand" readonly=""/></div></div> <div class="row"><div class="col"><label for="time-of-crime" class="form-label">Zeitpunkt der Tat</label> <input id="time-of-crime" type="text" class="form-control" placeholder="Zeitpunkt der Tat" aria-label="Zeitpunkt der Tat" readonly=""/></div> <div class="col"><label for="location-of-crime" class="form-label">Ort der Tat</label> <input id="location-of-crime" type="text" class="form-control" placeholder="Ort der Tat" aria-label="Ort der Tat" readonly=""/></div></div> <div class="row"><div class="col"><label for="note" class="form-label">Kommentar</label> <input id="note" type="text" class="form-control" placeholder="Kommentar" aria-label="Kommentar" readonly=""/></div></div> <div class="row"><div class="col"><label for="verdict" class="form-label">Urteil</label> <div class="input-group mb-3 verdict-select"><button id="verdict-select-button" class="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen">Urteil</button> <ul id="verdict-select-dropdown" class="dropdown-menu"><li><button id="no-yet" class="dropdown-item" type="button">a.) Noch kein Verfahren</button></li> <li><button id="guilty" class="dropdown-item" type="button">b.) Schuldig</button></li> <li><button id="innocent" class="dropdown-item" type="button">c.) Unschuldig</button></li></ul> <input id="verdict" type="text" class="form-control" placeholder="Urteil" aria-label="Urteil" readonly=""/></div></div></div> <button id="criminal-add-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-add-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Hinzufügen</button> <button id="criminal-confirm-button" type="button" class="btn btn-outline-danger m-3" hidden=""><span id="criminal-confirm-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>Bestätigen</button> <button id="criminal-abort-button" type="button" class="btn btn-outline-danger m-3" hidden="">Abbrechen</button> <button type="button" class="btn btn-outline-danger m-3 get-user" style="max-width: 160px;">Bürger abrufen</button>',pe,c,b,I,Ve="Einen Login hinzufügen:",ve,F,Oe='<div class="col"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-add-select-dropdown" class="dropdown-menu"></ul> <input id="login-add-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <div class="col"><label for="login-add-password" class="form-label">Passwort</label> <input id="login-add-password" type="password" class="form-control" placeholder="Passwort" aria-label="Passwort"/></div>',he,p,P,S,Ee="Rechte für Bürger",ge,g,x,Ie="None",_,Pe="ReadOnly",C,Se="Write",we,D,Z,De="Rechte für Arbeitslose",me,w,A,Ze="None",z,qe="ReadOnly",B,Re="Write",fe,q,R,We="Rechte für das Kriminalregister",ye,m,M,je="None",T,Ke="ReadOnly",L,Ue="Write",xe,k,Ge=`<span id="add-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Hinzufügen`,_e,Y,Je=`<label for="delete-login" class="form-label">Einen Login entfernen:</label> <div class="card-title row col delete-login"><label for="login-users" class="form-label">Benutzer</label> <div class="input-group mb-3 login-users"><button id="criminal-select-button" class="btn btn-outline-danger dropdown-toggle hide-arrow svelte-1y81bwy" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Auswählen"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button> <ul id="login-delete-select-dropdown" class="dropdown-menu"></ul> <input id="login-delete-user" type="text" class="form-control" placeholder="Benutzer" aria-label="Benutzer"/></div></div> <button id="delete-login-button" type="button" class="btn btn-outline-danger m-3"><span id="delete-login-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Entfernen</button>`,Ce,$,Fe=`<p style="margin: 0;">Alle Logins entfernen:</p> <button id="delete-all-logins-button" type="button" class="btn btn-outline-danger m-3 delete-all-logins"><span id="delete-all-logins-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden=""></span>
					Alle Logins löschen</button>`,Ae,W,Qe="Schließen",ze,j,Xe=`<div><label for="password-changer" class="form-label">Passwort ändern:</label> <div class="card-title row password-changer"><div class="col"><label for="new-password" class="form-label">Neues Passwort</label> <input id="new-password" type="password" class="form-control" placeholder="Neues Passwort" aria-label="Neues Passwort"/></div> <div class="col"><label for="new-password-wdh" class="form-label">Wiederholen</label> <input id="new-password-wdh" type="password" class="form-control" placeholder="Wiederholen" aria-label="Wiederholen"/></div></div> <button id="change-password-button" type="button" class="btn btn-outline-danger m-3"><span id="change-password-button-spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
					Ändern</button></div> <button class="btn btn-outline-danger m-2" type="button">Schließen</button>`,Be,Q,Ye='<div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Name</h5> <p class="card-text" id="name"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Version</h5> <p class="card-text" id="version"></p></div></div></div></div> <div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Entwickler</h5> <p class="card-text" id="devs"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Repository</h5> <p class="card-text"><a target="_blank" id="repo"></a></p></div></div></div></div> <div class="row p-3"><div class="col-sm-6 mb-3 mb-sm-0"><div class="card"><div class="card-body"><h5 class="card-title">Beschreibung</h5> <p class="card-text" id="description"></p></div></div></div> <div class="col-sm-6"><div class="card"><div class="card-body"><h5 class="card-title">Bürger insgesammt</h5> <p class="card-text" id="users"></p></div></div></div></div>';return{c(){f=l("meta"),N=n(),d=l("section"),h=l("nav"),h.innerHTML=le,y=n(),J=l("div"),J.innerHTML=Le,ce=n(),r=l("div"),V=l("div"),V.innerHTML=ke,ue=n(),O=l("div"),O.innerHTML=He,be=n(),E=l("div"),E.innerHTML=Ne,pe=n(),c=l("div"),b=l("div"),I=l("label"),I.textContent=Ve,ve=n(),F=l("div"),F.innerHTML=Oe,he=n(),p=l("div"),P=l("div"),S=l("label"),S.textContent=Ee,ge=n(),g=l("select"),x=l("option"),x.textContent=Ie,_=l("option"),_.textContent=Pe,C=l("option"),C.textContent=Se,we=n(),D=l("div"),Z=l("label"),Z.textContent=De,me=n(),w=l("select"),A=l("option"),A.textContent=Ze,z=l("option"),z.textContent=qe,B=l("option"),B.textContent=Re,fe=n(),q=l("div"),R=l("label"),R.textContent=We,ye=n(),m=l("select"),M=l("option"),M.textContent=je,T=l("option"),T.textContent=Ke,L=l("option"),L.textContent=Ue,xe=n(),k=l("button"),k.innerHTML=Ge,_e=n(),Y=l("div"),Y.innerHTML=Je,Ce=n(),$=l("div"),$.innerHTML=Fe,Ae=n(),W=l("button"),W.textContent=Qe,ze=n(),j=l("div"),j.innerHTML=Xe,Be=n(),Q=l("div"),Q.innerHTML=Ye,this.h()},l(X){const ae=at("svelte-pset25",document.head);f=a(ae,"META",{name:!0,content:!0}),ae.forEach(i),N=o(X),d=a(X,"SECTION",{class:!0});var ee=v(d);h=a(ee,"NAV",{class:!0,"data-svelte-h":!0}),s(h)!=="svelte-qlc8r4"&&(h.innerHTML=le),y=o(ee),J=a(ee,"DIV",{class:!0,"data-svelte-h":!0}),s(J)!=="svelte-1axk1q2"&&(J.innerHTML=Le),ce=o(ee),r=a(ee,"DIV",{class:!0});var u=v(r);V=a(u,"DIV",{id:!0,"data-svelte-h":!0}),s(V)!=="svelte-1gdqj6y"&&(V.innerHTML=ke),ue=o(u),O=a(u,"DIV",{id:!0,"data-svelte-h":!0}),s(O)!=="svelte-1q1683a"&&(O.innerHTML=He),be=o(u),E=a(u,"DIV",{id:!0,"data-svelte-h":!0}),s(E)!=="svelte-yubxqo"&&(E.innerHTML=Ne),pe=o(u),c=a(u,"DIV",{id:!0});var K=v(c);b=a(K,"DIV",{});var U=v(b);I=a(U,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),s(I)!=="svelte-1elzi6x"&&(I.textContent=Ve),ve=o(U),F=a(U,"DIV",{class:!0,"data-svelte-h":!0}),s(F)!=="svelte-1nek0y8"&&(F.innerHTML=Oe),he=o(U),p=a(U,"DIV",{class:!0,style:!0});var te=v(p);P=a(te,"DIV",{class:!0});var se=v(P);S=a(se,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),s(S)!=="svelte-1dy4v9n"&&(S.textContent=Ee),ge=o(se),g=a(se,"SELECT",{id:!0,class:!0,"aria-label":!0});var ne=v(g);x=a(ne,"OPTION",{"data-svelte-h":!0}),s(x)!=="svelte-qtemz2"&&(x.textContent=Ie),_=a(ne,"OPTION",{"data-svelte-h":!0}),s(_)!=="svelte-qphrza"&&(_.textContent=Pe),C=a(ne,"OPTION",{"data-svelte-h":!0}),s(C)!=="svelte-ov28pk"&&(C.textContent=Se),ne.forEach(i),se.forEach(i),we=o(te),D=a(te,"DIV",{class:!0});var oe=v(D);Z=a(oe,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),s(Z)!=="svelte-1ylgrto"&&(Z.textContent=De),me=o(oe),w=a(oe,"SELECT",{id:!0,class:!0,"aria-label":!0});var re=v(w);A=a(re,"OPTION",{"data-svelte-h":!0}),s(A)!=="svelte-qtemz2"&&(A.textContent=Ze),z=a(re,"OPTION",{"data-svelte-h":!0}),s(z)!=="svelte-qphrza"&&(z.textContent=qe),B=a(re,"OPTION",{"data-svelte-h":!0}),s(B)!=="svelte-ov28pk"&&(B.textContent=Re),re.forEach(i),oe.forEach(i),fe=o(te),q=a(te,"DIV",{class:!0});var ie=v(q);R=a(ie,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),s(R)!=="svelte-d0gpuu"&&(R.textContent=We),ye=o(ie),m=a(ie,"SELECT",{id:!0,class:!0,"aria-label":!0});var de=v(m);M=a(de,"OPTION",{"data-svelte-h":!0}),s(M)!=="svelte-qtemz2"&&(M.textContent=je),T=a(de,"OPTION",{"data-svelte-h":!0}),s(T)!=="svelte-qphrza"&&(T.textContent=Ke),L=a(de,"OPTION",{"data-svelte-h":!0}),s(L)!=="svelte-ov28pk"&&(L.textContent=Ue),de.forEach(i),ie.forEach(i),te.forEach(i),xe=o(U),k=a(U,"BUTTON",{id:!0,type:!0,class:!0,"data-svelte-h":!0}),s(k)!=="svelte-1h1u1w8"&&(k.innerHTML=Ge),U.forEach(i),_e=o(K),Y=a(K,"DIV",{"data-svelte-h":!0}),s(Y)!=="svelte-k308nx"&&(Y.innerHTML=Je),Ce=o(K),$=a(K,"DIV",{"data-svelte-h":!0}),s($)!=="svelte-2smmib"&&($.innerHTML=Fe),Ae=o(K),W=a(K,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),s(W)!=="svelte-muivp7"&&(W.textContent=Qe),K.forEach(i),ze=o(u),j=a(u,"DIV",{id:!0,"data-svelte-h":!0}),s(j)!=="svelte-19r1zvj"&&(j.innerHTML=Xe),Be=o(u),Q=a(u,"DIV",{id:!0,"data-svelte-h":!0}),s(Q)!=="svelte-1uw969w"&&(Q.innerHTML=Ye),u.forEach(i),ee.forEach(i),this.h()},h(){document.title="SNDM",t(f,"name","description"),t(f,"content","Main Page"),t(h,"class","nav navbar bg-secondary-subtle svelte-1y81bwy"),t(J,"class","sidebar bg-dark svelte-1y81bwy"),t(V,"id","user-container"),V.hidden=!0,t(O,"id","workless-container"),O.hidden=!0,t(E,"id","criminal-container"),E.hidden=!0,t(I,"for","add-login"),t(I,"class","form-label"),t(F,"class","card-title row add-login"),t(S,"for","login-add-user-permissions"),t(S,"class","form-label"),x.__value="None",H(x,x.__value),_.__value="ReadOnly",H(_,_.__value),C.__value="Write",H(C,C.__value),t(g,"id","login-add-user-permissions"),t(g,"class","form-select"),t(g,"aria-label","Permissions"),t(P,"class","col"),t(Z,"for","login-add-workless-permissions"),t(Z,"class","form-label"),A.__value="None",H(A,A.__value),z.__value="ReadOnly",H(z,z.__value),B.__value="Write",H(B,B.__value),t(w,"id","login-add-workless-permissions"),t(w,"class","form-select"),t(w,"aria-label","Permissions"),t(D,"class","col"),t(R,"for","login-add-criminal-permissions"),t(R,"class","form-label"),M.__value="None",H(M,M.__value),T.__value="ReadOnly",H(T,T.__value),L.__value="Write",H(L,L.__value),t(m,"id","login-add-criminal-permissions"),t(m,"class","form-select"),t(m,"aria-label","Permissions"),t(q,"class","col"),t(p,"class","row"),st(p,"padding-top","5px"),t(k,"id","add-login-button"),t(k,"type","button"),t(k,"class","btn btn-outline-danger m-3"),t(W,"class","btn btn-outline-danger m-2"),t(W,"type","button"),t(c,"id","login-container"),c.hidden=!0,t(j,"id","password-changer-container"),j.hidden=!0,t(Q,"id","stats-container"),t(r,"class","mid p-3 bg-body-secondary svelte-1y81bwy"),t(d,"class","main svelte-1y81bwy")},m(X,ae){e(document.head,f),$e(X,N,ae),$e(X,d,ae),e(d,h),e(d,y),e(d,J),e(d,ce),e(d,r),e(r,V),e(r,ue),e(r,O),e(r,be),e(r,E),e(r,pe),e(r,c),e(c,b),e(b,I),e(b,ve),e(b,F),e(b,he),e(b,p),e(p,P),e(P,S),e(P,ge),e(P,g),e(g,x),e(g,_),e(g,C),e(p,we),e(p,D),e(D,Z),e(D,me),e(D,w),e(w,A),e(w,z),e(w,B),e(p,fe),e(p,q),e(q,R),e(q,ye),e(q,m),e(m,M),e(m,T),e(m,L),e(b,xe),e(b,k),e(c,_e),e(c,Y),e(c,Ce),e(c,$),e(c,Ae),e(c,W),e(r,ze),e(r,j),e(r,Be),e(r,Q)},p:Me,i:Me,o:Me,d(X){X&&(i(N),i(d)),i(f)}}}function ct(G,f,N){let d,h,le;return Te(G,nt,y=>N(0,d=y)),Te(G,ot,y=>N(1,h=y)),Te(G,rt,y=>N(2,le=y)),G.$$.update=()=>{G.$$.dirty&7},[d,h,le]}class gt extends tt{constructor(f){super(),lt(this,f,ct,dt,et,{})}}export{gt as component,ht as universal};