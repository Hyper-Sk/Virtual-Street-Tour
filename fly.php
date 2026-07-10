<!doctype html>
<html lang="en">

<head>
  <title>Vitual Flying Tour</title>

  <?php include("./_head.php"); ?>

</head>

<body>
  <?php $isFly = true; ?>
  <!-- header  -->
  <?php include("./__header.php"); ?>


  <!-- breadcrumb  -->
  <div class="breadcrumb">
    <div class="breadcrumb-content">
      <h1>Virtual Flying Tour </h1>
      <!-- <div class="box"></div> -->
      <p>Discover breathtaking aerial views, cities, landmarks, and landscapes worldwide.</p>
    </div>
  </div>

  <!-- explore  -->
  <div class="explore-area">
    <div class="explore-area-content">
        <!-- js code coming  -->
    </div>
  </div>

  <!-- footer  -->
  <?php include("./__footer.php"); ?>





  <!-- Fullscreen Video Modal -->
  <div id="videoModal">
    <div class="video-wrapper">
      <iframe id="youtubeFrame" allow="autoplay" allowfullscreen> </iframe>
      <div class="video-overlay">

        <!-- close or go back button  -->
        <button id="backBtn">
          <img src="./images/icons/left-chevron.png" alt="" />
        </button>

        <!-- full screen btn  -->
        <div id="fullscreenBtn" onclick="openFullscreen()" >
          <img src="./images/icons/fullscreen.png" alt="">
        </div>

        <!-- open sidebar btn  -->
        <div id="openMenu">
          <img src="./images/icons/more.png" alt="" />
        </div>

        <!-- sidebar  -->
        <div class="sidebar">
          <div id="closeBar">
            <img src="./images/icons/red-cross.png" alt="" />
          </div>
          <div class="buttons">
            <!-- js code coming    -->
          </div>

        </div>
      </div>

      <!-- Your custom back button -->
    </div>
  </div>


  <script src="./js/header.js"></script>
  <script src="./js/fly.js"></script>
  <script src="./js/video.js"></script>
</body>

</html>