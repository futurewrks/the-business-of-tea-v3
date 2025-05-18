// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Form Submission Handling for Lead Magnet
    const form = document.querySelector('.lead-magnet form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (email) {
                // Simulate API call or form submission
                console.log('Email submitted:', email);
                alert('Thank you for subscribing! Check your email for the 2025 Tea Co-Packer Directory.');
                emailInput.value = ''; // Clear input
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dynamic CTA Hover Effects
    const ctas = document.querySelectorAll('.primary-cta, .secondary-cta');
    ctas.forEach(cta => {
        cta.addEventListener('mouseenter', () => {
            cta.style.transform = 'scale(1.05)'; // Slight scale-up effect
            cta.style.transition = 'transform 0.2s ease';
        });
        cta.addEventListener('mouseleave', () => {
            cta.style.transform = 'scale(1)'; // Reset scale
        });

        // Track CTA clicks (for analytics)
        cta.addEventListener('click', () => {
            const ctaText = cta.textContent;
            console.log(`CTA clicked: ${ctaText}`);
            // Replace with real analytics (e.g., Google Analytics)
            // gtag('event', 'click', { 'event_category': 'CTA', 'event_label': ctaText });
        });
    });

    // Responsive Image Loading for Hero Background
    const heroImage = document.querySelector('.hero-bg img');
    if (heroImage) {
        const loadResponsiveImage = () => {
            const isMobile = window.innerWidth <= 768;
            const imageSrc = isMobile ? 'tea-business-bg-mobile.png' : 'tea-business-bg.png';
            heroImage.src = imageSrc;
            heroImage.alt = 'Tea Business Illustration';
        };

        // Load initial image
        loadResponsiveImage();

        // Update image on window resize
        window.addEventListener('resize', loadResponsiveImage);
    }
});
