let openAside = document.querySelector(".header-mobile .open");
let closeAside = document.querySelector(".aside .close");
let aside = document.querySelector(".aside");

openAside.addEventListener("click", () => {
  aside.style.display = "block";
});

closeAside.addEventListener("click", () => {
  aside.style.display = "none";
});

function checkScreenSize() {
  if (window.innerWidth < 576) {
    aside.style.display = "none";
  }
}

checkScreenSize(); // Run on page load
window.addEventListener("resize", checkScreenSize);
