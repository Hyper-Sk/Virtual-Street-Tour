const monuments = [
  {
    city: "Great Wall of China",
    flag: "🇨🇳",
    country: "China",
    credit: "",
    image: "great-wall-of-china.png",
    alt: "Great Wall of China virtual tour",
    description: "Ancient fortifications, mountain landscapes, UNESCO heritage, historic watchtowers, breathtaking scenery, cultural landmark.",
    videoId: "FYttymVfPX0",
    start: 200
  },
  {
    city: "Taj Mahal",
    flag: "🇮🇳",
    country: "India",
    credit: "",
    image: "taj-mahal.png",
    alt: "Taj Mahal virtual tour",
    description: "White marble mausoleum, Mughal architecture, UNESCO heritage, beautiful gardens, iconic landmark, timeless beauty.",
    videoId: "xGqz3r8IM4I",
    start: 100
  },
  {
    city: "Great Pyramid",
    flag: "🇪🇬",
    country: "Egypt",
    credit: "",
    image: "egypt.png",
    alt: "Great Pyramid of Giza virtual tour",
    description: "Ancient pyramid, Egyptian history, UNESCO heritage, desert landscape, archaeological wonder, iconic monument.",
    videoId: "Gq74hD12_P0",
    start: 515
  },
  {
    city: "Petra",
    flag: "🇯🇴",
    country: "Jordan",
    credit: "",
    image: "petra.png",
    alt: "Petra Jordan virtual tour",
    description: "Rock-cut architecture, ancient city, UNESCO heritage, sandstone cliffs, archaeological treasure, historic landmark.",
    videoId: "J4NMLfsd5tU",
    start: 450
  },
  {
    city: "Colosseum",
    flag: "🇮🇹",
    country: "Italy",
    credit: "",
    image: "rome.png",
    alt: "Colosseum Rome virtual tour",
    description: "Ancient amphitheater, Roman architecture, gladiator arena, UNESCO heritage, historic monument, cultural icon.",
    videoId: "eJeF7hDB0UA",
    start: 132
  },
  {
    city: "Christ the Redeemer",
    flag: "🇧🇷",
    country: "Brazil",
    credit: "",
    image: "christ-the-redeemer.png",
    alt: "Christ the Redeemer Rio de Janeiro virtual tour",
    description: "Hilltop statue, panoramic views, Rio skyline, iconic monument, UNESCO heritage, cultural landmark.",
    videoId: "bmDS1pN0wo4",
    start: 380
  },
  {
    city: "Chichén Itzá",
    flag: "🇲🇽",
    country: "Mexico",
    credit: "",
    image: "chichen-itza.png",
    alt: "Chichen Itza Mexico virtual tour",
    description: "Mayan pyramid, El Castillo, UNESCO heritage, ancient temples, archaeological site, historic civilization.",
    videoId: "DqqQzs5W6Co",
    start: 23
  },
  {
    city: "Machu Picchu",
    flag: "🇵🇪",
    country: "Peru",
    credit: "",
    image: "machu-picchu.png",
    alt: "Machu Picchu Peru virtual tour",
    description: "Inca citadel, Andes mountains, UNESCO heritage, ancient ruins, scenic landscape, archaeological wonder.",
    videoId: "Imzu3vTMOUo",
    start: 138
  },
  {
    city: "The Louvre",
    flag: "🇫🇷",
    country: "France",
    credit: "",
    image: "the-louvre.png",
    alt: "The Louvre museum virtual tour",
    description: "World-famous museum, art collections, historic palace, cultural treasures, iconic architecture, masterpieces.",
    videoId: "-ksG3VUgDWY",
    start: 350
  },
  {
    city: "Red Fort",
    flag: "🇮🇳",
    country: "India",
    credit: "",
    image: "new-delhi.png",
    alt: "Red Fort New Delhi virtual tour",
    description: "Mughal fortress, red sandstone, UNESCO heritage, historic architecture, cultural landmark, royal complex.",
    videoId: "OsqnlF8_9qQ",
    start: 61
  },
  {
    city: "Golconda Fort",
    flag: "🇮🇳",
    country: "India",
    credit: "",
    image: "golconda-fort.png",
    alt: "Golconda Fort virtual tour",
    description: "Historic fortress, royal palaces, stone architecture, panoramic views, ancient ruins, cultural heritage.",
    videoId: "Ok7p1aAKux8",
    start: 94
  }
];

const exploreMonument = document.querySelector(".explore-area-content");
const search = document.querySelector(".search input");
const loadMoreBtn = document.querySelector(".loadmorebtn");

const CARDS_PER_LOAD = 12;
let visibleCards = CARDS_PER_LOAD;

// Array currently being displayed
let filteredItems = [...monuments];

function renderCards() {
  if (filteredItems.length === 0) {
    exploreMonument.innerHTML = `
            <h3 class="no-result">No destinations found.</h3>
        `;
    loadMoreBtn.style.display = "none";
    return;
  }

  exploreMonument.innerHTML = filteredItems
    .slice(0, visibleCards)
    .map(
      (item) => `
            <div class="explore-area__item">
                <div class="thumbnail">
                    <img
                        class="bg-img"
                        src="./images/cities/${item.image}"
                        alt="${item.alt}"
                    />
                </div>

                <div class="text">
                    <h3>${item.flag} ${item.city}</h3>

                    <p>${item.description}</p>

                    <a
                        data-video="${item.videoId}"
                        data-start="${item.start}"
                        class="btn walk"
                    >
                        Begin Journey
                    </a>
                </div>
            </div>
        `,
    )
    .join("");

  // Show/Hide Load More button
  loadMoreBtn.style.display =
    visibleCards >= filteredItems.length ? "none" : "flex";
}

// Search
search.addEventListener("input", () => {
  const keyword = search.value.trim().toLowerCase();
  filteredItems = monuments.filter(
    (item) =>
      item.city.toLowerCase().includes(keyword) ||
      item.country.toLowerCase().includes(keyword),
  );
  // Reset to first 12 cards after searching
  visibleCards = CARDS_PER_LOAD;
  renderCards();
});

// Load More
loadMoreBtn.addEventListener("click", () => {
  visibleCards += CARDS_PER_LOAD;
  renderCards();
});

// Initial render
renderCards();

console.log("items:", monuments.length);
console.log("filteredItems:", filteredItems.length);
console.log("visibleCards:", visibleCards);

// sidebar buttons
const container = document.querySelector(".sidebar .buttons");

container.innerHTML = monuments
  .map(
    ({ city, flag, videoId, start }) => `
    <button
        class="walk"
        data-video="${videoId}"
        data-start="${start}">
        ${city} ${flag} </button>
`,
  )
  .join("");
