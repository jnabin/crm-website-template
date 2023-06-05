gsap.registerPlugin(ScrollTrigger);
      let element1 = document.getElementsByClassName("feature-content-01")[0];
      let element2 = document.getElementsByClassName("feature-content-02")[0];
      let element3 = document.getElementsByClassName("feature-content-03")[0];

      const t5 = gsap.timeline({
      scrollTrigger: {
         trigger: element1,
         scrub: 1,
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