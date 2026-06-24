// HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// TYPING ANIMATION

const words = [
    "Akshat Chitransh",
    "Full Stack Developer",
    "Backend Enthusiast",
    "AI Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetters = "";

function typeEffect() {

    if (wordIndex === words.length) {
        wordIndex = 0;
    }

    currentWord = words[wordIndex];

    currentLetters = currentWord.slice(
        0,
        ++letterIndex
    );

    document.getElementById("typing").textContent =
        currentLetters;

    if (currentLetters.length === currentWord.length) {

        setTimeout(() => {

            eraseEffect();

        }, 1200);

    } else {

        setTimeout(typeEffect, 120);
    }
}

function eraseEffect() {

    currentLetters = currentWord.slice(
        0,
        --letterIndex
    );

    document.getElementById("typing").textContent =
        currentLetters;

    if (letterIndex === 0) {

        wordIndex++;

        setTimeout(typeEffect, 300);

    } else {

        setTimeout(eraseEffect, 60);
    }
}

typeEffect();

// SCROLL TO TOP BUTTON

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");
        }
    });

});