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
    }

    // Smooth Page Transitions
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            if (this.getAttribute("href") !== "#") {
                event.preventDefault(); // Stop default navigation
                const href = this.getAttribute("href");
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = href; // Navigate after fade effect
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
            }
        });
    }, { threshold: 0.3 });

    reviews.forEach(review => {
        observer.observe(review);
    });
});
