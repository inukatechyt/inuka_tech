$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

        // Subscribe-ad-btn show/hide script
        if (this.scrollY > 700) {
            $('.Subscribe-ad-btn').addClass("show_ad");
        } else {
            $('.Subscribe-ad-btn').removeClass("show_ad");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    // typing text animation script

    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Editor", "Designer", "Consultor", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Editor", "Designer", "Consultor", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});



// skills bar script


const skillsSection = document.getElementById('anim-str');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
        showProgress();
    }
    else {
        hideProgress();
    }
});


// preloader script

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    this.document.querySelector(".preloader").classList.add("preloader-hide")
})

// welcome popup 

document.querySelector(".close_btn").addEventListener("click", function () {
    document.querySelector(".welcome_box").style.display = "none";
})

document.querySelector(".sub_now").addEventListener("click", function () {
    document.querySelector(".sub_btn").innerHTML = "Subscribed"
})

document.querySelector(".sub_now").addEventListener("click", function () {
    document.querySelector(".sub_btn").style.background = "rgb(72, 72, 72)";
})