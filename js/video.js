const cityBoxes = document.querySelectorAll(".city-box");
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubeFrame");
const closeBtn = document.getElementById("closeBtn");
const backBtn = document.getElementById("backBtn");
const openMenu = document.getElementById("openMenu");
const sidebar = document.querySelector(".video-overlay .sidebar");
const closeMenu = document.getElementById("closeBar");

cityBoxes.forEach((box) => {
  box.addEventListener("click", () => {
      const videoId = box.dataset.video;
      const videoStart = box.dataset.start
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1&start=${videoStart}`;
      
    // iframe.src = `${videoId}`
    modal.style.display = "block";
  });
});

openMenu.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  sidebar.style.display = "none";
});

backBtn.addEventListener("click", () => {
  iframe.src = ""; // stop video
  modal.style.display = "none";
});
