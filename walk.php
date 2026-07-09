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
      <iframe id="youtubeFrame" allow="autoplay" frameborder="0" allowfullscreen> </iframe>
      <div class="video-overlay">
        <button id="backBtn">
          <img src="./images/icons/left-chevron.png" alt="" />
        </button>
        <div id="openMenu">
          <img src="./images/icons/more.png" alt="" />
        </div>
        <div class="sidebar">
          <div id="closeBar">
            <img src="./images/icons/red-cross.png" alt="Sidebar Close Button" />
          </div>

          <div class="buttons">
            <button data-video="uL6z9v7Cf9Y" data-start="180" class="walk">Amsterdam 🇳🇱</button>
            <button data-video="cFaGGCdNNZ8" data-start="275" class="walk">Abu Dhabi 🇦🇪</button>
            <button data-video="L_6HtFWVV6o" data-start="200" class="walk">Bangkok 🇹🇭</button>
            <button data-video="Z8SuL0R8dGI" data-start="163" class="walk">Barcelona 🇪🇸</button>
            <button data-video="J-ogDAu_xzI" data-start="105" class="walk">Beijing 🇨🇳</button>
            <button data-video="1qitNAzhxQk" data-start="10" class="walk">Berlin 🇩🇪</button>
            <button data-video="2mGAKmK2zTk" data-start="171" class="walk">Cairo 🇪🇬</button>
            <button data-video="SQOsKedmgPw" data-start="215" class="walk">Capri 🇮🇹</button>
            <button data-video="GxI1q6a0r9Y" data-start="21" class="walk">Damascus 🇸🇾</button>
            <button data-video="I9XB1gHvF74" data-start="275" class="walk">Dubai 🇦🇪</button>
            <button data-video="Ok7p1aAKux8" data-start="94" class="walk">Golconda Fort 🇮🇳</button>
            <button data-video="Q0kEnjBcvDc" data-start="120" class="walk">Grindelwald 🇨🇭</button>
            <button data-video="xId3cHWsta4" data-start="227" class="walk">Hanoi 🇻🇳</button>
            <button data-video="g5PmuZWgA88" data-start="10" class="walk">Helsinki 🇫🇮</button>
            <button data-video="PaJAm6NI9Qc" data-start="20" class="walk">Hong Kong 🇭🇰</button>
            <button data-video="jSwhjaRho0c" data-start="5" class="walk">Istanbul 🇹🇷</button>
            <button data-video="hNkdZFzzvBg" data-start="12" class="walk">Jakarta 🇮🇩</button>
            <button data-video="sLwhC92mF2k" data-start="46" class="walk">Kuala Lumpur 🇲🇾</button>
            <button data-video="ZFZkXXf7QLc" data-start="90" class="walk">Lauterbrunnen 🇨🇭</button>
            <button data-video="VINOSu5y4ic" data-start="48" class="walk">Los Angeles 🇺🇸</button>
            <button data-video="yttFUAUdDf4" data-start="115" class="walk">London 🇬🇧</button>
            <button data-video="dJm43N7E_pA" data-start="2" class="walk">Manhattan (Times Square) 🇺🇸</button>
            <button data-video="Prz2VJOdtEE" data-start="40" class="walk">Melbourne 🇦🇺</button>
            <button data-video="fVh9YNTzhak" data-start="230" class="walk">Mexico City 🇲🇽</button>
            <button data-video="8FCkb7NZ7SI" data-start="65" class="walk">Milan 🇮🇹</button>
            <button data-video="UHuQ1jc_hB4" data-start="331" class="walk">Montreal 🇨🇦</button>
            <button data-video="CLfVNSqaoV4" data-start="100" class="walk">Moscow 🇷🇺</button>
            <button data-video="5GwI8sUcEp8" data-start="44" class="walk">Mumbai 🇮🇳</button>
            <button data-video="41FOuEwTJEQ" data-start="1692" class="walk">Mykonos 🇬🇷</button>
            <button data-video="NON14NgRTC4" data-start="81" class="walk">Naples 🇮🇹</button>
            <button data-video="IiW8181-Dbo" data-start="28" class="walk">New Delhi 🇮🇳</button>
            <button data-video="27Pv4Cg4EV4" data-start="800" class="walk">New York City 🇺🇸</button>
            <button data-video="xP-wJbQcMOc" data-start="220" class="walk">Osaka 🇯🇵</button>
            <button data-video="oz1Mgu8e1N4" data-start="132" class="walk">Paris 🇫🇷</button>
            <button data-video="VZrcZLJ0HUM" data-start="84" class="walk">Prague 🇨🇿</button>
            <button data-video="UYhEAeRisuo" data-start="8" class="walk">Riyadh 🇸🇦</button>
            <button data-video="uOJkVLwnCNI" data-start="303" class="walk">Rome 🇮🇹</button>
            <button data-video="vdihtkpKoNc" data-start="373" class="walk">San Francisco 🇺🇸</button>
            <button data-video="unY9hqu9bEk" data-start="10" class="walk">Seoul 🇰🇷</button>
            <button data-video="euvrgJKqrNc" data-start="117" class="walk">Shanghai 🇨🇳</button>
            <button data-video="AVPThQc_z_4" data-start="181" class="walk">Shanghai (Night) 🇨🇳</button>
            <button data-video="3MFlpVe93XU" data-start="57" class="walk">Singapore 🇸🇬</button>
            <button data-video="Ehi1Mz6ZVDc" data-start="47" class="walk">Stockholm 🇸🇪</button>
            <button data-video="MJQ6ZyBNtCk" data-start="200" class="walk">Sydney 🇦🇺</button>
            <button data-video="wfmPGNfzm8g" data-start="358" class="walk">Tehran 🇮🇷</button>
            <button data-video="28ZjrtD_iL0" data-start="380" class="walk">Tokyo 🇯🇵</button>
            <button data-video="Ex5_d0NyWO8" data-start="247" class="walk">Toronto 🇨🇦</button>
            <button data-video="n_nye25KIZg" data-start="112" class="walk">Vancouver 🇨🇦</button>
            <button data-video="2BfHMnDOteA" data-start="303" class="walk">Venice 🇮🇹</button>
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