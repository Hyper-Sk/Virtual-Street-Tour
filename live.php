<!doctype html>
<html lang="en">
  <head>
  <title>Vitual Flying Tour</title>

  <?php include("./_head.php"); ?>

  </head>
  <body>
  <?php $isLive = true; ?>
    <!-- header  -->
    <?php include("./__header.php"); ?>


    <!-- breadcrumb  -->
    <div class="breadcrumb">
      <div class="breadcrumb-content">
        <h1>Live Footages 🔴</h1>
        <!-- <div class="box"></div> -->
        <p>Discover breathtaking aerial views, cities, landmarks, and landscapes worldwide.</p>
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

      
      </div>
    </div>

    <!-- footer  -->
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
            <button>New York 🇺🇸</button>
            <button>Jersey 🇺🇸</button>
            <button>Greece 🇺🇸</button>
            <button>California 🇺🇸</button>
            <button>Miami 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
            <button>New York 🇺🇸</button>
          </div>
        </div>

        <!-- Your custom back button -->
      </div>
    </div>

    <script src="./js/video.js"></script>
    <script src="./js/header.js"></script>
  </body>
</html>
