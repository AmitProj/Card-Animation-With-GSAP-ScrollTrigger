gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let timeln = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top 50px ",
        end: "+=2000",
        scrub: 1,
        duration:2,
        speed:200,
        markers:true
    }
});

timeln.addLabel('card1');
timeln.to('.card-1', {
    yPercent: 0,
    opacity:1
});

timeln.addLabel("card2");
timeln.to(".card-1", {
    yPercent: 0,
    opacity:1
}, "+=0.5");
timeln.from('.card-2', {
    yPercent: 98,
    opacity: 0
});


timeln.addLabel('card3');
timeln.to(".card-2", {
    yPercent: 0,
    opacity:1
}, "+=0.5");
timeln.from(".card-3", {
    yPercent: 98,
    opacity: 0
});

timeln.addLabel('card4');
timeln.to(".card-3", {
    yPercent: 0,
    opacity:1
}, "+=0.5");
timeln.from(".card-4", {
    yPercent: 98,
    opacity: 0
});

timeln.addLabel('card5');
timeln.to(".card-4", {
    yPercent: 0,
    opacity:1
}, "+=0.5");
timeln.from(".card-5", {
    yPercent: 98,
    opacity: 0
});

timeln.addLabel('card6');
timeln.to(".card-5", {
    yPercent: 0,
    opacity:1
}, "+=0.5");
timeln.from(".card-6", {
    yPercent: 98,
    opacity: 0
});

timeln.addLabel('card1');
timeln.to(".card-6", {
    yPercent: 0,
    opacity:1
}, "+=0.5");
// timeln.from(".card-1", {
//     yPercent: 0,
// opacity:1
//     opacity: 1
// });