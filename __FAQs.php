<section class="faq" id="faq">
    <div class="faq-content">

        <h2>Frequently Asked Questions</h2>
        <p>
            Find answers to common questions about Virtual Vacation Tour, virtual walking tours,
            scenic drives, and exploring famous destinations from home.
        </p>

        <div class="faq-item active">
            <button class="faq-question">
                What is Virtual Vacation Tour?
                <span>+</span>
            </button>
            <div class="faq-answer">
                <p>
                    Virtual Vacation Tour lets you explore famous cities, landmarks, scenic roads,
                    and tourist destinations worldwide through immersive walking, driving, and
                    virtual travel experiences from the comfort of your home.
                </p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">
                Is Virtual Vacation Tour free to use?
                <span>+</span>
            </button>
            <div class="faq-answer">
                <p>
                    Yes. You can explore a wide range of virtual walking tours, driving tours,
                    and landmark experiences for free without creating an account.
                </p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">
                Which cities can I explore?
                <span>+</span>
            </button>
            <div class="faq-answer">
                <p>
                    Explore popular destinations including Paris, London, Tokyo, Dubai, New York,
                    Santorini, Rome, Amsterdam, Chicago, Seoul, and many more cities from around
                    the world.
                </p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">
                What types of virtual tours are available?
                <span>+</span>
            </button>
            <div class="faq-answer">
                <p>
                    We offer virtual walking tours, scenic driving tours, flying tours, monument
                    tours, nature tours, beach tours, and other immersive travel experiences.
                </p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">
                Can I request a new city?
                <span>+</span>
            </button>
            <div class="faq-answer">
                <p>
                    Absolutely! Use the Request a City section to suggest destinations you'd like
                    to explore. We regularly review user suggestions and add new locations whenever
                    possible.
                </p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">
                Do I need to download any software?
                <span>+</span>
            </button>
            <div class="faq-answer">
                <p>
                    No downloads are required. Simply open Virtual Vacation Tour in your web browser
                    and start exploring instantly on desktop, tablet, or mobile devices.
                </p>
            </div>
        </div>

    </div>
</section>

<script>
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-question");
        btn.addEventListener("click", () => {
            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });
</script>