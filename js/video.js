// const cityBoxes = document.querySelectorAll(".city-box");
const cityBoxes = document.querySelectorAll(".walk");
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("youtubeFrame");
const closeBtn = document.getElementById("closeBtn");
const backBtn = document.getElementById("backBtn");
const openMenu = document.getElementById("openMenu");
const sidebar = document.querySelector(".video-overlay .sidebar");
const closeMenu = document.getElementById("closeBar");

cityBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log('citybox clicked...')
    const videoId = box.dataset.video;
    const videoStart = box.dataset.start
    iframe.src = `https://www.youtube.com/embed/${videoId}?cc_load_policy=0&cc_lang_pref=en&autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1&start=${videoStart}`;
    // iframe.src = `${videoId}`
    modal.style.display = "block";
    // sidebar.style.display = "none";
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
  sidebar.style.display = "none";
});


// hide buttons 
const buttons = [
  document.getElementById("openMenu"),
  document.getElementById("fullscreenBtn"),
  document.getElementById("backBtn")
];

let hideTimer;

document.addEventListener("mousemove", () => {
  buttons.forEach(btn => btn.style.display = "flex");
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
      buttons.forEach(btn => btn.style.display = "none");
  }, 3000);
});


const viewer = document.getElementById("videoModal");
const btn = document.getElementById("fullscreenBtn");


let isFullscreen = false;

btn.addEventListener("click", toggleFullscreen);
backBtn.addEventListener("click", () => {
  closeFullscreen();
})
function toggleFullscreen() {
    if (!isFullscreen) {
        openFullscreen();
    } else {
        closeFullscreen();
    }
}

function openFullscreen() {
    if (viewer.requestFullscreen) {
        viewer.requestFullscreen();
    }

    history.pushState({ fullscreen: true }, "");
    isFullscreen = true;
}

function closeFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }

    isFullscreen = false;
}

window.addEventListener("fullscreenchange", () => {
    isFullscreen = !!document.fullscreenElement;
});

window.addEventListener("popstate", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});


