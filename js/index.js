let tabs = document.querySelector(".feature-tabs");
let tabHeader = document.querySelector(".tab-header");
let tabBody = document.querySelector(".tab-body");
let tabIndicator = document.querySelector(".tab-indicator");
let tabHeaderNodes = document.querySelectorAll(".tab-header > div");
let tabBodyNodes = document.querySelectorAll(".tab-body > div");

for(let i=0; i< tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click", () => {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyNodes[i].classList.add("active");
        tabIndicator.style.left = `calc(calc(calc(14.29%) * ${i}) + 0px)`;
    });
}