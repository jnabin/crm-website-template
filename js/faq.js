let faqs = document.getElementsByClassName('faq-expandable-item');
let faqHeaders = document.getElementsByClassName('faq-expandable-item-header');

for(let i=0; i< faqs.length; i++){
    console.log("dh");
    faqHeaders[i].addEventListener("click",() => {
        faqs[i].classList.toggle('expanded');
    })
}