// gsap.from("#page1 .box",{
//     scale:0,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     ease: "bounce"
// })
// gsap.to("#page2 .box",{
//     scale:0,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     ease: "bounce",
//     scrollTrigger:{
//         trigger:"#page2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 20%",
//         scrub:3,
//         pin:true,
//     }
// })
// gsap.from("#page3",{
//     scale:0,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     ease: "bounce"
// })
// //scroll delay

gsap.to("#page1 h1", {
  transform: "translateX(-100%)",
  duration: 3,
  delay: 1,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    markers: true,
    scrub: 3,
    start: "top -1%",
    end: "bottom 20%",
    pin: true,
  },
});
