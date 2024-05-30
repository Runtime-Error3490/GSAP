var tl = gsap.timeline();//gsap.timeline({paused:true}) for paused timeline  animation
tl.to("#full", {
  right: "0%",
  duration: 1,
  delay: 0.5,
  ease: "power4.out",
});
tl.from("#full h4", {
  x: 150,
  duration: 1,
  ease: "expo.out",
  opacity: 0,
  stagger: 0.3,
});
tl.from("#full i",{
    opacity:0,
    duration:0.2,
    ease:"expo.inOut",
})
tl.pause()


var full=document.querySelector("#nav i")
var cross=document.querySelector("#full i")
full.addEventListener("click",()=>{
    tl.play()
})
cross.addEventListener("click",()=>{
    tl.reverse()
})