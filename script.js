document.addEventListener("DOMContentLoaded", function () {
    const testimonialContainer = document.querySelector(".testimonial-container");
    const testimonials = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonialContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(index);
    });

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % totalTestimonials;
        showTestimonial(index);
    });

    setInterval(() => {
        index = (index + 1) % totalTestimonials;
        showTestimonial(index);
    }, 5000); // Auto-slide every 5 seconds
});
