document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".white-header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector("nav");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function(event) {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                mobileMenu.classList.remove("active");
            }
        });
    }

    // Smooth Page Transitions (Internal Links Only)
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const href = this.getAttribute("href");

            // Prevent fade for external links and anchors
            if (!href.startsWith("#") && href.startsWith(window.location.origin)) {
                event.preventDefault();
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    // Reviews Section Animation
    const reviews = document.querySelectorAll(".review-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
                observer.unobserve(entry.target); // Ensures animation runs only once
            }
        });
    }, { threshold: 0.3 });

    reviews.forEach(review => {
        observer.observe(review);
    });

    // Service Carousel
    const carousels = document.querySelectorAll(".service-carousel");
    const intervals = [];

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll("img");
        let currentIndex = 0;

        if (images.length < 2) return;

        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }

        const interval = setInterval(showNextImage, 4000);
        intervals.push(interval);
    });

    // Clear intervals on page unload
    window.addEventListener("beforeunload", () => {
        intervals.forEach(clearInterval);
    });
});
