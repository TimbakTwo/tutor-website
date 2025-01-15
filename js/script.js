// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');

    const mobileMenuItems = document.querySelector('.navbar .mobile-menu-items');

    toggleButton.addEventListener('click', function() {
    mobileMenuItems.classList.toggle('active');
});
})

// Change navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
})

