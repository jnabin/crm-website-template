gsap.registerPlugin(ScrollTrigger);
      let element1 = document.getElementsByClassName("feature-content-01")[0];
      let element2 = document.getElementsByClassName("feature-content-02")[0];
      let element3 = document.getElementsByClassName("feature-content-03")[0];
      let element4 = document.getElementsByClassName("feature-content-04")[0];
      let element5 = document.getElementsByClassName("feature-content-05")[0];
      let element6 = document.getElementsByClassName("feature-content-06")[0];
      let element7 = document.getElementsByClassName("feature-content-07")[0];

      const t5 = gsap.timeline({
      scrollTrigger: {
         trigger: element1,
         scrub: 1,
         pin: true,
         start: "center top",
         end: "bottom top",
      }
      })
      .to(".light-red-bg", { opacity: 0});
      const t6 = gsap.timeline({
      scrollTrigger: {
         trigger: element2,
         scrub: 1,
         start: "center top",
         end: "bottom top",
      }
      })
      .to(".light-purple-bg", { opacity: 0});
      const t7 = gsap.timeline({
      scrollTrigger: {
         trigger: element3,
         scrub: 1,
         start: "center top",
         end: "bottom top",
      }
      })
      .to(".light-green-2-bg", { opacity: 0});
      const t8 = gsap.timeline({
      scrollTrigger: {
         trigger: element4,
         scrub: 1,
         start: "center top",
         end: "bottom top",
      }
      })
      .to(".light-green-bg-3", { opacity: 0});
      const t9 = gsap.timeline({
      scrollTrigger: {
         trigger: element5,
         scrub: 1,
         start: "center top",
         end: "bottom top",
      }
      })
      .to(".light-red-bg-2", { opacity: 0});
      const t10 = gsap.timeline({
      scrollTrigger: {
         trigger: element6,
         scrub: 1,
         start: "center top",
         end: "bottom top",
      }
      })
      .to(".light-green-bg-22", { opacity: 0});
      const t11 = gsap.timeline({
      scrollTrigger: {
         trigger: element7,
         scrub: 1,
         start: "center top",
         end: "bottom top",
      }
      })
      .to(".light-green-bg-4", { opacity: 0});

      const buttonRight = document.getElementById('slideRight');
      const buttonLeft = document.getElementById('slideLeft');

      buttonRight.onclick = function () {
      document.getElementById('carosolItems').scrollLeft += 540;
      };
      buttonLeft.onclick = function () {
      document.getElementById('carosolItems').scrollLeft -= 540;
      };