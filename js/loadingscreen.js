function runAnimation() {
  let path = document.querySelector("#animated-svg path");
  let length = path.getTotalLength();

  // Reset stroke properties
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  // Animate stroke from left to right
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 3, // Slow animation
    ease: "power2.out",
    onComplete: () => {
      // 🚀 Instantly start fade-out when animation ends
      gsap.to("#loading-screen", {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
          document.getElementById("loading-screen").style.display = "none"; // Hide immediately
        },
      });
    },
  });
}

window.addEventListener("load", runAnimation);
