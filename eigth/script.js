function page1animation(){
    var tl=gsap.timeline()
tl.from("nav h1",{
    y:-30,
    opacity:0,
    duration:0.6,
    delay:0.2,
    ease:"power2.out"
})
tl.from("nav h4,nav button",{
    y:30,
    opacity:0,
    duration:0.4,
    ease:"power2.out",
    stagger:0.2
})
tl.from(".center-part1 h1",{
    x:-100,
    opacity:0,
    duration:0.2,
    ease:"power2.out"
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.2,
    ease:"power2.out"
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.2,   
    ease:"power4.out"
})
tl.from(".center-part2 img",{
    x:100,
    opacity:0,
    duration:0.2,
    ease:"power2.out"
},"-=0.75")

gsap.to(".section1bottom", {
    transform: "translateX(-300%)",
    duration: 3,
    delay: 1,
    scrollTrigger: {
      trigger: ".section1bottom",
      scroller: "body",
      scrub: 3,
      start: "top -50%",
      end: "bottom 20%",
      pin: true,
    },
  });

}
page1animation()

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 30%",
        end:"top 0%",
        scrub:2,
        markers:true,
    }
})
tl2.from(".services",{
    x:-100,
    opacity:0,
    duration:0.8,
    ease:"power4.out",
})
tl2.from(".elem-part1 ",{
    x:-100,
    opacity:0,
    duration:0.8,
    delay:0.2,
    ease:"power4.out",
    stagger:0.2
})
tl2.from(".elem-part2 img",{
    x:100,
    opacity:0,
    duration:0.8,
    delay:0.2,
    ease:"power4.out",
    stagger:0.2
},"-=0.75")