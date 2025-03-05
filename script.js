document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".animated-header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector("#mobile-menu");

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
});
