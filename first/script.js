// gsap.to("#box1", {
//   x: 200,
//   duration: 2,
//   delay:1,
//   rotate:360,
//   ease: "bounce",
// });
// gsap.to("#box2", {
//     x: 200,
//     duration: 2,
//     delay:1,
//     backgroundColor:"red",
//     borderRadius:"15%",
//     ease: "ease-in-out",
//     });
//to initial to final
//from final to initial
// gsap.from("h1",{
//     color:"red",
//     duration:2,
//     Delay:1,
//     ease:"bounce",
//     stagger:1,
//     repeat:-1,
//     yoyo:true,
// })


var tl=gsap.timeline()

tl.to("#box1",{
    x:200,
    duration:2,
    delay:1,
    rotate:360,
    ease:"bounce",
})
tl.to("#box2",{
    x:200,
    duration:2,
    delay:1,
    backgroundColor:"red",
    borderRadius:"15%",
    ease:"ease-in-out",
})
tl.to("#box3",{
    x:200,
    duration:2,
    delay:1,
    backgroundColor:"green",
    borderRadius:"15%",
    ease:"ease-in-out",
})
    