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
    document.getElementById("message-textbox").placeholder="Écrire votre message ici";
    document.getElementById("subscription-input-box").placeholder = "Entrer votre courriel";
}