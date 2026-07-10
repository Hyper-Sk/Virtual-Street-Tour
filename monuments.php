<!DOCTYPE html>
<html lang="en">

<head>

  <?php include "./_head.php" ?>
  <title>Monuments Street Tour</title>

</head>

<body>
  <?php $isMonuments = true; ?>
  <!-- header  -->
  <?php include "./__header.php" ?>


  <div class="breadcrumb">
    <div class="breadcrumb-content">
      <h1>Virtual Monument Tour </h1>
      <!-- <div class="box"></div> -->
      <p>Visit historic monuments, iconic landmarks, and cultural heritage sites.</p>
    </div>
  </div>

  <!-- explore  -->
  <div class="explore-area">
    <div class="explore-area-content">


     

    </div>
  </div>

  <!-- footer  -->
  <?php include "./__footer.php" ?>



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

  <script src="./js/monuments.js"></script>
  <script src="./js/video.js"></script>
  <script src="./js/header.js"></script>
</body>

</html>