<!DOCTYPE php>
<html lang="en">
  <head>

    <?php include("./_head.php") ?>
    <title>Virtual Street Tour</title>

    
  </head>
  <body>

    <?php $isHome = true; ?>
    
    <!-- header  -->
    <?php include("./__header.php") ?>

    <!-- hero  -->
    <?php include("./__hero.php") ?>

    <!-- explore  -->
    <div class="explore-area">
      <!-- <h2>Explore Virtually Spend Time</h2> -->
      <div class="explore-area-content">
        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/1.png" alt="" />
          </div>
          <div class="text">
            <h3>Walk Tour 🚶</h3>
            <p>
              Explore famous city streets, tourist attractions, local neighborhoods, and cultural landmarks through immersive virtual walking tours worldwide.
            </p>
            <a href="./walk.php" class="btn"
              >Explore Places 
            </a>
          </div>
        </div>

        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/2.png" alt="" />
          </div>
          <div class="text">
            <h3>Driving Tour 🚗</h3>
            <p>
              Experience scenic road trips, city drives, and popular travel destinations with inter virtual driving tours online.
            </p>
            <a href="./drive.php" class="btn"
              >Begin Journey
            </a>
          </div>
        </div>

        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/3.png" alt="" />
          </div>
          <div class="text">
            <h3>Flying Tour ✈️</h3>
            <p>
              Enjoy stunning aerial views of cities, landmarks, coastlines, and natural wonders through breathtaking virtual flight tours.
            </p>
            <a href="./fly.php" class="btn"
              >Begin Journey
            </a>
          </div>
        </div>

        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/4.png" alt="" />
          </div>
          <div class="text">
            <h3>Monument 🏛</h3>
            <p>
              Discover historic monuments, world-famous landmarks, heritage sites, and architectural masterpieces with virtual monument tours.
            </p>
            <a href="./monuments.php" class="btn"
              >Begin Journey 
            </a>
          </div>
        </div>

        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/5.png" alt="" />
          </div>
          <div class="text">
            <h3>Virtual Window 🏙️</h3>
            <p>
              Watch live city views, street scenes, and beautiful destinations worldwide through an inter virtual travel window.
            </p>
            <a href="./window.php" class="btn"
              >Begin Journey 
            </a>
          </div>
        </div>

        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/8.png" alt="" />
          </div>
          <div class="text">
            <h3>Travel Country 🌍</h3>
            <p>
              Explore countries, cultures, attractions, landscapes, and major cities with immersive virtual country tours from anywhere.
            </p>
            <a href="./countries.php" class="btn"
              >Begin Journey 
            </a>
          </div>
        </div>

        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/6.png" alt="" />
          </div>
          <div class="text">
            <h3>🔴 Live Footage</h3>
            <p>
              Watch real-world travel footage, city life, nature scenes, and popular destinations with authentic live video experiences.
            </p>
            <a href="./live.php" class="btn"
              >Begin Journey 
            </a>
          </div>
        </div>

        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/7.png" alt="" />
          </div>
          <div class="text">
            <h3>Travel Hub ✈️</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis nulla velit aliquam exercitationem voluptates numquam
              animi, tenetur optio harum possimus.
            </p>
            <a href="./" class="btn"
              >Begin Journey 
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- footer  -->
    <?php include("./__footer.php") ?>

     <!-- popup  -->
     <?php include("./__popup.php") ?>

    <script src="./js/header.js"></script>



  </body>
</html>
