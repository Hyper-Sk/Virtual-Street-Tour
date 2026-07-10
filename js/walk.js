const walks = [
    {
        city: "Amsterdam",
        flag: "🇳🇱",
        image: "amsterdam.png",
        alt: "Amsterdam city canals and historic streets in Netherlands",
        description: "Famous for scenic canals, cycling culture, historic architecture, vibrant neighborhoods, museums, and charming streets full of character.",
        videoId: "uL6z9v7Cf9Y",
        start: 180
    },
    {
        city: "Abu Dhabi",
        flag: "🇦🇪",
        image: "abu-dhabi.png",
        alt: "Abu Dhabi street view virtual tour",
        description: "Discover grand mosques, waterfront promenades, modern architecture, luxury attractions, and rich Emirati culture throughout the city.",
        videoId: "cFaGGCdNNZ8",
        start: 275
    },
    {
        city: "Bangkok",
        flag: "🇹🇭",
        image: "bangkok.png",
        alt: "Bangkok street view virtual tour",
        description: "Experience lively street markets, ornate temples, bustling neighborhoods, delicious cuisine, riverfront attractions, and nightlife.",
        videoId: "L_6HtFWVV6o",
        start: 200
    },
    {
        city: "Barcelona",
        flag: "🇪🇸",
        image: "barcelona.png",
        alt: "Barcelona colorful streets and architecture in Spain",
        description: "Admire unique architecture, lively avenues, Mediterranean atmosphere, artistic landmarks, and vibrant local culture.",
        videoId: "Z8SuL0R8dGI",
        start: 163
    },
    {
        city: "Berlin",
        flag: "🇩🇪",
        image: "berlin.png",
        alt: "Berlin street view virtual tour",
        description: "Explore historic landmarks, modern architecture, artistic districts, vibrant nightlife, cultural diversity, and fascinating history.",
        videoId: "1qitNAzhxQk",
        start: 10
    },
    {
        city: "Beijing",
        flag: "🇨🇳",
        image: "beijing.png",
        alt: "Beijing street view virtual tour",
        description: "Explore imperial palaces, ancient temples, modern districts, cultural landmarks, and centuries of Chinese history.",
        videoId: "J-ogDAu_xzI",
        start: 105
    },
    {
        city: "Capri",
        flag: "🇮🇹",
        image: "capri.png",
        alt: "Capri street view virtual tour",
        description: "Discover dramatic cliffs, luxury boutiques, scenic coastal paths, colorful streets, crystal-clear waters, and stunning Mediterranean views.",
        videoId: "SQOsKedmgPw",
        start: 215
    },
    {
        city: "Cairo",
        flag: "🇪🇬",
        image: "cairo-city.png",
        alt: "Cairo street view virtual tour",
        description: "Explore ancient wonders, bustling markets, historic mosques, vibrant streets, rich Egyptian culture, and iconic pyramid views.",
        videoId: "2mGAKmK2zTk",
        start: 171
    },
    {
        city: "Chongqing",
        flag: "🇨🇳",
        image: "chongqing.png",
        alt: "Chongqing skyline, mountain city roads, bridges, and rivers in China",
        description: "Discover dramatic mountain roads, towering skyscrapers, scenic rivers, illuminated bridges, bustling streets, and Chongqing's unforgettable city views.",
        videoId: "JvzjeE4pNjo",
        start: 426
    },
    {
        city: "Dubai",
        flag: "🇦🇪",
        image: "dubai.png",
        alt: "Dubai modern skyline and luxury districts in UAE",
        description: "Marvel at futuristic architecture, luxury developments, desert surroundings, waterfront districts, and extraordinary cityscapes.",
        videoId: "I9XB1gHvF74",
        start: 275
    },
    {
        city: "Damascus",
        flag: "🇸🇾",
        image: "damascus.png",
        alt: "Damascus street view virtual tour",
        description: "Explore one of the world's oldest cities, featuring historic souks, ancient architecture, and rich cultural heritage.",
        videoId: "GxI1q6a0r9Y",
        start: 21
    },
    {
        city: "Grindelwald",
        flag: "🇨🇭",
        image: "grindelwald.png",
        alt: "Switzerland street view virtual tour",
        description: "Discover breathtaking alpine landscapes, charming villages, crystal-clear lakes, scenic mountain roads, historic towns, and stunning natural beauty.",
        videoId: "Q0kEnjBcvDc",
        start: 120
    },
    {
        city: "Golconda Fort",
        flag: "🇮🇳",
        image: "golconda-fort.png",
        alt: "Golconda Fort virtual tour",
        description: "Walk through historic fortifications, royal palaces, scenic viewpoints, fascinating history, and impressive stone architecture.",
        videoId: "Ok7p1aAKux8",
        start: 94
    },
    {
        city: "Hong Kong",
        flag: "🇭🇰",
        image: "hong-kong.png",
        alt: "Hong Kong street view virtual tour",
        description: "Admire dramatic skylines, busy markets, harbor views, modern architecture, mountain scenery, and vibrant urban life.",
        videoId: "PaJAm6NI9Qc",
        start: 20
    },
    {
        city: "Helsinki",
        flag: "🇫🇮",
        image: "helsinki.png",
        alt: "Helsinki street view virtual tour",
        description: "Experience Nordic architecture, seaside landscapes, design districts, peaceful parks, cultural attractions, and modern living.",
        videoId: "g5PmuZWgA88",
        start: 10
    },
    {
        city: "Hanoi",
        flag: "🇻🇳",
        image: "ho-chi-minh-city.png",
        alt: "Ho Chi Minh City street view virtual tour",
        description: "Experience bustling streets, colonial architecture, vibrant markets, modern development, delicious cuisine, and energetic city life.",
        videoId: "xId3cHWsta4",
        start: 227
    },
    {
        city: "Istanbul",
        flag: "🇹🇷",
        image: "istanbul.png",
        alt: "Istanbul historic streets and skyline in Turkey",
        description: "Experience a fascinating blend of Europe and Asia through markets, mosques, palaces, and waterfront streets.",
        videoId: "jSwhjaRho0c",
        start: 5
    },
    {
        city: "Jakarta",
        flag: "🇮🇩",
        image: "jakarta.png",
        alt: "Jakarta street view virtual tour",
        description: "Discover bustling neighborhoods, cultural attractions, historic sites, modern developments, and Indonesia's dynamic capital city.",
        videoId: "hNkdZFzzvBg",
        start: 12
    },
    {
        city: "Kuala Lumpur",
        flag: "🇲🇾",
        image: "kuala-lumpur.png",
        alt: "Kuala Lumpur street view virtual tour",
        description: "Experience iconic skyscrapers, multicultural neighborhoods, vibrant markets, modern attractions, and rich Malaysian culture.",
        videoId: "sLwhC92mF2k",
        start: 46
    },
    {
        city: "Lauterbrunnen",
        flag: "🇨🇭",
        image: "lauterbrunnen.png",
        alt: "Lauterbrunnen Switzerland virtual tour",
        description: "Explore a stunning alpine valley surrounded by towering cliffs, waterfalls, charming chalets, scenic trails, and breathtaking mountain views.",
        videoId: "ZFZkXXf7QLc",
        start: 90
    },
    {
        city: "Los Angeles",
        flag: "🇺🇸",
        image: "los-angeles.png",
        alt: "Los Angeles street view virtual tour",
        description: "Explore famous boulevards, palm-lined streets, iconic landmarks, beautiful beaches, entertainment districts, and Southern California culture.",
        videoId: "VINOSu5y4ic",
        start: 48
    },
    {
        city: "London",
        flag: "🇬🇧",
        image: "london.png",
        alt: "London city streets and famous landmarks in United Kingdom",
        description: "Explore royal landmarks, historic streets, diverse neighborhoods, world-class museums, vibrant markets, and modern attractions.",
        videoId: "yttFUAUdDf4",
        start: 115
    },
    {
        city: "Mykonos",
        flag: "🇬🇷",
        image: "mykonos.png",
        alt: "Mykonos street view virtual tour",
        description: "Explore whitewashed streets, charming windmills, stunning beaches, picturesque alleys, vibrant nightlife, and breathtaking Aegean Sea views.",
        videoId: "41FOuEwTJEQ",
        start: 1692
    },
    {
        city: "Manhattan (Times Square)",
        flag: "🇺🇸",
        image: "time-square.png",
        alt: "Times Square New York street view virtual tour",
        description: "Experience dazzling billboards, bustling crowds, iconic theaters, vibrant nightlife, famous attractions, and New York energy.",
        videoId: "dJm43N7E_pA",
        start: 2
    },
    {
        city: "Mumbai",
        flag: "🇮🇳",
        image: "mumbai.png",
        alt: "Mumbai street view virtual tour",
        description: "Discover bustling streets, colonial architecture, coastal views, vibrant markets, diverse culture, and dynamic city life.",
        videoId: "5GwI8sUcEp8",
        start: 44
    },
    {
        city: "Melbourne",
        flag: "🇦🇺",
        image: "melbourne.png",
        alt: "Melbourne street view virtual tour",
        description: "Explore artistic laneways, cultural attractions, trendy cafés, beautiful parks, sporting venues, and creative energy.",
        videoId: "Prz2VJOdtEE",
        start: 40
    },
    {
        city: "Mexico City",
        flag: "🇲🇽",
        image: "mexico-city.png",
        alt: "Mexico City street view virtual tour",
        description: "Discover historic plazas, colorful neighborhoods, cultural landmarks, vibrant markets, world-class museums, and lively urban streets.",
        videoId: "fVh9YNTzhak",
        start: 230
    },
    {
        city: "Montreal",
        flag: "🇨🇦",
        image: "montreal.png",
        alt: "Montreal street view virtual tour",
        description: "Wander charming streets, historic districts, cultural festivals, beautiful architecture, and vibrant French-Canadian heritage.",
        videoId: "UHuQ1jc_hB4",
        start: 331
    },
    {
        city: "Milan",
        flag: "🇮🇹",
        image: "milan.png",
        alt: "Milan street view virtual tour",
        description: "Discover elegant boulevards, fashion districts, historic cathedrals, modern design, and vibrant Italian culture.",
        videoId: "8FCkb7NZ7SI",
        start: 65
    },
    {
        city: "Moscow",
        flag: "🇷🇺",
        image: "moscow.png",
        alt: "Moscow street view virtual tour",
        description: "Discover grand avenues, historic landmarks, iconic architecture, cultural treasures, vibrant squares, and rich Russian heritage.",
        videoId: "CLfVNSqaoV4",
        start: 110
    },
    {
        city: "New York City",
        flag: "🇺🇸",
        image: "new-york.png",
        alt: "New York City skyline and busy streets in USA",
        description: "Walk through iconic avenues, towering skyscrapers, cultural districts, famous parks, and energetic urban landscapes.",
        videoId: "27Pv4Cg4EV4",
        start: 800
    },
    {
        city: "New Delhi",
        flag: "🇮🇳",
        image: "new-delhi.png",
        alt: "New Delhi street view virtual tour",
        description: "Experience historic monuments, government landmarks, vibrant markets, cultural diversity, wide avenues, and modern development.",
        videoId: "IiW8181-Dbo",
        start: 28
    },

    {
        city: "Naples",
        flag: "🇮🇹",
        image: "naples.png",
        alt: "Naples street view virtual tour",
        description: "Explore historic streets, coastal scenery, ancient heritage, authentic cuisine, and lively local culture.",
        videoId: "NON14NgRTC4",
        start: 81
    },
    {
        city: "Osaka",
        flag: "🇯🇵",
        image: "osaka.png",
        alt: "Osaka street view virtual tour",
        description: "Explore energetic streets, delicious food districts, modern attractions, historic landmarks, and welcoming local culture.",
        videoId: "xP-wJbQcMOc",
        start: 220
    },
    {
        city: "Paris",
        flag: "🇫🇷",
        image: "paris.png",
        alt: "Paris streets cafes and landmarks in France",
        description: "Discover elegant boulevards, iconic landmarks, romantic cafes, historic neighborhoods, artistic heritage, and timeless beauty.",
        videoId: "oz1Mgu8e1N4",
        start: 132
    },
    {
        city: "Prague",
        flag: "🇨🇿",
        image: "prague.png",
        alt: "Prague street view virtual tour",
        description: "Wander medieval streets, historic bridges, charming squares, Gothic architecture, and one of Europe’s most beautiful cities.",
        videoId: "VZrcZLJ0HUM",
        start: 84
    },
    {
        city: "Riyadh (Night)",
        flag: "🇸🇦",
        image: "riyad.png",
        alt: "Riyadh street view virtual tour",
        description: "Discover modern skyscrapers, historic landmarks, bustling boulevards, cultural attractions, desert surroundings, and Saudi Arabia's vibrant capital.",
        videoId: "UYhEAeRisuo",
        start: 8
    },
    {
        city: "Rome",
        flag: "🇮🇹",
        image: "rome.png",
        alt: "Rome ancient landmarks and historic streets in Italy",
        description: "Journey through ancient ruins, historic plazas, grand architecture, charming streets, and centuries of heritage.",
        videoId: "uOJkVLwnCNI",
        start: 303
    },
    {
        city: "Stockholm",
        flag: "🇸🇪",
        image: "stockholm.png",
        alt: "Sweden street view virtual tour",
        description: "Explore charming old towns, scenic waterfronts, modern architecture, beautiful forests, vibrant cities, and stunning Nordic landscapes.",
        videoId: "Ehi1Mz6ZVDc",
        start: 47
    },


    {
        city: "San Francisco",
        flag: "🇺🇸",
        image: "california.png",
        alt: "California scenic road trip and street view virtual tour",
        description: "Discover stunning coastlines, vibrant cities, scenic highways, iconic landmarks, beautiful beaches, and diverse landscapes.",
        videoId: "vdihtkpKoNc",
        start: 373
    },


    {
        city: "Singapore",
        flag: "🇸🇬",
        image: "singapore.png",
        alt: "Singapore modern city streets and skyline",
        description: "Enjoy spotless streets, futuristic gardens, multicultural districts, impressive architecture, and a stunning waterfront skyline.",
        videoId: "3MFlpVe93XU",
        start: 57
    },

    {
        city: "Seoul",
        flag: "🇰🇷",
        image: "seoul.png",
        alt: "Seoul street view virtual tour",
        description: "Enjoy futuristic skylines, traditional palaces, lively markets, trendy neighborhoods, technology hubs, and vibrant nightlife.",
        videoId: "unY9hqu9bEk",
        start: 10
    },

    {
        city: "Sydney",
        flag: "🇦🇺",
        image: "sydney.png",
        alt: "Sydney street view virtual tour",
        description: "Enjoy famous harbor views, beautiful beaches, iconic architecture, coastal walks, and vibrant urban experiences.",
        videoId: "MJQ6ZyBNtCk",
        start: 200
    },
    {
        city: "Shanghai",
        flag: "🇨🇳",
        image: "shanghai-day.png",
        alt: "Shanghai street view virtual tour",
        description: "Admire futuristic skylines, waterfront boulevards, modern architecture, luxury districts, and vibrant metropolitan energy.",
        videoId: "euvrgJKqrNc",
        start: 117
    },
    {
        city: "Shanghai (Night)",
        flag: "🇨🇳",
        image: "shanghai-night.png",
        alt: "Shanghai street view virtual tour",
        description: "Admire futuristic skylines, waterfront boulevards, modern architecture, luxury districts, and vibrant metropolitan energy.",
        videoId: "AVPThQc_z_4",
        start: 181
    },

    {
        city: "Tokyo",
        flag: "🇯🇵",
        image: "tokyo.png",
        alt: "Tokyo modern skyline and busy streets in Japan",
        description: "Experience futuristic skyscrapers, neon districts, traditional temples, bustling crossings, unique culture, and endless urban exploration.",
        videoId: "28ZjrtD_iL0",
        start: 380
    },
    {
        city: "Tehran",
        flag: "🇮🇷",
        image: "tehran.png",
        alt: "Tehran street view virtual tour",
        description: "Experience bustling avenues, mountain views, cultural museums, historic palaces, modern districts, and vibrant local life.",
        videoId: "wfmPGNfzm8g",
        start: 358
    },
    {
        city: "Toronto",
        flag: "🇨🇦",
        image: "toronto.png",
        alt: "Toronto street view virtual tour",
        description: "Experience iconic skylines, waterfront attractions, multicultural neighborhoods, bustling streets, and dynamic city life.",
        videoId: "Ex5_d0NyWO8",
        start: 247
    },

    {
        city: "Venice",
        flag: "🇮🇹",
        image: "venice.png",
        alt: "Venice street view virtual tour",
        description: "Wander through picturesque canals, charming bridges, historic architecture, hidden alleys, and unforgettable waterfront scenery.",
        videoId: "2BfHMnDOteA",
        start: 303
    },
   
   


    

    {
        city: "Vancouver",
        flag: "🇨🇦",
        image: "vancouver.png",
        alt: "Vancouver street view virtual tour",
        description: "Enjoy stunning mountain views, waterfront scenery, modern districts, green spaces, and outdoor adventures.",
        videoId: "n_nye25KIZg",
        start: 112
    },



   
   
   



];


const exploreAreaWalk = document.querySelector(".explore-area-content");

exploreAreaWalk.innerHTML = walks.map(walk => `
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

      <p>
        ${walk.description}
      </p>

      <a
        data-video="${walk.videoId}"
        data-start="${walk.start}"
        class="btn walk"
      >
        Begin Journey
      </a>
    </div>
  </div>
`).join("");


const container = document.querySelector(".sidebar .buttons");

container.innerHTML = walks.map(({ city, flag, videoId, start }) => `
    <button
        class="walk"
        data-video="${videoId}"
        data-start="${start}">
        ${city} ${flag}
    </button>
`).join("");