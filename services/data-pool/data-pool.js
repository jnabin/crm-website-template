gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".data-pool-hero-section",
        scrub: 1,
        start: "0%",
        end: "15%",
        duration: 1

    }
    })
    .to(".first-01", { scale: 0.7});

    const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".data-pool-hero-section",
        scrub: 1,
        start: "0%",
        end: "15%",
        duration: 1

    }
    })
    .to(".second-02", {y: '-154%'});

    const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".data-pool-hero-section",
        scrub: 1,
        start: "15%",
        duration: 1,
        delay: 1,
        end: "30%"

    }
    })
    .to(".second-02", { scale: 0.8});

    const t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".data-pool-hero-section",
        scrub: 1,
        start: "30%",
        end: "45%"

    }
    })
    .to(".third-03", { y: '-244%'});

    const t5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".data-pool-hero-section",
        scrub: 1,
        start: "45%",
        ens: "60%"

    }
    })
    .to(".third-03", { scale: 0.9});

    const t6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".data-pool-hero-section",
        scrub: 1,
        start: "60%",
        end: "75%"
    }
    })
    .to(".fourth-03", { y: '-335%'});