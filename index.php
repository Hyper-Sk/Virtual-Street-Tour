<!DOCTYPE php>
<html lang="en">

<head>

  <?php include("./_head.php") ?>

  <title>Virtual Street Tour - Explore Famous Cities & Landmarks from Home</title>

  <meta 
  name="description" 
  content="Explore the world from home with Virtual Walking Tour. Walk through famous cities, drive scenic roads, visit iconic landmarks, and enjoy immersive virtual travel experiences."
  >

</head>

<body>
  <!-- Loader  -->
  <?php include("./__loader.php") ?>

  <?php $isHome = true; ?>

  <!-- header  -->
  <?php include("./__header.php") ?>

  <!-- hero  -->
  <?php include("./__hero.php") ?>

  <!-- explore  -->
  <div class="explore-area" id="godown">
    <!-- <h2>Explore Virtually Spend Time</h2> -->
    <div class="explore-area-content">

      <!-- Walk Tour -->
      <div class="explore-area__item">
        <div class="thumbnail">
          <img class="bg-img" src="./images/thumbnails/1.png"
            alt="Virtual walking tour through famous city streets and iconic landmarks worldwide" />
        </div>
        <div class="text">
          <h3>Walk Tour 🚶</h3>
          <p>
            Explore 100+ cities worldwide through immersive virtual walking tours from home.
          </p>
          <a href="./walk.php" class="btn">Walk</a>
        </div>
      </div>

      <!-- Driving Tour -->
      <div class="explore-area__item">
        <div class="thumbnail">
          <img class="bg-img" src="./images/thumbnails/2.png"
            alt="Virtual driving tour featuring scenic roads, city drives, and famous travel destinations" />
        </div>
        <div class="text">
          <h3>Driving Tour 🚗</h3>
          <p>
            Explore 50+ scenic drives, road trips, and iconic destinations from your home.
          </p>
          <a href="./drive.php" class="btn">Drive</a>
        </div>
      </div>

      <!-- Flying Tour -->
      <div class="explore-area__item">
        <div class="thumbnail">
          <img class="bg-img" src="./images/thumbnails/3.png"
            alt="Virtual flight tour with aerial views of cities, landmarks, coastlines, and natural wonders" />
        </div>
        <div class="text">
          <h3>Flying Tour ✈️</h3>
          <p>
            Fly above 30+ cities and famous landmarks with immersive virtual flight tours.
          </p>
          <a href="./fly.php" class="btn">Fly</a>
        </div>
      </div>

      <!-- Monument Tour -->
      <div class="explore-area__item">
        <div class="thumbnail">
          <img class="bg-img" src="./images/thumbnails/4.png"
            alt="Virtual monument tour showcasing historic landmarks, heritage sites, and famous monuments" />
        </div>
        <div class="text">
          <h3>Monument 🏛</h3>
          <p>
            Explore 20+ iconic monuments, heritage sites, and famous landmarks with virtual monument tours.
          </p>
          <a href="./monuments.php" class="btn">Explore</a>
        </div>
      </div>

      <!-- Market Tours -->
      <div class="explore-area__item">
        <div class="thumbnail">
          <img class="bg-img" src="./images/thumbnails/market.png"
            alt="Virtual market tour through colorful bazaars, local markets, shopping streets, and street food" />
        </div>
        <div class="text">
          <h3>Market Tours 🍜</h3>
          <p>
            Walk through colorful markets, traditional bazaars, and lively shopping streets virtually worldwide.
          </p>
          <a class="btn">Coming Soon</a>
        </div>
      </div>

      <!-- Travel Country -->
      <div class="explore-area__item">
        <div class="thumbnail">
          <img class="bg-img" src="./images/thumbnails/8.png"
            alt="Virtual country tours exploring famous destinations, cultures, landscapes, and landmarks worldwide" />
        </div>
        <div class="text">
          <h3>Travel Country 🌍</h3>
          <p>
            Visit 100+ countries, famous landmarks, and hidden gems without leaving home.
          </p>
          <a href="./countries.php" class="btn">Coming Soon</a>
        </div>
      </div>

      <!-- Live Footage -->
      <div class="explore-area__item">
        <div class="thumbnail">
          <img class="bg-img" src="./images/thumbnails/6.png"
            alt="Live travel footage featuring real city streets, landmarks, nature, and destinations worldwide" />
        </div>
        <div class="text">
          <h3>Live Footage 🔴</h3>
          <p>
            Watch real-world travel videos featuring cities, landmarks, nature, worldwide live.
          </p>
          <a href="./live.php" class="btn">Coming Soon</a>
        </div>
      </div>

    </div>
  </div>

   <!-- hero  -->
   <?php include("./__request.php") ?>

  <!-- footer  -->
  <?php include("./__footer.php") ?>

  <!-- popup  -->
  <?php //include("./__popup.php") ?>

  <script src="./js/header.js"></script>

</body>

</html>