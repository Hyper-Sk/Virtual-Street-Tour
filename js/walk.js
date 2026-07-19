const walks = [
  {
    city: "Amsterdam",
    flag: "🇳🇱",
    country: "Netherlands",
    credit: "",
    image: "amsterdam.png",
    alt: "Amsterdam city canals and historic streets in Netherlands",
    description: "Scenic canals, cycling culture, historic architecture, museums, charming neighborhoods, vibrant atmosphere.",
    videoId: "uL6z9v7Cf9Y",
    start: 180,
  },
  {
    city: "Abu Dhabi",
    flag: "🇦🇪",
    country: "United Arab Emirates",
    credit: "",
    image: "abu-dhabi.png",
    alt: "Abu Dhabi street view virtual tour",
    description: "Grand mosques, waterfront promenades, luxury attractions, modern architecture, rich Emirati culture.",
    videoId: "cFaGGCdNNZ8",
    start: 275,
  },
  {
    city: "Bangkok",
    flag: "🇹🇭",
    country: "Thailand",
    credit: "",
    image: "bangkok.png",
    alt: "Bangkok street view virtual tour",
    description: "Bustling markets, ornate temples, vibrant nightlife, delicious cuisine, scenic riverfront attractions.",
    videoId: "L_6HtFWVV6o",
    start: 200,
  },
  {
    city: "Barcelona",
    flag: "🇪🇸",
    country: "Spain",
    credit: "",
    image: "barcelona.png",
    alt: "Barcelona colorful streets and architecture in Spain",
    description: "Unique architecture, Mediterranean charm, artistic landmarks, lively avenues, vibrant local culture.",
    videoId: "Z8SuL0R8dGI",
    start: 163,
  },
  {
    city: "Berlin",
    flag: "🇩🇪",
    country: "Germany",
    credit: "",
    image: "berlin.png",
    alt: "Berlin street view virtual tour",
    description: "Historic landmarks, artistic districts, modern architecture, vibrant nightlife, diverse cultural experiences.",
    videoId: "1qitNAzhxQk",
    start: 10,
  },
  {
    city: "Beijing",
    flag: "🇨🇳",
    country: "China",
    credit: "",
    image: "beijing.png",
    alt: "Beijing street view virtual tour",
    description: "Imperial palaces, ancient temples, cultural landmarks, modern districts, centuries of history.",
    videoId: "2Mbg4E_JVaI",
    start: 44,
  },
  {
    city: "Capri",
    flag: "🇮🇹",
    country: "Italy",
    credit: "",
    image: "capri.png",
    alt: "Capri street view virtual tour",
    description: "Dramatic cliffs, crystal waters, luxury boutiques, scenic paths, Mediterranean beauty awaits.",
    videoId: "oCAuYL7akFQ",
    start: 180,
  },
  {
    city: "Cairo",
    flag: "🇪🇬",
    country: "Egypt",
    credit: "",
    image: "cairo-city.png",
    alt: "Cairo street view virtual tour",
    description: "Ancient pyramids, historic mosques, bustling markets, vibrant streets, Egyptian cultural heritage.",
    videoId: "2mGAKmK2zTk",
    start: 171,
  },
  {
    city: "Chongqing",
    flag: "🇨🇳",
    country: "China",
    credit: "",
    image: "chongqing.png",
    alt: "Chongqing skyline, mountain city roads, bridges, and rivers in China",
    description: "Mountain skyline, illuminated bridges, rivers, skyscrapers, unforgettable urban landscapes, vibrant streets.",
    videoId: "JvzjeE4pNjo",
    start: 426,
  },
  {
    city: "Chongqing (Night)",
    flag: "🇨🇳",
    country: "China",
    credit: "",
    image: "chongqing-night.png",
    alt: "Chongqing skyline, mountain city roads, bridges, and rivers in China",
    description: "Glowing skyline, illuminated bridges, mountain roads, rivers, spectacular nighttime city views.",
    videoId: "V5uDKBCLNkw",
    start: 268,
  },
  {
    city: "Chicago",
    flag: "🇺🇸",
    country: "United States",
    credit: "",
    image: "chicago.png",
    alt: "Chicago walking tour through downtown streets and famous landmarks",
    description: "Downtown skyline, Riverwalk, Millennium Park, historic architecture, vibrant city neighborhoods.",
    videoId: "MMxZcqdt76c",
    start: 83,
  },
  {
    city: "Doha",
    flag: "🇶🇦",
    country: "Qatar",
    credit: "",
    image: "doha.png",
    alt: "Doha walking tour through streets, Corniche, and Souq Waqif",
    description: "Modern skyline, Corniche, Souq Waqif, luxury shopping, authentic Qatari cultural experiences.",
    videoId: "PBsWxlyreXY",
    start: 8,
  },
  {
    city: "Dubai",
    flag: "🇦🇪",
    country: "United Arab Emirates",
    credit: "",
    image: "dubai.png",
    alt: "Dubai virtual walking tour",
    description: "Futuristic skyline, luxury attractions, desert landscapes, waterfront districts, iconic architecture.",
    videoId: "I9XB1gHvF74",
    start: 275,
  },
  {
    city: "Damascus",
    flag: "🇸🇾",
    country: "Syria",
    credit: "",
    image: "damascus.png",
    alt: "Damascus street view virtual tour",
    description: "Ancient streets, historic souks, beautiful architecture, rich culture, timeless heritage, unforgettable.",
    videoId: "GxI1q6a0r9Y",
    start: 21,
  },
  {
    city: "Grindelwald",
    flag: "🇨🇭",
    country: "Switzerland",
    credit: "",
    image: "grindelwald.png",
    alt: "Switzerland street view virtual tour",
    description: "Snowy mountains, alpine villages, scenic trails, breathtaking landscapes, peaceful Swiss nature.",
    videoId: "Q0kEnjBcvDc",
    start: 120,
  },
  {
    city: "Golconda Fort",
    flag: "🇮🇳",
    country: "India",
    credit: "",
    image: "golconda-fort.png",
    alt: "Golconda Fort virtual tour",
    description: "Historic fort, royal palaces, stone architecture, panoramic views, fascinating Indian history.",
    videoId: "Ok7p1aAKux8",
    start: 94,
  },
  {
    city: "Hong Kong",
    flag: "🇭🇰",
    country: "Hong Kong",
    credit: "",
    image: "hong-kong.png",
    alt: "Hong Kong street view virtual tour",
    description: "Modern skyline, busy markets, harbor views, vibrant streets, stunning urban scenery.",
    videoId: "PaJAm6NI9Qc",
    start: 20,
  },
  {
    city: "Helsinki",
    flag: "🇫🇮",
    country: "Finland",
    credit: "",
    image: "helsinki.png",
    alt: "Helsinki street view virtual tour",
    description: "Nordic architecture, seaside beauty, peaceful parks, cultural attractions, modern Finnish lifestyle.",
    videoId: "g5PmuZWgA88",
    start: 10,
  },
  {
    city: "Hanoi",
    flag: "🇻🇳",
    country: "Vietnam",
    credit: "",
    image: "ho-chi-minh-city.png",
    alt: "Hanoi street view virtual tour",
    description: "Historic streets, colonial buildings, vibrant markets, delicious cuisine, lively Vietnamese culture.",
    videoId: "xId3cHWsta4",
    start: 227,
  },
  {
    city: "Istanbul",
    flag: "🇹🇷",
    country: "Turkey",
    credit: "",
    image: "istanbul.png",
    alt: "Istanbul historic streets and skyline in Turkey",
    description: "Historic mosques, bustling markets, waterfront views, rich culture, unforgettable city experiences.",
    videoId: "jSwhjaRho0c",
    start: 5,
  },
  {
    city: "Jerusalem",
    flag: "🇵🇸",
    country: "Palestine",
    credit: "",
    image: "aqsa.png",
    alt: "Jerusalem walking tour through the Old City and historic landmarks",
    description: "Ancient streets, sacred landmarks, historic markets, rich heritage, unforgettable spiritual destination.",
    videoId: "g7VCU8nv2U0",
    start: 460,
  },
  {
    city: "Jakarta",
    flag: "🇮🇩",
    country: "Indonesia",
    credit: "",
    image: "jakarta.png",
    alt: "Jakarta street view virtual tour",
    description: "Bustling streets, cultural landmarks, modern skyline, vibrant neighborhoods, dynamic Indonesian capital.",
    videoId: "hNkdZFzzvBg",
    start: 12,
  },
  {
    city: "Kuala Lumpur",
    flag: "🇲🇾",
    country: "Malaysia",
    credit: "",
    image: "kuala-lumpur.png",
    alt: "Kuala Lumpur street view virtual tour",
    description: "Iconic skyscrapers, vibrant markets, multicultural neighborhoods, modern attractions, Malaysian culture.",
    videoId: "sLwhC92mF2k",
    start: 46,
  },
  {
    city: "Lauterbrunnen",
    flag: "🇨🇭",
    country: "Switzerland",
    credit: "",
    image: "lauterbrunnen.png",
    alt: "Lauterbrunnen Switzerland virtual tour",
    description: "Towering waterfalls, alpine valley, scenic trails, charming chalets, breathtaking mountain landscapes await.",
    videoId: "ZFZkXXf7QLc",
    start: 90,
  },
  {
    city: "Los Angeles",
    flag: "🇺🇸",
    country: "United States",
    credit: "",
    image: "los-angeles.png",
    alt: "Los Angeles street view virtual tour",
    description: "Hollywood landmarks, palm streets, sandy beaches, entertainment districts, vibrant California lifestyle.",
    videoId: "VINOSu5y4ic",
    start: 48,
  },
  {
    city: "London",
    flag: "🇬🇧",
    country: "United Kingdom",
    credit: "",
    image: "london.png",
    alt: "London city streets and famous landmarks in United Kingdom",
    description: "Royal landmarks, historic streets, iconic museums, vibrant markets, unforgettable British culture.",
    videoId: "yttFUAUdDf4",
    start: 115,
  },
  {
    city: "Mykonos",
    flag: "🇬🇷",
    country: "Greece",
    credit: "",
    image: "mykonos.png",
    alt: "Mykonos street view virtual tour",
    description: "Whitewashed streets, beautiful beaches, charming windmills, vibrant nightlife, stunning Aegean scenery.",
    videoId: "41FOuEwTJEQ",
    start: 1692,
  },
  {
    city: "Muscat",
    flag: "🇴🇲",
    country: "Oman",
    credit: "",
    image: "muscat.png",
    alt: "Muscat walking tour through historic streets and waterfront",
    description: "Historic forts, scenic Corniche, peaceful streets, beautiful mosques, authentic Omani culture.",
    videoId: "mIHUcmkSxNM",
    start: 156,
  },
  {
    city: "Manhattan (Times Square)",
    flag: "🇺🇸",
    country: "United States",
    credit: "",
    image: "time-square.png",
    alt: "Times Square New York street view virtual tour",
    description: "Bright billboards, bustling crowds, famous theaters, vibrant nightlife, iconic New York energy.",
    videoId: "dJm43N7E_pA",
    start: 2,
  },
  {
    city: "Mumbai",
    flag: "🇮🇳",
    country: "India",
    credit: "",
    image: "mumbai.png",
    alt: "Mumbai street view virtual tour",
    description: "Bustling streets, coastal views, vibrant markets, colonial architecture, dynamic Indian metropolis.",
    videoId: "5GwI8sUcEp8",
    start: 44,
  },
  {
    city: "Maldives",
    flag: "🇲🇻",
    country: "Maldives",
    credit: "",
    image: "maldives.png",
    alt: "Maldives walking tour through tropical islands and beachfront paths",
    description: "Crystal waters, tropical islands, white beaches, luxury resorts, peaceful ocean paradise.",
    videoId: "LlVznIMJglc",
    start: 126,
  },
  {
    city: "Melbourne",
    flag: "🇦🇺",
    country: "Australia",
    credit: "",
    image: "melbourne.png",
    alt: "Melbourne street view virtual tour",
    description: "Artistic laneways, trendy cafés, beautiful parks, cultural attractions, creative city atmosphere.",
    videoId: "Prz2VJOdtEE",
    start: 40,
  },
  {
    city: "Mexico City",
    flag: "🇲🇽",
    country: "Mexico",
    credit: "",
    image: "mexico-city.png",
    alt: "Mexico City street view virtual tour",
    description: "Historic plazas, colorful neighborhoods, vibrant markets, cultural landmarks, lively urban experiences.",
    videoId: "fVh9YNTzhak",
    start: 230,
  },
  {
    city: "Montreal",
    flag: "🇨🇦",
    country: "Canada",
    credit: "",
    image: "montreal.png",
    alt: "Montreal street view virtual tour",
    description: "Historic districts, charming streets, vibrant festivals, beautiful architecture, French-Canadian culture.",
    videoId: "UHuQ1jc_hB4",
    start: 331,
  },
  {
    city: "Milan",
    flag: "🇮🇹",
    country: "Italy",
    credit: "",
    image: "milan.png",
    alt: "Milan street view virtual tour",
    description: "Fashion capital, historic cathedrals, elegant boulevards, modern design, Italian culture thrives.",
    videoId: "8FCkb7NZ7SI",
    start: 65,
  },
  {
    city: "Moscow",
    flag: "🇷🇺",
    country: "Russia",
    credit: "",
    image: "moscow.png",
    alt: "Moscow street view virtual tour",
    description: "Grand avenues, iconic architecture, historic landmarks, vibrant squares, rich Russian heritage.",
    videoId: "CLfVNSqaoV4",
    start: 110,
  },
  {
    city: "New York City",
    flag: "🇺🇸",
    country: "United States",
    credit: "",
    image: "new-york.png",
    alt: "New York City skyline and busy streets in USA",
    description: "Iconic skyscrapers, Central Park, bustling avenues, vibrant neighborhoods, unforgettable city experiences.",
    videoId: "27Pv4Cg4EV4",
    start: 800,
  },
  {
    city: "New Delhi",
    flag: "🇮🇳",
    country: "India",
    credit: "",
    image: "new-delhi.png",
    alt: "New Delhi street view virtual tour",
    description: "Historic monuments, vibrant markets, government buildings, diverse culture, modern city life.",
    videoId: "IiW8181-Dbo",
    start: 28,
  },
  {
    city: "Naples",
    flag: "🇮🇹",
    country: "Italy",
    credit: "",
    image: "naples.png",
    alt: "Naples street view virtual tour",
    description: "Historic streets, coastal scenery, authentic cuisine, ancient heritage, vibrant Italian culture.",
    videoId: "NON14NgRTC4",
    start: 81,
  },
  {
    city: "Osaka",
    flag: "🇯🇵",
    country: "Japan",
    credit: "",
    image: "osaka.png",
    alt: "Osaka street view virtual tour",
    description: "Bustling streets, delicious cuisine, historic landmarks, modern attractions, welcoming Japanese culture.",
    videoId: "xP-wJbQcMOc",
    start: 220,
  },
  {
    city: "Paris",
    flag: "🇫🇷",
    country: "France",
    credit: "",
    image: "paris.png",
    alt: "Paris streets cafes and landmarks in France",
    description: "Iconic landmarks, elegant boulevards, charming cafés, artistic heritage, timeless Parisian beauty.",
    videoId: "oz1Mgu8e1N4",
    start: 132,
  },
  {
    city: "Positano",
    flag: "🇮🇹",
    country: "Italy",
    credit: "",
    image: "positano.png",
    alt: "Positano walking tour through colorful cliffside streets and coastal views",
    description: "Colorful streets, cliffside views, charming cafés, beautiful beaches, breathtaking Amalfi Coast.",
    videoId: "IhyzXSk5mGs",
    start: 80,
  },
  {
    city: "Lahore",
    flag: "🇵🇰",
    country: "Pakistan",
    credit: "",
    image: "lahore.png",
    alt: "Lahore walking tour through historic streets and famous landmarks",
    description: "Historic bazaars, Mughal architecture, vibrant streets, rich culture, unforgettable heritage experiences.",
    videoId: "1BbuDMz2h3k",
    start: 151,
  },
  {
    city: "Prague",
    flag: "🇨🇿",
    country: "Czech Republic",
    credit: "",
    image: "prague.png",
    alt: "Prague street view virtual tour",
    description: "Medieval streets, Gothic architecture, historic bridges, charming squares, unforgettable European beauty.",
    videoId: "VZrcZLJ0HUM",
    start: 84,
  },
  {
    city: "Riyadh (Night)",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    credit: "",
    image: "riyad.png",
    alt: "Riyadh street view virtual tour",
    description: "Modern skyscrapers, illuminated streets, cultural landmarks, vibrant nightlife, Saudi capital shines.",
    videoId: "UYhEAeRisuo",
    start: 8,
  },
  {
    city: "Rome",
    flag: "🇮🇹",
    country: "Italy",
    credit: "",
    image: "rome.png",
    alt: "Rome ancient landmarks and historic streets in Italy",
    description: "Ancient ruins, historic plazas, grand architecture, charming streets, timeless Roman heritage.",
    videoId: "uOJkVLwnCNI",
    start: 303,
  },
  {
    city: "Stockholm",
    flag: "🇸🇪",
    country: "Sweden",
    credit: "",
    image: "stockholm.png",
    alt: "Sweden street view virtual tour",
    description: "Historic waterfronts, charming old town, Nordic beauty, vibrant culture, scenic landscapes.",
    videoId: "Ehi1Mz6ZVDc",
    start: 47,
  },
  {
    city: "Santorini",
    flag: "🇬🇷",
    country: "Greece",
    credit: "",
    image: "santorini.png",
    alt: "Santorini walking tour through whitewashed streets and coastal villages",
    description: "Whitewashed villages, blue domes, cliffside paths, breathtaking views, Aegean island paradise.",
    videoId: "TKNK0c1zfVo",
    start: 113,
  },
  {
    city: "San Francisco",
    flag: "🇺🇸",
    country: "United States",
    credit: "",
    image: "california.png",
    alt: "California scenic road trip and street view virtual tour",
    description: "Golden Gate Bridge, scenic coastlines, rolling hills, vibrant neighborhoods, iconic landmarks.",
    videoId: "vdihtkpKoNc",
    start: 373,
  },
  {
    city: "Singapore",
    flag: "🇸🇬",
    country: "Singapore",
    credit: "",
    image: "singapore.png",
    alt: "Singapore modern city streets and skyline",
    description: "Futuristic skyline, spotless streets, waterfront gardens, multicultural districts, modern city experiences.",
    videoId: "3MFlpVe93XU",
    start: 57,
  },
  {
    city: "Seoul",
    flag: "🇰🇷",
    country: "South Korea",
    credit: "",
    image: "seoul.png",
    alt: "Seoul street view virtual tour",
    description: "Traditional palaces, futuristic skyline, lively markets, trendy districts, vibrant Korean culture.",
    videoId: "unY9hqu9bEk",
    start: 10,
  },
  {
    city: "Sydney",
    flag: "🇦🇺",
    country: "Australia",
    credit: "",
    image: "sydney.png",
    alt: "Sydney street view virtual tour",
    description: "Harbor views, iconic Opera House, beautiful beaches, coastal walks, vibrant Australian lifestyle.",
    videoId: "MJQ6ZyBNtCk",
    start: 200,
  },
  {
    city: "Shanghai",
    flag: "🇨🇳",
    country: "China",
    credit: "",
    image: "shanghai-day.png",
    alt: "Shanghai street view virtual tour",
    description: "Modern skyline, waterfront boulevard, luxury districts, vibrant streets, futuristic city atmosphere.",
    videoId: "euvrgJKqrNc",
    start: 117,
  },
  {
    city: "Shanghai (Night)",
    flag: "🇨🇳",
    country: "China",
    credit: "",
    image: "shanghai-night.png",
    alt: "Shanghai street view virtual tour",
    description: "Glowing skyline, illuminated waterfront, modern architecture, vibrant nightlife, unforgettable city views.",
    videoId: "AVPThQc_z_4",
    start: 181,
  },

  {
    city: "Tokyo",
    flag: "🇯🇵",
    country: "Japan",
    credit: "",
    image: "tokyo.png",
    alt: "Tokyo modern skyline and busy streets in Japan",
    description: "Neon streets, futuristic skyline, historic temples, bustling crossings, vibrant Japanese culture.",
    videoId: "28ZjrtD_iL0",
    start: 380,
  },
  {
    city: "Tehran",
    flag: "🇮🇷",
    country: "Iran",
    credit: "",
    image: "tehran.png",
    alt: "Tehran street view virtual tour",
    description: "Mountain views, bustling avenues, historic palaces, cultural museums, vibrant Persian city.",
    videoId: "wfmPGNfzm8g",
    start: 358,
  },
  {
    city: "Toronto",
    flag: "🇨🇦",
    country: "Canada",
    credit: "",
    image: "toronto.png",
    alt: "Toronto street view virtual tour",
    description: "Iconic skyline, waterfront attractions, multicultural neighborhoods, vibrant streets, Canadian metropolis.",
    videoId: "Ex5_d0NyWO8",
    start: 247,
  },
  {
    city: "Venice",
    flag: "🇮🇹",
    country: "Italy",
    credit: "",
    image: "venice.png",
    alt: "Venice street view virtual tour",
    description: "Historic canals, charming bridges, beautiful architecture, romantic streets, timeless Italian destination.",
    videoId: "2BfHMnDOteA",
    start: 303,
  },
  {
    city: "Vancouver",
    flag: "🇨🇦",
    country: "Canada",
    credit: "",
    image: "vancouver.png",
    alt: "Vancouver street view virtual tour",
    description: "Mountain views, scenic waterfront, green parks, modern skyline, outdoor adventure paradise.",
    videoId: "n_nye25KIZg",
    start: 112,
  },
  {
    city: "Valletta",
    flag: "🇲🇹",
    country: "Malta",
    credit: "",
    image: "valletta.png",
    alt: "Valletta walking tour through historic streets and Baroque landmarks",
    description: "Historic streets, Baroque architecture, grand squares, ancient fortifications, Mediterranean coastal beauty.",
    videoId: "MTkX0_htW-I",
    start: 64,
  },
];


const exploreAreaWalk = document.querySelector(".explore-area-content");
const search = document.querySelector(".search input");
const loadMoreBtn = document.querySelector(".loadmorebtn");

const CARDS_PER_LOAD = 12;
let visibleCards = CARDS_PER_LOAD;

// Array currently being displayed
let filteredWalks = [...walks];

function renderCards() {

  if (filteredWalks.length === 0) {
    exploreAreaWalk.innerHTML = `
            <h3 class="no-result">No destinations found.</h3>
        `;
    loadMoreBtn.style.display = "none";
    return;
  }

  exploreAreaWalk.innerHTML = filteredWalks
    .slice(0, visibleCards)
    .map(walk => `
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
        `)
    .join("");

  // Show/Hide Load More button
  loadMoreBtn.style.display =
    visibleCards >= filteredWalks.length ? "none" : "flex";
}

// Search
search.addEventListener("input", () => {

  const keyword = search.value.trim().toLowerCase();

  filteredWalks = walks.filter(walk =>
    walk.city.toLowerCase().includes(keyword) ||
    walk.country.toLowerCase().includes(keyword)
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


console.log("walks:", walks.length);
console.log("filteredWalks:", filteredWalks.length);
console.log("visibleCards:", visibleCards);

// sidebar buttons
const container = document.querySelector(".sidebar .buttons");

container.innerHTML = walks
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
