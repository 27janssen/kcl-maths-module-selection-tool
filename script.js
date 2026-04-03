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

// Parallax effect for temple background - EXACTLY like original
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.temple-bg');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Ensure it runs on load too (for GitHub Pages)
window.addEventListener('load', updateParallax);