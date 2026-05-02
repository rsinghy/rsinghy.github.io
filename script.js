document.addEventListener('DOMContentLoaded', () => {
    
    // Trigger hero animations on load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-content .slide-up');
        heroElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    // Setup Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it has become visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const fadeElements = document.querySelectorAll('.fade-in, .slide-up:not(.hero-content .slide-up)');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Project details expansion
    const expandBtns = document.querySelectorAll('.expand-btn');
    expandBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const wrapper = btn.closest('.project-details-wrapper');
            const content = wrapper.querySelector('.project-details-content');
            
            const isExpanded = content.classList.toggle('expanded');
            btn.classList.toggle('expanded');
            
            if (isExpanded) {
                btn.innerHTML = 'Read Less <i class="fa-solid fa-chevron-up"></i>';
            } else {
                btn.innerHTML = 'Read More <i class="fa-solid fa-chevron-down"></i>';
            }
        });
    });

});
