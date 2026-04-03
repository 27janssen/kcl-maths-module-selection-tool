// Wait for EVERYTHING to load (HTML + CSS + Images + Fonts)
window.addEventListener('load', function() {
    console.log("✅ FULLY LOADED - Applying JS effects");
    
    // Smooth scrolling
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
    
    // Parallax effect
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        // Temple background (subtle background movement)
        const templeBg = document.querySelector('.temple-bg');
        if (templeBg) {
            templeBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Foreground dots (move opposite direction)
        const dots = document.querySelector('.parallax-dots');
        if (dots) {
            dots.style.transform = `translateY(${scrolled * -0.2}px)`;
        }
        
        ticking = false;
    }
    
    // Throttled scroll listener
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Initial position
    updateParallax();
    
    console.log("🎉 JS fully applied - Parallax + Smooth scroll active!");
});