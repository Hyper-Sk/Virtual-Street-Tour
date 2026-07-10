<div class="loader-container">
    <p class="loading-text">✨ Adventure is just a moment away...</p>
    <div class="loader">
    </div>
</div>

<script>
    const loadingMessages = [
        "🌍 Preparing your virtual journey...",
        "🚶 Loading famous city streets...",
        "🏛️ Finding iconic landmarks...",
        "🚗 Starting your virtual drive...",
        "✈️ Taking you around the world...",
        "🌆 Loading breathtaking destinations...",
        "🎥 Preparing real-world travel videos...",
        "🌎 Almost ready... Enjoy your adventure!"
    ];

    const loadingText = document.querySelector(".loading-text");
    let i = 0;

    setInterval(() => {
        loadingText.textContent = loadingMessages[i];
        i = (i + 1) % loadingMessages.length;
    }, 3000);
    window.addEventListener("load", () => {
        document.querySelector(".loader-container")?.classList.add("hide");
    });
</script>