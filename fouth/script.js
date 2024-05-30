const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");
main.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
    duration: 0.1,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 2,
    duration: 0.3,
    ease: "bounce",
    backgroundColor: "#ffffff5c",
  });
});
image.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    ease: "bounce",
    backgroundColor: "#ffffff",
  });
});
