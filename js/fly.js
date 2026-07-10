const flights = [
    {
        city: "New York",
        flag: "🇺🇸",
        image: "new-york.png",
        alt: "New York City skyline, Times Square, and famous streets in USA",
        description: "Home to iconic skyscrapers, Times Square, Central Park, famous landmarks, diverse neighborhoods, and nonstop city energy.",
        videoId: "qDdGKWJwf5w",
        start: 0
    },
    {
        city: "London",
        flag: "🇬🇧",
        image: "london.png",
        alt: "London skyline, Big Ben, Tower Bridge, and famous streets in England",
        description: "Discover iconic landmarks, historic streets, vibrant neighborhoods, beautiful parks, and the rich culture of England's capital city.",
        videoId: "b_M3YPNEsxk",
        start: 35
    },
];


const exploreAreaFly = document.querySelector(".explore-area-content");

exploreAreaFly.innerHTML = flights.map(fly => `
  <div class="explore-area__item">
    <div class="thumbnail">
      <img
        class="bg-img"
        src="./images/cities/${fly.image}"
        alt="${fly.alt}"
      />
    </div>

    <div class="text">
      <h3>${fly.flag} ${fly.city}</h3>

      <p>
        ${fly.description}
      </p>

      <a
        data-video="${fly.videoId}"
        data-start="${fly.start}"
        class="btn walk"
      >
        Begin Journey
      </a>
    </div>
  </div>
`).join("");


const container = document.querySelector(".sidebar .buttons");

container.innerHTML = flights.map(({ city, flag, videoId, start }) => `
    <button
        class="walk"
        data-video="${videoId}"
        data-start="${start}">
        ${city} ${flag}
    </button>
`).join("");