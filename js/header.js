let openAside = document.querySelector(".header-mobile .open");
let closeAside = document.querySelector(".aside .close");
let aside = document.querySelector(".aside");

openAside.addEventListener("click", () => {
  // aside.style.display = "block";
  aside.style.transform = 'translateX(0%)'
});

closeAside.addEventListener("click", () => {
  aside.style.transform = 'translateX(100%)'
});

function checkScreenSize() {
  if (window.innerWidth < 576) {
    aside.style.transform = 'translateX(100%)'
  }
}

checkScreenSize(); // Run on page load
window.addEventListener("resize", checkScreenSize);
