const flavourSections = document.querySelectorAll(".flavour-section");
const toast = document.querySelector(".toast");

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
