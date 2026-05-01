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

    // Project details overflow toggle logic
    const detailWrappers = document.querySelectorAll('.project-details-wrapper');
    detailWrappers.forEach(wrapper => {
        // Wait for CSS to apply layout
        setTimeout(() => {
            if (wrapper.scrollHeight > wrapper.clientHeight + 10) {
                const btn = document.createElement('button');
                btn.className = 'dropdown-toggle-btn';
                btn.innerHTML = 'View Project Details <i class="fa-solid fa-chevron-down"></i>';
                
                btn.onclick = () => {
                    wrapper.classList.toggle('expanded');
                    btn.classList.toggle('expanded');
                    if (wrapper.classList.contains('expanded')) {
                        btn.innerHTML = 'Collapse Project Details <i class="fa-solid fa-chevron-down"></i>';
                    } else {
                        btn.innerHTML = 'View Project Details <i class="fa-solid fa-chevron-down"></i>';
                    }
                };
                
                // Insert button right after the wrapper
                wrapper.parentNode.insertBefore(btn, wrapper.nextSibling);
            } else {
                wrapper.classList.add('no-overflow');
            }
        }, 200);
    });
});
