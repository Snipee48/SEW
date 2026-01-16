// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ========== Navigation ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ========== Image Slider ==========
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('indicators');

    let currentSlide = 0;
    let slideInterval;

    // Create indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    // Show specific slide
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Auto slide
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Event listeners for slider controls
    nextBtn.addEventListener('click', function() {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    prevBtn.addEventListener('click', function() {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    // Pause on hover
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    // Start slideshow
    startSlideShow();

    // ========== Scroll to Top Button ==========
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========== Smooth Scroll for Navigation Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Contact Form ==========
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value
        };

        // Create mailto link
        const mailtoLink = `mailto:info@sewelectrical.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n\n` +
            `Message:\n${formData.message}`
        )}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        showSuccessMessage(contactForm, 'Thank you! Your message has been prepared. Please send it from your email client.');

        // Reset form
        contactForm.reset();
    });

    // ========== Quotation Form ==========
    const quotationForm = document.getElementById('quotationForm');

    quotationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('quoteName').value,
            email: document.getElementById('quoteEmail').value,
            phone: document.getElementById('quotePhone').value,
            company: document.getElementById('quoteCompany').value,
            service: document.getElementById('quoteService').value,
            location: document.getElementById('quoteLocation').value,
            details: document.getElementById('quoteDetails').value
        };

        // Get service name
        const serviceSelect = document.getElementById('quoteService');
        const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;

        // Create mailto link for quotation
        const mailtoLink = `mailto:sales@sewelectrical.com?subject=${encodeURIComponent('Quotation Request - ' + serviceName)}&body=${encodeURIComponent(
            `QUOTATION REQUEST\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Company/Organization: ${formData.company || 'N/A'}\n` +
            `Service Required: ${serviceName}\n` +
            `Project Location: ${formData.location}\n\n` +
            `Project Details:\n${formData.details}\n\n` +
            `Please provide a detailed quotation for the above requirements.\n\n` +
            `Thank you!`
        )}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        showSuccessMessage(quotationForm, 'Thank you! Your quotation request has been prepared. Please send it from your email client.');

        // Reset form
        quotationForm.reset();
    });

    // ========== Success Message Helper ==========
    function showSuccessMessage(form, message) {
        // Remove existing success message if any
        const existingMsg = form.querySelector('.success-message');
        if (existingMsg) {
            existingMsg.remove();
        }

        // Create and show new success message
        const successMsg = document.createElement('div');
        successMsg.classList.add('success-message', 'show');
        successMsg.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        form.insertBefore(successMsg, form.firstChild);

        // Remove message after 5 seconds
        setTimeout(() => {
            successMsg.classList.remove('show');
            setTimeout(() => successMsg.remove(), 500);
        }, 5000);
    }

    // ========== Intersection Observer for Animations ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards, project cards, and stat cards
    document.querySelectorAll('.service-card, .project-card, .stat-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // ========== Form Validation Enhancement ==========
    const inputs = document.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }
        });

        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = '#10b981';
            }
        });
    });

    // Email validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#ef4444';
            }
        });
    });

    // Phone validation (basic)
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9+\s-]/g, '');
        });
    });

    // ========== Active Section Highlighting in Navigation ==========
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ========== Console Welcome Message ==========
    console.log('%c Welcome to SEW - Sivasankar Electrical Works ', 'background: #1e3a8a; color: #fbbf24; font-size: 16px; padding: 10px;');
    console.log('%c Your trusted partner for Cold Storage & AC Solutions ', 'color: #374151; font-size: 12px;');
});

// ========== Prevent Form Resubmission on Page Refresh ==========
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
