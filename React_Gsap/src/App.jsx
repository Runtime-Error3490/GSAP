import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function App() {
  const gsapRef = useRef();

  // useGSAP(() => {
  //   gsap.to(box,{})
  // },{scope:".container"});
  //conatiner kae undar wala box hi chalega

  // agar ref sae karna hai to conainter ka ref banao aur fir usko scope:containerref  daalo and remember current use mat karna

  //const random=gsap.utils.random(-100,100,10);
  //console.log(random());
  //useGap(()=>{
  //  gsap.to(box,{
  //    x:random(),
  //    y:random(),
  //    duration:1,
  //    stagger:1,
  //    repeat:-1,
  //    rotate:720,
  //    ease:"power1.inOut"
  //  })
    // },[random]);
    //scope:'main',dependencies:[random]




  // useGSAP(() => {
  //   gsap.to(gsapRef.current, {
  //     x: 100,
  //     duration: 1,
  //     delay: 1,
  //     stagger: true,
  //     repeat: -1,
  //     rotate: 720,
  //     ease: "power1.inOut",
  //   });
  // });
  const {contextSafe}=useGSAP()
  const rotateBox=contextSafe(()=>{
    gsap.to(gsapRef.current,{
      rotate:360,
      duration:0.7,
    })
  })
  return (
    <main>
   <button onClick={rotateBox}>
    Animation
   </button>
   <div ref={gsapRef} className="box"></div>
    </main>
  );
}

export default App;
