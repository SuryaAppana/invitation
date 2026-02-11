document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation (Initial Load)
    const tl = gsap.timeline();
    tl.from('.hero-img', {
        scale: 1.2,
        duration: 2,
        ease: "power2.out"
    })
        .to('.hero-content', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2
        }, "-=1.5");


    // Story Section Parallax & Fade
    gsap.from('.story-content', {
        scrollTrigger: {
            trigger: '.story',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from('.blend-image-right', {
        scrollTrigger: {
            trigger: '.story',
            start: "top 70%",
            scrub: 1 // Smooth scrubbing effect
        },
        y: 100, // Move slightly as you scroll
        opacity: 0.8,
    });

    // Quote Parallax Background (Enhanced for Dynamic Movement)
    gsap.to('.quote-bg img', {
        scrollTrigger: {
            trigger: '.quote-section',
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5 // Slower scrub for smoother feel
        },
        y: '30%', // Increased movement
        scale: 1.1, // Slight zoom effect
        transformOrigin: "center center",
        ease: "none"
    });

    gsap.from('.quote-text blockquote', {
        scrollTrigger: {
            trigger: '.quote-section',
            start: "top 70%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
    });


    // Details Cards Stagger
    gsap.from('.detail-card', {
        scrollTrigger: {
            trigger: '.details',
            start: "top 75%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // Gallery Fade In (Updated for Swiper)
    gsap.from('.gallery-preview h2', {
        scrollTrigger: {
            trigger: '.gallery-preview',
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 1
    });

    gsap.from('.swiper', {
        scrollTrigger: {
            trigger: '.gallery-preview',
            start: "top 70%"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });

    // Swiper Initialization
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true, // Infinite Loop
        speed: 800, // Smoother/Faster transition
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1500, // Faster autoplay
            disableOnInteraction: false,
        },
        breakpoints: {
            // Mobile adjustments
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 30
            },
            768: {
                slidesPerView: "auto"
            }
        }
    });

    // GLightbox Initialization
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });

    // Mouse Move Parallax for Hero
    const heroSection = document.querySelector('.hero');
    const heroImg = document.querySelector('.hero-img');

    heroSection.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        heroImg.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.1)`; // Scale keeps edges covered
    });

    // Reset on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        heroImg.style.transform = `translateX(0) translateY(0) scale(1)`;
    });

});
