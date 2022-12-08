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
        let leftHeaderPosition = tabHeaderNodes[i].getBoundingClientRect().left;
        let leftBodyPosition = tabBodyNodes[i].getBoundingClientRect().left;
        let actualHeaderLeftPosition = leftHeaderPosition - leftBodyPosition;
        tabIndicator.style.left = `${actualHeaderLeftPosition}px`;
        tabIndicator.style.width = `${tabHeaderNodes[i].offsetWidth}px`;
    });
}

function updateTabIndicator() {
    let activeTabHeader = document.querySelector(".tab-header > div.active");
    let activeTabBody = document.querySelector(".tab-body > div.active");

    let leftHeaderPosition = activeTabHeader.getBoundingClientRect().left;
    let leftBodyPosition = activeTabBody.getBoundingClientRect().left;
    let actualHeaderLeftPosition = leftHeaderPosition - leftBodyPosition;
    tabIndicator.style.left = `${actualHeaderLeftPosition}px`;
    tabIndicator.style.width = `${activeTabHeader.offsetWidth}px`;
}

window.onresize = updateTabIndicator;