var currentLng = 'en';
$(document).ready(function() {
    let userLang = navigator.language || navigator.userLanguage;
    if(userLang.includes('fr')) {
        currentLng = 'fr';
        processImageSrc();
    } else if(userLang.includes('en')) {
        currentLng = 'en';
    }
});
function load(){
    let translate = new Translate();
    let attributeName = 'data-tag';
    translate.init(attributeName, currentLng);
    translate.process(); 
}

function processImageSrc(){
    document.getElementById("subscription-input-box").placeholder = "Entrer votre courriel";
    document.getElementById("elected-office-dashboard-illustrations1").src="../../resources/images/elected-office-desktop-dashboard-fr.png";
    document.getElementById("elected-office-mobile-illustrations2").src="../../resources/images/elected-office-mobile-dashboard-fr.png";
    document.getElementById("handle-organise-image").src="../../resources/images/handle-organise-fr.png";
    document.getElementById("upload-outlook-dash").src="../../resources/images/upload-outlook-fr.png";
    document.getElementById("see-every-action-history-dash").src="../../resources/images/see-every-action-history-fr.png";
    document.getElementById("allow-collaborate-dash").src="../../resources/images/allow-collaborate-fr.png";
}

ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 1600,
    delay: 400
});
ScrollReveal().reveal('.elected-office-dashboard-illustrations img:first-child', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.elected-office-dashboard-illustrations img:last-child', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.get-in-touch-left', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.handle-organise-left', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.get-in-touch-right', {delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.handle-organise-right', {delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.e-o-management-features', {delay: 400, origin: 'bottom'});