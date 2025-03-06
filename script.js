document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".white-header");

    // ✅ Sticky Header on Scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // ✅ Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector("nav");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });
    }

    // ✅ Smooth Page Transitions
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            if (this.getAttribute("href") !== "#") {
                event.preventDefault(); 
                const href = this.getAttribute("href");
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href; 
                }, 300);
            }
        });
    });

    // ✅ Reviews Section Animation
    const reviews = document.querySelectorAll(".review-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            }
        });
    }, { threshold: 0.3 });

    reviews.forEach(review => {
        observer.observe(review);
    });

    // ✅ Service Carousels (Multiple)
    const carousels = document.querySelectorAll(".service-carousel");

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll("img");
        let currentIndex = 0;

        if (images.length < 2) return; // ✅ Prevents running on single-image carousels

        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }

        setInterval(showNextImage, 4000); // ✅ Slower transition every 4 sec
    });

    // ✅ Hero Section Carousel (About Page)
    const heroSlides = document.querySelectorAll(".carousel-slide");
    let heroIndex = 0;

    if (heroSlides.length > 1) {
        function showNextHeroSlide() {
            heroSlides[heroIndex].classList.remove("active");
            heroIndex = (heroIndex + 1) % heroSlides.length;
            heroSlides[heroIndex].classList.add("active");
        }

        setInterval(showNextHeroSlide, 5000); // ✅ Change hero image every 5 seconds
    }
});
