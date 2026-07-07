const cities = [...document.querySelectorAll(".explore-area__item")].map(
  (item) => ({
    city: item
      .querySelector("h3")
      .textContent.replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim(),
    video: item.querySelector(".walk").dataset.video,
    start: item.querySelector(".walk").dataset.start,
  })
);


console.log(cities);


