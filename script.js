// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
});

// Simple Testimonial Slider
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
    testimonials.forEach((t, i) => {
        t.style.display = i === index ? "block" : "none";
    });
    index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 3000);
showTestimonial();
