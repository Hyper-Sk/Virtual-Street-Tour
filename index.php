<!DOCTYPE php>
<html lang="en">
  <head>

    <?php include("./_head.php") ?>
    <title>Virtual Street Tour</title>

    
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
        <div class="explore-area__item">
          <div class="thumbnail">
            <img class="bg-img" src="./images/thumbnails/1.png" alt="" />
          </div>
          <div class="text">
            <h3>Walk Tour 🚶</h3>
            <p>
            Explore 100+ cities worldwide through immersive virtual walking tours from home.
            </p>
            <a href="./walk.php" class="btn"
              >Walk  
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
            Explore 50+ scenic drives, road trips, and iconic destinations from your home.
            </p>
            <a href="./drive.php" class="btn"
              >Drive  
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
            Fly above 50+ cities and famous landmarks with immersive virtual flight tours.
            </p>
            <a href="./fly.php" class="btn"
              >Fly  
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
            Explore 30+ iconic monuments, heritage sites, and famous landmarks with virtual monument tours.
            </p>
            <a href="./monuments.php" class="btn"
              >Explore  
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
            Watch live city views and street views worldwide from your home.

            </p>
            <a href="./window.php" class="btn"
              >Explore 
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
            Visit 100+ countries, famous landmarks, and hidden gems without leaving home.
            </p>
            <a href="./countries.php" class="btn"
              >Explore 
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
            Watch real-world travel videos featuring cities, landmarks, nature, worldwide live.
            </p>
            <a href="./live.php" class="btn"
              >Explore 
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
            <a  class="btn"
              >comming soon 
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
