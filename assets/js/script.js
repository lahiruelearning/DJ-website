// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const menuLinks = menu ? menu.querySelectorAll('a') : [];

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-darker/95', 'backdrop-blur-md', 'border-b', 'border-gray-800');
            navbar.classList.remove('bg-transparent', 'py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-darker/95', 'backdrop-blur-md', 'border-b', 'border-gray-800', 'py-2');
            navbar.classList.add('bg-transparent', 'py-4');
        }
    }
});

// Smooth fade in for elements on load
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.animate-fade-in-up');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});

// About section image slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#about-slider img');
    if (slides.length > 0) {
        let currentSlide = 0;

        setInterval(() => {
            // Hide current slide
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0');

            // Move to next slide
            currentSlide = (currentSlide + 1) % slides.length;

            // Show next slide
            slides[currentSlide].classList.remove('opacity-0');
            slides[currentSlide].classList.add('opacity-100');
        }, 3000); // changes every 3 seconds
    }
});
