<!doctype html>
<html lang="en">

<head>

  <?php include("./_head.php"); ?>
  <title>Walking Street Tour</title>


</head>

<body>
  <?php $isWalk= true; ?>

  <!-- header  -->
  <?php include("./__loader.php"); ?>

  <!-- header  -->
  <?php include("./__header.php"); ?>


  <div class="breadcrumb">
    <div class="breadcrumb-content">
      <h1>Virtual Walking Tour</h1>
      <!-- <div class="box"></div> -->
      <p>Explore famous cities, landmarks, attractions, and streets worldwide virtually.</p>
    </div>
  </div>

  <!-- explore  -->
  <div class="explore-area">
    <div class="explore-area-content">
      <!-- - js code coming - -->
    </div>
  </div>


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
        <div id="fullscreenBtn" onclick="openFullscreen()">
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

  <?php include "./__footer.php" ?>

  <?php include "./__popup.php" ?>

  <script src="./js/walk.js"></script>
  <script src="./js/cities.js"></script>
  <script src="./js/header.js"></script>
  <script src="./js/video.js"></script>
</body>

</html>