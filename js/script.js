document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("ham-nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("open"); // Toggles the X icon
        if (navMenu.classList.contains("active")) {
            document.body.style.overflow = "hidden"; // Lock scrolling
        } else {
            document.body.style.overflow = ""; // Unlock scrolling
        }
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("open");
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Reset to hamburger icon
            document.body.style.overflow = ""; // Unlock scrolling
        }
    });
});

