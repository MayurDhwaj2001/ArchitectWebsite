let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const threshold = 30; // Adjust threshold value if needed

  if (scrollTop > lastScrollTop && scrollTop > threshold) {
    // Scrolling down and past the threshold
    navbar.style.top = "-100px"; // Adjust to your navbar height
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }

  // For changing background color after 100px scroll
  if (window.scrollY > 100) {
    // Change color after scrolling 100px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});
