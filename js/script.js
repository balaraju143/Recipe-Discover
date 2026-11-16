
/* =====================================
   STACKLY MOBILE NAVBAR
===================================== */

const hamburgerMenu = document.getElementById("hamburgerMenu");

const navbarMenu = document.getElementById("navbarMenu");


// OPEN AND CLOSE MOBILE MENU

hamburgerMenu.addEventListener("click", () => {

    navbarMenu.classList.toggle("active");

    hamburgerMenu.classList.toggle("active");

    const isOpen = hamburgerMenu.classList.contains("active");

    hamburgerMenu.setAttribute("aria-expanded", isOpen);

    hamburgerMenu.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// CLOSE MENU WHEN CLICKING NAVIGATION LINKS

const navLinks = document.querySelectorAll(
    ".nav-link, .mobile-login-btn"
);

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbarMenu.classList.remove("active");

        hamburgerMenu.classList.remove("active");

        hamburgerMenu.setAttribute("aria-expanded", "false");

        hamburgerMenu.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {

    const clickedInsideNavbar = event.target.closest(".stackly-navbar");

    if (!clickedInsideNavbar) {

        navbarMenu.classList.remove("active");

        hamburgerMenu.classList.remove("active");

        hamburgerMenu.setAttribute("aria-expanded", "false");

        hamburgerMenu.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});
