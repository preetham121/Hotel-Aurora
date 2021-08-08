const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-link");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    line2.classList.toggle("cross-mark2");
    line1.classList.toggle("cross-mark1");
    line3.classList.toggle("cross-mark3");
  });
};

navSlide();
