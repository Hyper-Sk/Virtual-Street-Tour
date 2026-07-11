const drives = [
  {
    city: "California",
    flag: "🇺🇸",
    image: "california.png",
    alt: "California coastal highways, cities, beaches, and scenic landscapes",
    description:
      "Experience stunning coastlines, vibrant cities, famous beaches, national parks, scenic drives, and California's diverse attractions.",
    videoId: "sUcWuiUpvF4",
    start: 130,
  },
  {
    city: "Chongqing",
    flag: "🇨🇳",
    image: "chongqing.png",
    alt: "Chongqing skyline, mountain roads, bridges, and city lights in China",
    description:
      "Experience dramatic skylines, mountain streets, illuminated bridges, riverside views, bustling neighborhoods, and Chongqing's unique urban landscape.",
    videoId: "Boh66Pjjiq0",
    start: 75,
  },
  {
    city: "Doha",
    flag: "🇶🇦",
    image: "doha.png",
    alt: "Doha driving tour through city streets and landmarks",
    description:
      "Enjoy a virtual driving tour through Doha's wide boulevards, modern skyline, Corniche waterfront, luxury districts, iconic landmarks, and vibrant city streets.",
    videoId: "waqy2Q2jYVs",
    start: 95,
  },
  {
    city: "Dubai",
    flag: "🇦🇪",
    image: "dubai.png",
    alt: "Dubai UAE virtual street tour featuring Burj Khalifa, modern skyline, luxury roads, and city views",
    description:
      "Experience the Burj Khalifa, luxury shopping, stunning skyscrapers, beautiful beaches, vibrant streets, and Dubai's world-famous modern architecture.",
    videoId: "6RPU08WoaxE",
    start: 100,
  },
  {
    city: "Johannesburg",
    flag: "🇿🇦",
    image: "johannesburg.png",
    alt: "Johannesburg city streets, skyline, and landmarks in South Africa",
    description:
      "Discover vibrant neighborhoods, modern skylines, historic landmarks, cultural attractions, lively streets, and Johannesburg's dynamic urban atmosphere.",
    videoId: "_XMr0bE5cwo",
    start: 25,
  },
  {
    city: "Los Angeles",
    flag: "🇺🇸",
    image: "los-angeles.png",
    alt: "Los Angeles streets, Hollywood, palm trees, and famous attractions",
    description:
      "Explore Hollywood, Beverly Hills, Santa Monica, palm-lined streets, famous landmarks, sunny beaches, and vibrant city life.",
    videoId: "rctsYGhnsEw",
    start: 573,
  },
  {
    city: "London",
    flag: "🇬🇧",
    image: "london.png",
    alt: "London driving tour through iconic streets and famous landmarks",
    description: "Enjoy a virtual driving tour through London's historic streets, Tower Bridge, Buckingham Palace, Big Ben, vibrant neighborhoods, and world-famous attractions.",
    videoId: "lCvWZj_kFgo",
    start: 93
},
  {
    city: "Muscat",
    flag: "🇴🇲",
    image: "muscat.png",
    alt: "Muscat driving tour through scenic roads and coastal landmarks",
    description: "Enjoy a virtual driving tour through Muscat's coastal highways, mountain roads, Muttrah Corniche, modern neighborhoods, historic landmarks, and breathtaking Arabian Sea views.",
    videoId: "hnBrddlz3Vw",
    start: 80
},
{
    city: "Miami",
    flag: "🇺🇸",
    image: "miami.png",
    alt: "Miami driving tour through beaches, downtown, and scenic coastal roads",
    description: "Enjoy a virtual driving tour through Miami's palm-lined streets, South Beach, Ocean Drive, downtown skyline, luxury neighborhoods, and beautiful waterfront views.",
    videoId: "jvuQFS2lrUo",
    start: 87
},
{
    city: "Netherlands",
    flag: "🇳🇱",
    image: "netherlands.png",
    alt: "Netherlands driving tour through scenic roads, canals, and countryside",
    description: "Enjoy a virtual driving tour through the Netherlands' scenic highways, charming villages, colorful tulip fields, historic cities, iconic windmills, and beautiful canal landscapes.",
    videoId: "HjzfdGZvc-Y",
    start: 107
},
  {
    city: "New York",
    flag: "🇺🇸",
    image: "new-york.png",
    alt: "New York City skyline, Times Square, and famous streets in USA",
    description:
      "Home to iconic skyscrapers, Times Square, Central Park, famous landmarks, diverse neighborhoods, and nonstop city energy.",
    videoId: "7OgQjRn2x1w",
    start: 110,
  },
  {
    city: "Shanghai",
    flag: "🇨🇳",
    image: "shanghai-day.png",
    alt: "Shanghai skyline, Bund waterfront, and modern city streets in China",
    description:
      "Explore futuristic skyscrapers, the Bund waterfront, vibrant streets, historic districts, shopping areas, and Shanghai's world-famous skyline.",
    videoId: "MAiltiE8tgI",
    start: 190,
  },
  {
    city: "Switzerland",
    flag: "🇨🇭",
    image: "switzerland.png",
    alt: "Switzerland driving tour through alpine roads and scenic landscapes",
    description: "Enjoy a virtual driving tour through Switzerland's mountain roads, picturesque villages, crystal-clear lakes, alpine passes, charming towns, and breathtaking natural landscapes.",
    videoId: "IdDt9IS6ejU",
    start: 288
},
];

const exploreAreaDrive = document.querySelector(".explore-area-content");

exploreAreaDrive.innerHTML = drives
  .map(
    (drive) => `
  <div class="explore-area__item">
    <div class="thumbnail">
      <img
        class="bg-img"
        src="./images/cities/${drive.image}"
        alt="${drive.alt}"
      />
    </div>

    <div class="text">
      <h3>${drive.flag} ${drive.city}</h3>

      <p>
        ${drive.description}
      </p>

      <a
        data-video="${drive.videoId}"
        data-start="${drive.start}"
        class="btn walk"
      >
        Begin Journey
      </a>
    </div>
  </div>
`,
  )
  .join("");

const container = document.querySelector(".sidebar .buttons");

container.innerHTML = drives
  .map(
    ({ city, flag, videoId, start }) => `
    <button
        class="walk"
        data-video="${videoId}"
        data-start="${start}">
        ${city} ${flag}
    </button>
`,
  )
  .join("");
