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

// function updateTabIndicator() {
//     let activeTabHeader = document.querySelector(".tab-header > div.active");
//     let activeTabBody = document.querySelector(".tab-body > div.active");

//     let leftHeaderPosition = activeTabHeader.getBoundingClientRect().left;
//     let leftBodyPosition = activeTabBody.getBoundingClientRect().left;
//     let actualHeaderLeftPosition = leftHeaderPosition - leftBodyPosition;
//     tabIndicator.style.left = `${actualHeaderLeftPosition}px`;
//     tabIndicator.style.width = `${activeTabHeader.offsetWidth}px`;
// }

// window.onresize = updateTabIndicator;
showBrandListLoop();

function showBrandListLoop() {
    let $elem=$('#brandListScroll');
    let newScrollLeft = $elem.scrollLeft(),
        width=$elem.width(),
        scrollWidth=$elem.get(0).scrollWidth;

    if (newScrollLeft+width==scrollWidth || (scrollWidth - (newScrollLeft+width) < 1)) {
        document.getElementById('brandListScroll').scrollLeft = 0;
    } else {
        document.getElementById('brandListScroll').scrollLeft += 50;
    }
    setTimeout(() => {
        showBrandListLoop();
    }, 1000);
}

let coll = document.getElementsByClassName("expansion-controll");
let k;

for (k = 0; k < coll.length; k++) {
  coll[k].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    content.classList.toggle("extended");
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 20+ "px";
    }
  });
}

let expandMenu = document.getElementById("expandMenu");
expandMenu.addEventListener("click", () => {
    let expandNav = document.getElementById("tabletNavDropdownItemsWrapper");
    expandNav.classList.toggle("expanded-menu");
});

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      console.log(windowHeight, "windowheight");
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 1055;

      if (elementTop <= -50 && elementTop >= -1050) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  let isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on page load
  reveal();