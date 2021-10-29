import {Validation} from './module.js';

const v = new Validation();

function aadhars(err_id=''){
    let errId;
    let eventId = document.getElementById(window.event.target.id);    
    err_id ? errId=document.getElementById(err_id) : errId='';

    if(eventId.value.length>14){
        eventId.value = eventId.value.substring(0, 14);
    }else if(eventId.value.length==4 || eventId.value.length==9){
        eventId.value = eventId.value+" ";
    }

    let response = v.aadharSpaceSeparator(eventId.value);

    if(response){
        eventId.style.color='#0f0';
        errId.innerHTML = "✔";
        errId.style.color='#0f0';
    }else{
        eventId.style.color='#f00';
        errId.innerHTML = "✘";
        errId.style.color='#f00';
    }

    return response;
}

function emails(err_id=''){
    let errId;
    let eventId = document.getElementById(window.event.target.id);    
    err_id ? errId=document.getElementById(err_id) : errId='';

    let response = v.email(eventId.value);

    if(response){
        eventId.style.color='#0f0';
        errId.innerHTML = "✔";
        errId.style.color='#0f0';
    }else{
        eventId.style.color='#f00';
        errId.innerHTML = "✘";
        errId.style.color='#f00';
    }

    return response;
}
function names(err_id=''){
    let errId;
    let eventId = document.getElementById(window.event.target.id);    
    err_id ? errId=document.getElementById(err_id) : errId='';

    let response = v.name(eventId.value);

    if(response){
        eventId.style.color='#0f0';
        errId.innerHTML = "✔";
        errId.style.color='#0f0';
    }else{
        eventId.style.color='#f00';
        errId.innerHTML = "✘";
        errId.style.color='#f00';
    }

    return response;
}

function currency(err_id=''){
    let errId;
    let eventId = document.getElementById(window.event.target.id);    
    err_id ? errId=document.getElementById(err_id) : errId='';

    let response = v.currency(eventId.value);

    if(response){
        eventId.style.color='#0f0';
        errId.innerHTML = "✔";
        errId.style.color='#0f0';
    }else{
        eventId.style.color='#f00';
        errId.innerHTML = "✘";
        errId.style.color='#f00';
    }

    return response;
}

function mobiles(err_id=''){
    let errId;
    let eventId = document.getElementById(window.event.target.id);    
    err_id ? errId=document.getElementById(err_id) : errId='';

    if(eventId.value.length>10){
        eventId.value = eventId.value.substring(0, 10);
    }
    
    let response = v.mobile(eventId.value);

    if(response){
        eventId.style.color='#0f0';
        errId.innerHTML = "✔";
        errId.style.color='#0f0';
    }else{
        eventId.style.color='#f00';
        errId.innerHTML = "✘";
        errId.style.color='#f00';
    }

    return response;
}

window.names = names;
window.mobiles = mobiles;
window.emails = emails;
window.aadhars = aadhars;
window.currency = currency;