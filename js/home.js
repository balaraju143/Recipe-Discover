
/* =========================================
   STACKLY HOME HERO ANIMATIONS
========================================= */

// INITIALIZE AOS

AOS.init({
    duration: 1000,
    easing: "ease-out-cubic",
    once: true,
    offset: 80
});


// GSAP HERO ANIMATION

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});


// EYEBROW REVEAL

heroTimeline.from(".hero-eyebrow", {
    y: 30,
    opacity: 0,
    duration: 0.8
});


// HEADING REVEAL

heroTimeline.from(".hero-title", {
    y: 70,
    opacity: 0,
    duration: 1.1
}, "-=0.4");


// DESCRIPTION REVEAL

heroTimeline.from(".hero-description", {
    y: 35,
    opacity: 0,
    duration: 0.9
}, "-=0.5");


// BUTTON REVEAL

heroTimeline.from(".hero-buttons", {
    y: 25,
    opacity: 0,
    duration: 0.8
}, "-=0.4");


// STATISTICS REVEAL

heroTimeline.from(".stat-item", {
    y: 30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
}, "-=0.3");


// BOTTOM LABEL REVEAL

heroTimeline.from(".hero-bottom-label", {
    opacity: 0,
    y: 20,
    duration: 0.7
}, "-=0.3");


// RIGHT IMAGE REVEAL

heroTimeline.from(".hero-main-image", {
    x: 120,
    scale: 0.85,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
}, "-=1.2");


// FLOATING LABELS REVEAL

heroTimeline.from(".floating-label", {
    scale: 0.7,
    opacity: 0,
    duration: 0.8,
    stagger: 0.25
}, "-=0.6");


// DECORATIVE ELEMENTS

heroTimeline.from(".hero-decoration", {
    scale: 0,
    rotation: 90,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15
}, "-=0.5");


// FLOATING FOOD IMAGE ANIMATION

gsap.to(".hero-main-image", {
    y: -12,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// FLOATING LABEL ANIMATION

gsap.to(".label-one", {
    y: -9,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".label-two", {
    y: 9,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// DECORATIVE ANIMATION

gsap.to(".decoration-one", {
    rotation: 25,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".decoration-three", {
    rotation: -25,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});
