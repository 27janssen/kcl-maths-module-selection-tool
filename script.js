console.log("Script loaded!"); // ← PROOF it runs

// Smooth scrolling - TEST: Click nav links
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded!"); // ← PROOF it works
    
    // Smooth scrolling
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Smooth scroll clicked!"); // ← PROOF
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax - TEST: Scroll down
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const templeBg = document.querySelector('.temple-bg');
        const dots = document.querySelector('.parallax-dots');
        
        if (templeBg) {
            templeBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        if (dots) {
            dots.style.transform = `translateY(${scrolled * -0.2}px)`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    console.log("Parallax initialized!"); // ← FINAL PROOF
});