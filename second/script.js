gsap.from("#page1 .box",{
    scale:0,
    duration: 2,
    delay:1,
    rotate:360,
    ease: "bounce"
})
gsap.to("#page2 .box",{
    scale:0,
    duration: 2,
    delay:1,
    rotate:360,
    ease: "bounce",
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        markers:true,
        start:"top 20%",
        scrub:5,
    }
})
gsap.from("#page3",{
    scale:0,
    duration: 2,
    delay:1,
    rotate:360,
    ease: "bounce"
})
//scroll delay

