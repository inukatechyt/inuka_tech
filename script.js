/* ==========================================
   INUKA TECH - PREMIUM "BEAST" ENGINE (VANILLA JS + GSAP)
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. DYNAMIC CANVAS BACKGROUND (Neural Network Effect) --- */
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: null, y: null, radius: 150 };

    window.addEventListener("mousemove", function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#ff1e1e'; // Accent color for particles
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

            // Mouse interaction
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
                if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
                if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function initCanvas() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 15000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 1) - 0.5;
            let directionY = (Math.random() * 1) - 0.5;
            let color = '#ffffff';
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animateCanvas() {
        requestAnimationFrame(animateCanvas);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connectParticles();
    }

    function connectParticles() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                               ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    window.addEventListener('resize', function() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        initCanvas();
    });

    initCanvas();
    animateCanvas();

    /* --- 2. TYPED.JS INTEGRATION --- */
    if (document.querySelector(".typing")) {
        new Typed(".typing", {
            strings: ["Web Experiences.", "Digital Identities.", "Software Solutions.", "The Future."],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            cursorChar: '|',
            autoInsertCss: true
        });
    }

    /* --- 3. GSAP ANIMATIONS (The Elite Touch) --- */
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Reveal
    gsap.from(".reveal-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2
    });

    gsap.from(".dynamic-role, .primary-btn", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
    });

    // Bento Grid Reveal on Scroll
    gsap.from(".bento-grid .glass-card", {
        scrollTrigger: {
            trigger: ".expertise-section",
            start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.2)"
    });

    // Contact Form Reveal
    gsap.from(".contact-info, .input-group, .outline-btn", {
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
    });

    /* --- 4. NAVBAR SCROLL EFFECT --- */
    const navbar = document.querySelector(".glass-nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 30px";
            navbar.style.background = "rgba(5, 5, 7, 0.85)";
            navbar.style.borderColor = "var(--accent-primary)";
        } else {
            navbar.style.padding = "15px 30px";
            navbar.style.background = "rgba(10, 10, 15, 0.6)";
            navbar.style.borderColor = "var(--glass-border)";
        }
    });

    /* --- 5. SECURITY / ANTI-INSPECT (Optional, kept from your original code) --- */
    document.addEventListener('contextmenu', function(e) {
        // e.preventDefault(); // Uncomment this line to actually block right-click
        // console.log("Right click disabled for security.");
    });

    document.onkeydown = function(e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
            // return false; // Uncomment to block F12 and DevTools shortcuts
        }
    }
});
