const marketData = [
  {
    city: "Afghanistan Bazaar",
    flag: "🇦🇫",
    country: "Afghanistan",
    credit: "",
    image: "afghanistan-market.png",
    alt: "Afghanistan traditional bazaar with local shops, handicrafts and bustling market streets",
    description:
      "Traditional market, handmade carpets, local crafts, colorful stalls, authentic Afghan culture, vibrant shopping experience.",
    videoId: "RhcOjR3Kzok",
    start: 226,
  },
  {
    city: "Ameyoko Market",
    flag: "🇯🇵",
    country: "Japan",
    credit: "4K World Wanderings",
    image: "ameyoko-market.png",
    alt: "Ameyoko Market bustling shopping street in Tokyo Japan",
    description:
      "Bustling street market, local food stalls, fresh seafood, bargain shopping, vibrant atmosphere, authentic Tokyo experience.",
    videoId: "8Y5fR60N4us",
    start: 346, 
  },
  {
  city: "Dubai City Centre",
  flag: "🇦🇪",
  country: "United Arab Emirates",
  credit: "",
  image: "dubai-city-centre.png",
  alt: "Dubai City Centre modern shopping district with luxury stores, restaurants, and vibrant streets in Dubai UAE",
  description: "Luxury shopping, modern malls, international brands, dining destinations, entertainment venues, vibrant city atmosphere.",
  videoId: "LVHwOwL60FA",
  start: 94,
},
{
  city: "Dubai Aquarium",
  flag: "🇦🇪",
  country: "United Arab Emirates",
  credit: "",
  image: "aquarium-dubai.png",
  alt: "Dubai Aquarium and Underwater Zoo featuring marine life, shark tunnel, and giant aquarium in Dubai UAE",
  description: "Marine life, underwater tunnel, sharks, exotic fish, aquatic exhibits, family attraction.",
  videoId: "jWd4VXKVDJU",
  start: 225,
},
{
  city: "Dubai Miracle Garden",
  flag: "🇦🇪",
  country: "United Arab Emirates",
  credit: "",
  image: "dubai-miracle-garden.png",
  alt: "Dubai Miracle Garden colorful floral displays, themed gardens, and flower sculptures in Dubai UAE",
  description: "Floral displays, flower sculptures, themed gardens, colorful landscapes, outdoor attraction, botanical beauty.",
  videoId: "68G5NwnVG9I",
  start: 130,
},
  {
    city: "Egyptian Bazaar",
    flag: "🇪🇬",
    country: "Egypt",
    credit: "4K World Wanderings",
    image: "egypt.png",
    alt: "Egyptian Bazaar traditional market with spices and local shops in Egypt",
    description:
      "Traditional marketplace, colorful spice stalls, handcrafted souvenirs, local flavors, lively shopping, rich Egyptian culture.",
    videoId: "KBYCSBuFX-k",
    start: 552,
  },
  {
  city: "Grand Bazaar",
  flag: "🇹🇷",
  country: "Turkey",
  credit: "",
  image: "grand-bazaar.png",
  alt: "Grand Bazaar historic covered market in Istanbul Turkey with traditional shops and colorful streets",
  description: "Historic marketplace, covered bazaar, Turkish carpets, jewelry shops, spice stalls, authentic shopping experience.",
  videoId: "PFL8k2TNg6o",
  start: 338,
},
  {
  city: "Hyderabad Bazaar",
  flag: "🇵🇰",
  country: "Pakistan",
  credit: "GIRL IN PARADISE",
  image: "hyderabad-bazaar.png",
  alt: "Hyderabad Bazaar bustling traditional market in Hyderabad Sindh Pakistan",
  description: "Historic marketplace, traditional shops, local handicrafts, street food, vibrant culture, authentic shopping experience.",
  videoId: "Gq1EtXTL7ZE",
  start: 336,
},
{
  city: "SeaWorld Abu Dhabi",
  flag: "🇦🇪",
  country: "United Arab Emirates",
  credit: "",
  image: "seaworld-abu-dhabi.png",
  alt: "SeaWorld Abu Dhabi marine life park with aquariums, dolphins, sharks, and immersive attractions in UAE",
  description: "Marine wildlife, interactive aquariums, dolphins, sharks, ocean exhibits, family entertainment.",
  videoId: "Aea0Z-d_Szg",
  start: 73,
},
{
  city: "Tajrish Bazaar",
  flag: "🇮🇷",
  country: "Iran",
  credit: "",
  image: "tajrish-bazaar.png",
  alt: "Tajrish Bazaar traditional market in Tehran Iran with shops, spices, and local culture",
  description: "Historic marketplace, traditional shops, Persian handicrafts, spice stalls, local cuisine, vibrant shopping experience.",
  videoId: "9yIMBrpHMhk",
  start: 185,
},
];

const explorMarketWalk = document.querySelector(".explore-area-content");
const search = document.querySelector(".search input");
const loadMoreBtn = document.querySelector(".loadmorebtn");

const CARDS_PER_LOAD = 12;
let visibleCards = CARDS_PER_LOAD;

// Array currently being displayed
let filteredWalks = [...marketData];

function renderCards() {
  if (filteredWalks.length === 0) {
    explorMarketWalk.innerHTML = `
            <h3 class="no-result">No destinations found.</h3>
        `;
    loadMoreBtn.style.display = "none";
    return;
  }

  explorMarketWalk.innerHTML = filteredWalks
    .slice(0, visibleCards)
    .map(
      (walk) => `
            <div class="explore-area__item">
                <div class="thumbnail">
                    <img
                        class="bg-img"
                        src="./images/cities/${walk.image}"
                        alt="${walk.alt}"
                    />
                </div>

                <div class="text">
                    <h3>${walk.flag} ${walk.city}</h3>

                    <p>${walk.description}</p>

                    <a
                        data-video="${walk.videoId}"
                        data-start="${walk.start}"
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
    visibleCards >= filteredWalks.length ? "none" : "flex";
}

// Search
search.addEventListener("input", () => {
  const keyword = search.value.trim().toLowerCase();

  filteredWalks = walks.filter(
    (walk) =>
      walk.city.toLowerCase().includes(keyword) ||
      walk.country.toLowerCase().includes(keyword),
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
console.log("walks:", marketData.length);
console.log("filteredWalks:", filteredWalks.length);
console.log("visibleCards:", visibleCards);

// sidebar buttons
const container = document.querySelector(".sidebar .buttons");

container.innerHTML = marketData
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
