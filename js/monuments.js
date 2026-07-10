const monuments = [
    {
      city: "Great Wall of China",
      flag: "🇨🇳",
      image: "great-wall-of-china.png",
      alt: "Great Wall of China virtual tour",
      description: "Walk along one of the world's greatest wonders, featuring breathtaking mountain views, ancient fortifications, and rich history.",
      videoId: "FYttymVfPX0",
      start: 200
    },
    {
      city: "Taj Mahal",
      flag: "🇮🇳",
      image: "taj-mahal.png",
      alt: "Taj Mahal virtual tour",
      description: "Admire breathtaking marble architecture, beautiful gardens, historical significance, intricate craftsmanship, and timeless beauty.",
      videoId: "DtoEdB5Ju7o",
      start: 40
    },
    {
      city: "Great Pyramid",
      flag: "🇪🇬",
      image: "egypt.png",
      alt: "Great Pyramid of Giza virtual tour",
      description: "Explore the last surviving ancient wonder, featuring monumental stone architecture, desert landscapes, and fascinating Egyptian history.",
      videoId: "Gq74hD12_P0",
      start: 515
    },
    {
      city: "Petra",
      flag: "🇯🇴",
      image: "petra.png",
      alt: "Petra Jordan virtual tour",
      description: "Discover the ancient rose-red city, featuring magnificent rock-cut architecture, narrow canyons, and remarkable archaeological treasures.",
      videoId: "J4NMLfsd5tU",
      start: 450
    },
    {
      city: "Colosseum",
      flag: "🇮🇹",
      image: "rome.png",
      alt: "Colosseum Rome virtual tour",
      description: "Explore Rome's iconic ancient amphitheater, renowned for gladiator battles, remarkable engineering, historic significance, and architectural grandeur.",
      videoId: "eJeF7hDB0UA",
      start: 132
    },
    {
      city: "Christ the Redeemer",
      flag: "🇧🇷",
      image: "christ-the-redeemer.png",
      alt: "Christ the Redeemer Rio de Janeiro virtual tour",
      description: "Visit Brazil's iconic hilltop statue, offering panoramic views of Rio, beautiful landscapes, and world-famous landmarks.",
      videoId: "bmDS1pN0wo4",
      start: 380
    },
    {
      city: "Chichén Itzá",
      flag: "🇲🇽",
      image: "chichen-itza.png",
      alt: "Chichen Itza Mexico virtual tour",
      description: "Discover the legendary Mayan city, featuring the iconic El Castillo pyramid, ancient temples, and remarkable archaeological wonders.",
      videoId: "DqqQzs5W6Co",
      start: 23
    },
    {
      city: "Machu Picchu",
      flag: "🇵🇪",
      image: "machu-picchu.png",
      alt: "Machu Picchu Peru virtual tour",
      description: "Explore the breathtaking Inca citadel, perched high in the Andes, surrounded by stunning mountains and ancient mysteries.",
      videoId: "Imzu3vTMOUo",
      start: 138
    },
    {
      city: "The Louvre",
      flag: "🇫🇷",
      image: "the-louvre.png",
      alt: "The Louvre museum virtual tour",
      description: "Explore world-famous art collections, magnificent galleries, historic architecture, cultural treasures, and timeless masterpieces.",
      videoId: "y-1144Qq-Qc",
      start: 160
    },
    {
      city: "Red Fort",
      flag: "🇮🇳",
      image: "new-delhi.png",
      alt: "Red Fort New Delhi virtual tour",
      description: "Experience historic monuments, government landmarks, vibrant markets, cultural diversity, wide avenues, and modern development.",
      videoId: "IiW8181-Dbo",
      start: 28
    },
    {
      city: "Golconda Fort",
      flag: "🇮🇳",
      image: "golconda-fort.png",
      alt: "Golconda Fort virtual tour",
      description: "Walk through historic fortifications, royal palaces, scenic viewpoints, fascinating history, and impressive stone architecture.",
      videoId: "Ok7p1aAKux8",
      start: 94
    }
];

const exploreMonument = document.querySelector(".explore-area-content");

exploreMonument.innerHTML = monuments.map(monument => `
  <div class="explore-area__item">
    <div class="thumbnail">
      <img
        class="bg-img"
        src="./images/cities/${monument.image}"
        alt="${monument.alt}"
      />
    </div>

    <div class="text">
      <h3>${monument.flag} ${monument.city}</h3>

      <p>
        ${monument.description}
      </p>

      <a
        data-video="${monument.videoId}"
        data-start="${monument.start}"
        class="btn walk"
      >
        Begin Journey
      </a>
    </div>
  </div>
`).join("");

const container = document.querySelector(".sidebar .buttons");

container.innerHTML = monuments.map(({ city, flag, videoId, start }) => `
    <button
        class="walk"
        data-video="${videoId}"
        data-start="${start}">
        ${city} ${flag}
    </button>
`).join("");