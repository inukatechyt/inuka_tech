document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MAGNETIC CURSOR
    const cursor = document.getElementById("cursor");
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    });

    // 2. TERMINAL BOOT SEQUENCE (Ultra Fast)
    new Typed(".boot-text", {
        strings: ["[SYS] Kernel: 6.2.0-beast<br>[SYS] Mounting UI... Done.<br>[SYS] Architect AI: ONLINE."],
        typeSpeed: 10, showCursor: false,
        onComplete: () => {
            setTimeout(() => {
                gsap.to("#preloader", { opacity: 0, duration: 0.5, onComplete: () => document.getElementById("preloader").style.display = "none" });
            }, 300);
        }
    });

    // 3. ARCHITECT TERMINAL (Real Code)
    const outputs = [
        "import socket\nimport threading",
        "Target: 192.168.1.1\nPort: 80",
        "Analyzing packet headers...",
        "Encryption: AES-256 detected.",
        "Attempting bypass... SUCCESS.",
        "System fully optimized for Inuka."
    ];
    let i = 0;
    setInterval(() => {
        const p = document.createElement("p");
        p.style.color = "#0f0";
        p.innerHTML = "> " + outputs[i % outputs.length];
        document.getElementById("architect-terminal").appendChild(p);
        if(document.getElementById("architect-terminal").children.length > 8) document.getElementById("architect-terminal").firstChild.remove();
        i++;
    }, 2000);

    // 4. BACKGROUND CANVAS
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    let particles = [];
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 1 - 0.5; this.vy = Math.random() * 1 - 0.5;
        }
        draw() {
            ctx.fillStyle = "rgba(255,30,30,0.5)"; ctx.beginPath();
            ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2); ctx.fill();
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
    }
    for(let i=0; i<100; i++) particles.push(new Particle());
    function anim() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(anim);
    }
    anim();

    // 5. TYPED ENGINE
    new Typed(".typing", {
        strings: ["Software Developer.", "Graphic Designer.", "Cybersecurity Enthusiast."],
        typeSpeed: 60, backSpeed: 40, loop: true
    });

    new Typed(".typing-about", {
        strings: ["DEVELOPER", "DESIGNER", "FREELANCER"],
        typeSpeed: 60, backSpeed: 40, loop: true
    });

    // 6. SCROLL LOGIC
    const scrollUpBtn = document.getElementById("scroll-up-btn");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 500) scrollUpBtn.classList.add("visible");
        else scrollUpBtn.classList.remove("visible");
    });
    scrollUpBtn.addEventListener("click", () => gsap.to(window, {scrollTo: 0, duration: 1}));
    document.getElementById("scroll-down-btn").addEventListener("click", () => gsap.to(window, {scrollTo: "#about", duration: 1}));

    // 7. SWIPER
    new Swiper(".mySwiper", {
        loop: true, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        autoplay: { delay: 3000 }
    });
});
