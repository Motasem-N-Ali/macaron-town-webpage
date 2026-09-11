const flavourSections = document.querySelectorAll(".flavour-section");
const toast = document.querySelector(".toast");
const carouselImages = document.querySelectorAll(".carousel-image");

let carouselIndex = 0;
let carouselTimer;

const showNextMacaron = () => {
  carouselImages[carouselIndex].classList.remove("is-active");
  carouselIndex = (carouselIndex + 1) % carouselImages.length;
  carouselImages[carouselIndex].classList.add("is-active");
};

if (carouselImages.length > 1) {
  carouselTimer = window.setInterval(showNextMacaron, 5200);
}

let toastTimer;
flavourSections.forEach((section) => {
  section.querySelector(".flavour-button").addEventListener("click", () => {
    flavourSections.forEach((item) => item.classList.remove("is-selected"));
    section.classList.add("is-selected");
    toast.textContent = `${section.querySelector("h2").textContent} is a lovely choice.`;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  });
});

window.addEventListener("pagehide", () => {
  window.clearInterval(carouselTimer);
});
