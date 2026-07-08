<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="./images/favicon.png" type="image/x-icon" />

    <title>Driving Tour</title>

    <?php include "./_head.php" ?>
  </head>
  <body>
  <?php $isDrive = true; ?>
   
  <?php include "./__header.php" ?>


    <!-- breadcrumb  -->
    <div class="breadcrumb">
      <div class="breadcrumb-content">
        <h1>Virtual Driving Tour</h1>
        <!-- <div class="box"></div> -->
        <p>Experience scenic roads, city drives, and destinations worldwide virtually.</p>
      </div>
    </div>

   
    <!-- explore  -->
    <div class="explore-area">
      <div class="explore-area-content">
        <!-- The Louvre -->
        <div class="explore-area__item">
          <div class="thumbnail">
            <img
              class="bg-img"
              src="./images/cities/the-louvre.png"
              alt="The Louvre museum virtual tour"
            />
          </div>
          <div class="text">
            <h3>🇫🇷 The Louvre</h3>
            <p>
              Explore world-famous art collections, magnificent galleries,
              historic architecture, cultural treasures, and timeless
              masterpieces.
            </p>
            <a data-video="y-1144Qq-Qc" data-start="160" class="btn walk"
              >Begin Journey <i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>

        <!-- New Delhi -->
        <div class="explore-area__item">
          <div class="thumbnail">
            <img
              class="bg-img"
              src="./images/cities/new-delhi.png"
              alt="New Delhi street view virtual tour"
            />
          </div>
          <div class="text">
            <h3>🇮🇳 New Delhi</h3>
            <p>
              Experience historic monuments, government landmarks, vibrant
              markets, cultural diversity, wide avenues, and modern development.
            </p>
            <a data-video="IiW8181-Dbo" data-start="28" class="btn walk"
              >Begin Journey <i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>


    <?php include("./__footer.php"); ?>
    
    <!-- Fullscreen Video Modal -->
    <div id="videoModal">
      <div class="video-wrapper">
        <iframe id="youtubeFrame" allow="autoplay" allowfullscreen> </iframe>
        <div class="video-overlay">
          <button id="backBtn">
            <img src="./images/icons/left-chevron.png" alt="" />
          </button>
          <div id="openMenu">
            <img src="./images/icons/more.png" alt="" />
          </div>
          <div class="sidebar">
            <div id="closeBar">
              <img src="./images/icons/red-cross.png" alt="" />
            </div>
            <div id="cityContainer">
                
            </div>
          </div>
        </div>

        <!-- Your custom back button -->
      </div>
    </div>

    <script src="./js/video.js"></script>
    <script src="./js/header.js"></script>
    <script src="./js/cities.js"></script>
  </body>
</html>
