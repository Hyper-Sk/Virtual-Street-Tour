const drives = [
    {
        city: "California",
        flag: "🇺🇸",
        image: "california.png",
        alt: "California coastal highways, cities, beaches, and scenic landscapes",
        description: "Experience stunning coastlines, vibrant cities, famous beaches, national parks, scenic drives, and California's diverse attractions.",
        videoId: "sUcWuiUpvF4",
        start: 130
    },
    {
        city: "Chongqing",
        flag: "🇨🇳",
        image: "chongqing.png",
        alt: "Chongqing skyline, mountain roads, bridges, and city lights in China",
        description: "Experience dramatic skylines, mountain streets, illuminated bridges, riverside views, bustling neighborhoods, and Chongqing's unique urban landscape.",
        videoId: "Boh66Pjjiq0",
        start: 75
    },
    {
        city: "Dubai",
        flag: "🇦🇪",
        image: "dubai.png",
        alt: "Dubai UAE virtual street tour featuring Burj Khalifa, modern skyline, luxury roads, and city views",
        description: "Experience the Burj Khalifa, luxury shopping, stunning skyscrapers, beautiful beaches, vibrant streets, and Dubai's world-famous modern architecture.",
        videoId: "6RPU08WoaxE",
        start: 100
    },
    {
        city: "Johannesburg",
        flag: "🇿🇦",
        image: "johannesburg.png",
        alt: "Johannesburg city streets, skyline, and landmarks in South Africa",
        description: "Discover vibrant neighborhoods, modern skylines, historic landmarks, cultural attractions, lively streets, and Johannesburg's dynamic urban atmosphere.",
        videoId: "_XMr0bE5cwo",
        start: 25
    },
    {
        city: "Los Angeles",
        flag: "🇺🇸",
        image: "los-angeles.png",
        alt: "Los Angeles streets, Hollywood, palm trees, and famous attractions",
        description: "Explore Hollywood, Beverly Hills, Santa Monica, palm-lined streets, famous landmarks, sunny beaches, and vibrant city life.",
        videoId: "rctsYGhnsEw",
        start: 573
    },
    {
        city: "New York",
        flag: "🇺🇸",
        image: "new-york.png",
        alt: "New York City skyline, Times Square, and famous streets in USA",
        description: "Home to iconic skyscrapers, Times Square, Central Park, famous landmarks, diverse neighborhoods, and nonstop city energy.",
        videoId: "7OgQjRn2x1w",
        start: 110
    },
    {
        city: "Shanghai",
        flag: "🇨🇳",
        image: "shanghai-day.png",
        alt: "Shanghai skyline, Bund waterfront, and modern city streets in China",
        description: "Explore futuristic skyscrapers, the Bund waterfront, vibrant streets, historic districts, shopping areas, and Shanghai's world-famous skyline.",
        videoId: "MAiltiE8tgI",
        start: 190
    },
   
];


const exploreAreaDrive = document.querySelector(".explore-area-content");

exploreAreaDrive.innerHTML = drives.map(drive => `
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
`).join("");


const container = document.querySelector(".sidebar .buttons");

container.innerHTML = drives.map(({ city, flag, videoId, start }) => `
    <button
        class="walk"
        data-video="${videoId}"
        data-start="${start}">
        ${city} ${flag}
    </button>
`).join("");