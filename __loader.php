<div class="loader-container">
    <div class="loader">
        </div>
        <p class="loading-text">✨ Adventure is just a moment away...</p>
</div>

<script>
    const loadingMessages = [
        "🌎 Almost ready... Enjoy your adventure!",
        "🌍 Preparing your virtual journey...",
        "🚶 Loading famous city streets...",
        "🏛️ Finding iconic landmarks...",
        "🚗 Starting your virtual drive...",
        "✈️ Taking you around the world...",
        "🌆 Loading breathtaking destinations...",
        "🎥 Preparing real-world travel videos...",
    ];

    const loadingText = document.querySelector(".loading-text");
    let i = 0;

    setInterval(() => {
        loadingText.textContent = loadingMessages[i];
        i = (i + 1) % loadingMessages.length;
    }, 1500);

    window.addEventListener("load", () => {
        document.querySelector(".loader-container")?.classList.add("hide");
    });
</script>