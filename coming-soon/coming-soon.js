let popupElement = document.getElementById('moreInfoPopup');
let mainbodyElement = document.getElementById('mainBody');

document.getElementById('submitInquiry').addEventListener('click', () => {
    popupElement.classList.add('active');
    mainbodyElement.classList.add('dialogue-active');
});

document.getElementById('closeDialogue').addEventListener('click', hidePopup);

document.getElementById('submitMoreInfo').addEventListener('click', hidePopup);

function hidePopup(){
    popupElement.classList.remove('active');
    mainbodyElement.classList.remove('dialogue-active');
}