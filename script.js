// ===== AUTO-CLOSE MOBILE MENU ON LINK CLICK =====
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');
const navLinks = document.querySelectorAll('#navbarNav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function activateNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // Offset for fixed navbar
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`#navbarNav .nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to current section link
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Listen to scroll event
window.addEventListener('scroll', activateNavOnScroll);

// Activate on page load
window.addEventListener('load', activateNavOnScroll);

// ===== COUNTER ANIMATION =====
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            animateCounter(entry.target);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
});

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== COUNTER ANIMATION ===== 
// function animateCounters() {
//     const counters = document.querySelectorAll('.counter');
//     const speed = 200;
    
//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-target');
//             const currentCount = +counter.innerText;
//             const increment = target / speed;
            
//             if (currentCount < target) {
//                 counter.innerText = Math.ceil(currentCount + increment);
//                 setTimeout(updateCount, 30);
//             } else {
//                 counter.innerText = target;
//             }
//         };
//         updateCount();
//     });
// }

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
//             entry.target.classList.add('counted');
//             animateCounters();
//             observer.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.5 });

// const heroSection = document.querySelector('.hero');
// if (heroSection) observer.observe(heroSection);

// ===== INFINITE BRANDS SLIDER =====
const slider = document.querySelector('.brands-slider');
if (slider) {
    const slides = slider.querySelectorAll('.brand-slide');
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!contactForm.checkValidity()) {
            contactForm.classList.add('was-validated');
            return;
        }
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
        
        const whatsappMessage = `*New Contact Request from Sree Kumar Website*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Message:* ${encodeURIComponent(message)}`;
        const whatsappURL = `https://wa.me/919100071866?text=${whatsappMessage}`;
        
        window.open(whatsappURL, '_blank');
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        alert('Thank you! Redirecting to WhatsApp.');
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// ===== BACK TO TOP =====
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('show', window.pageYOffset > 300);
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
