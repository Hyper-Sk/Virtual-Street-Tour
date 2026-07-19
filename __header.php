<header class="header">
      <div class="header-content">
        <div class="logo">
          <a href="./" class="text">Virtual Vacation Tour 📍</a>
          <!-- <img src="./images/logo-2.png" alt="" /> -->
        </div>
        <div class="menu">
          <div class="menu__link">
            <a href="./" class="<?php if($isHome) echo 'active'; ?>">Home</a>
          </div>
          <div class="menu__link">
            <a href="./walk.php" class="<?php if($isWalk) echo 'active'; ?>" >Walk </i
            ></a>
          </div>
          <div class="menu__link">
            <a href="./drive.php" class="<?php if($isDrive) echo 'active'; ?>">Drive </a>
          </div>
          <div class="menu__link">
            <a href="./fly.php" class="<?php if($isFly) echo 'active'; ?>">Fly </a>
          </div>
          <div class="menu__link">
            <a href="./monuments.php" class="<?php if($isMonuments) echo 'active'; ?>">Monuments </a>
          </div>
        </div>
      </div>

      <div class="header-mobile">
        <div class="logo">
            <a href="./">Virtual Vacation Tour 📍</a>
        </div>
        <div class="open">
            <i class="uil uil-bars"></i>
        </div>
      </div>

      <aside class="aside">
        <div class="close">
          <i class="uil uil-times"></i>
        </div>
        <div class="menu">
          <a href="./" class="link <?php if($isHome) echo 'active'; ?>">Home</a>
          <a href="./walk.php" class="link <?php if($isWalk) echo 'active'; ?>">Virtual Walking Tour </a>
          <a href="./drive.php" class="link <?php if($isDrive) echo 'active'; ?>">Virtual Driving Tour</a>
          <a href="./fly.php" class="link <?php if($isFly) echo 'active'; ?>">Virtual Flying</a>
          <a href="./monuments.php" class="link <?php if($isMonuments) echo 'active'; ?>">Virtual Monuments Tour</a>
          <a href="./market.php" class="link <?php if($isMarket) echo 'active'; ?>">Virtual Market Tour</a>
          <a href="./about.php" class="link <?php if($isAbout) echo 'active'; ?>">About Us</a>
          <a href="./mission.php" class="link <?php if($isMission) echo 'active'; ?>">Our Mission</a>
        </div>
      </aside>
    </header>
