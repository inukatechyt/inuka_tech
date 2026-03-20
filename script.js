document.addEventListener("DOMContentLoaded", () => {
    // 1. FAST PRELOADER
    new Typed("#boot-text", {
        strings: ["> BOOTING INUKA_OS...<br>> ARCHITECT AI: ONLINE."],
        typeSpeed: 20, showCursor: false,
        onComplete: () => {
            setTimeout(() => {
                gsap.to("#preloader", { opacity: 0, duration: 0.5, onComplete: () => document.getElementById("preloader").style.display="none" });
            }, 500);
        }
    });

    // 2. TYPED TEXTS
    new Typed(".typing", {
        strings: ["Graphic Designer.", "Software Developer.", "Web Developer.", "Freelancer."],
        typeSpeed: 60, backSpeed: 40, loop: true
    });
    new Typed(".typing-about", {
        strings: ["DEVELOPER", "DESIGNER", "FREELANCER"],
        typeSpeed: 60, backSpeed: 40, loop: true
    });

    // 3. SCROLL UP BUTTON
    const upBtn = document.getElementById("scroll-up-btn");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 500) upBtn.style.opacity = "1";
        else upBtn.style.opacity = "0";
    });
    upBtn.addEventListener("click", () => window.scrollTo({top: 0, behavior: 'smooth'}));

    // 4. SWIPER
    new Swiper(".mySwiper", {
        loop: true, pagination: { el: ".swiper-pagination" }, autoplay: { delay: 3000 }
    });

    // 5. CANVAS BACKGROUND
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    let particles = [];
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 0.6 - 0.3; this.vy = Math.random() * 0.6 - 0.3;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = "rgba(201, 16, 16, 0.4)";
            ctx.beginPath(); ctx.arc(this.x, this.y, 1, 0, Math.PI*2); ctx.fill();
        }
    }
    for(let i=0; i<80; i++) particles.push(new Particle());
    function loop() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(loop);
    }
    loop();
});
