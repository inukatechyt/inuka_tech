document.addEventListener("DOMContentLoaded", () => {
    // Fast Preloader
    new Typed(".boot-text", {
        strings: ["[SYS] Booting Inuka_OS...^200<br>[SYS] Architect AI: ONLINE."],
        typeSpeed: 20,
        showCursor: false,
        onComplete: () => {
            setTimeout(() => {
                document.getElementById("preloader").style.opacity = "0";
                setTimeout(() => document.getElementById("preloader").style.display = "none", 500);
            }, 500);
        }
    });

    // Scroll Up Button Logic
    const scrollUp = document.getElementById("scroll-up-btn");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) scrollUp.classList.add("show");
        else scrollUp.classList.remove("show");
    });
    scrollUp.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

    // Service Tiles Animation
    gsap.from(".nine-grid .glass-card", {
        scrollTrigger: ".nine-grid",
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
    });
});
