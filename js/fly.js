const flights = [
  {
    city: "New York",
    flag: "🇺🇸",
    country: "United States",
    credit: "",
    image: "new-york.png",
    alt: "New York City skyline, Times Square, and famous streets in USA",
    description: "Skyscrapers, Times Square, Central Park, Manhattan skyline, iconic landmarks, aerial city views.",
    videoId: "qDdGKWJwf5w",
    start: 0
  },
  {
    city: "London",
    flag: "🇬🇧",
    country: "United Kingdom",
    credit: "",
    image: "london.png",
    alt: "London skyline, Big Ben, Tower Bridge, and famous streets in England",
    description: "Big Ben, Tower Bridge, River Thames, historic landmarks, city skyline, aerial views.",
    videoId: "b_M3YPNEsxk",
    start: 35
  },
];

const exploreFlight = document.querySelector(".explore-area-content");
const search = document.querySelector(".search input");
const loadMoreBtn = document.querySelector(".loadmorebtn");

const CARDS_PER_LOAD = 12;
let visibleCards = CARDS_PER_LOAD;

// Array currently being displayed
let filteredItems = [...flights];

function renderCards() {
  if (filteredItems.length === 0) {
    exploreFlight.innerHTML = `
            <h3 class="no-result">No destinations found.</h3>
        `;
    loadMoreBtn.style.display = "none";
    return;
  }

  exploreFlight.innerHTML = filteredItems
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
  filteredItems = flights.filter(
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

console.log("items:", flights.length);
console.log("filteredItems:", filteredItems.length);
console.log("visibleCards:", visibleCards);

// sidebar buttons
const container = document.querySelector(".sidebar .buttons");

container.innerHTML = flights
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
