window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");

    // Add the 'scrolled-nav' class when the user scrolls down 100 pixels or more
    if (window.scrollY >= 100) {
        nav.classList.add("scrolled-nav");
    } else {
        // Remove the 'scrolled-nav' class when the user scrolls back to the top
        nav.classList.remove("scrolled-nav");
    }
});