var initialPath="M 10 250 Q 250 250 500 250"

var finalPath="M 10 250 Q 250 250 500 250"

var string=document.querySelector("#string")
// string.addEventListener("mouseenter",(dets)=>{
//     console.log(dets)
// })
// string.addEventListener("mouseleave",(dets)=>{
//     console.log(dets)
// })
string.addEventListener("mousemove",(dets)=>{
    initialPath=`M 10 250 Q 250 ${dets.y} 500 250`
    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:0.5,
        ease:"bounce"
    })
})
string.addEventListener("mouseleave",(dets)=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.5,
        ease:"bounce"
    })
})
//gsap give you the power to changes the value of the attribute