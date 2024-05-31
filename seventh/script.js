// var tl=gsap.timeline()



window.addEventListener('wheel',(event)=>{
    var scrollValue=event.deltaY
    if(scrollValue>0){
        gsap.to(".marque",{
            x:"-200%",
            duration:4,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".marque img",{
            rotate:180
        })
    }
    else{
        gsap.to(".marque",{
            x:"0%",
            duration:4,
            repeat:-1,
            ease:"none",
        })
        gsap.to(".marque img",{
            rotate:0
        })
    }
})