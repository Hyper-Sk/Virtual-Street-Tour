<div id="rotateBanner" class="rotate-banner">
    <span>🔄 Rotate your phone for a better view.</span>
    <button id="closeRotateBanner" aria-label="Close">&times;</button>
</div>
<script>
document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("rotateBanner");
    const closeBtn = document.getElementById("closeRotateBanner");

    if (!banner) return;

    let dismissed = false;

    function isPortrait() {
        return window.matchMedia("(orientation: portrait)").matches;
    }

    function updateBanner() {
        if (dismissed) return;

        if (isPortrait()) {
            banner.classList.add("show");
        } else {
            banner.classList.remove("show");
        }
    }

    updateBanner();

    window.addEventListener("resize", updateBanner);
    window.addEventListener("orientationchange", updateBanner);

    closeBtn.addEventListener("click", function () {
        dismissed = true;
        banner.classList.remove("show");
    });

});
</script>