// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for temple background
    const parallax = document.querySelector('.temple-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});