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

// Parallax effect for FOREGROUND DOTS - z-index: 10
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    
    // Temple background parallax (background layer)
    const templeBg = document.querySelector('.temple-bg');
    if (templeBg) {
        templeBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Foreground dots parallax (z-index 10 - IN FRONT)
    const dots = document.querySelector('.parallax-dots');
    if (dots) {
        dots.style.transform = `translateY(${scrolled * -0.2}px) scale(1.05)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Initial render
window.addEventListener('load', updateParallax);