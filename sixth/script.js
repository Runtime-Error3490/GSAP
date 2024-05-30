function breakText(){

var text=document.querySelector("h1").textContent

var splittedText=text.split("")

var clutter=""

splittedText.forEach((text,idx)=>{
    if(idx%2==0)
    clutter+=`<span class="a">${text}</span>`//template literal
    else
    clutter+=`<span class="b">${text}</span>`
})

document.querySelector("h1").innerHTML=clutter
}
breakText()
// transfrom and translate don't work on the inline element and span is inline
gsap.from(".a",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15,
})
gsap.from(".b",{
    y:50,
    opacity:0,
    duration:1,
    delay:0.8,
    stagger:-0.5,
})