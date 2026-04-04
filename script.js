window.addEventListener('load', function () {
    console.log("✅ FULLY LOADED - Applying JS effects");

    // ── Smooth scrolling ──────────────────────────────────────────────────
    document.querySelectorAll('nav a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── Parallax ──────────────────────────────────────────────────────────
    //
    // IMPORTANT: We must NOT use CSS transform on position:fixed elements.
    // Applying transform to a fixed element breaks its fixed positioning
    // (it creates a new stacking/containing block) — this is a known browser
    // quirk and is why the parallax looked wrong on GitHub Pages.
    //
    // Instead we move the temple-bg with translateY (it is fixed but its
    // visual shift is purely cosmetic) and we animate the dots container by
    // nudging a CSS variable that shifts the pseudo-elements inside it,
    // keeping the container itself un-transformed.

    var templeBg = document.querySelector('.temple-bg');
    var dotContainer = document.querySelector('.parallax-dots');
    var ticking = false;

    function updateParallax() {
        var scrolled = window.pageYOffset;

        // Subtle upward drift on the background
        if (templeBg) {
            templeBg.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
        }

        // Shift the orbs by moving their shared top offset via a CSS variable.
        // The container stays un-transformed so fixed positioning is preserved.
        if (dotContainer) {
            dotContainer.style.setProperty('--parallax-offset', (scrolled * -0.15) + 'px');
        }

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    updateParallax();
    console.log("🎉 JS fully applied - Parallax + Smooth scroll active!");
});
