// ==============================
// THEME TOGGLE
// ==============================

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Toggle theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";

    }

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active-link");
        }

    });

});


// ==============================
// SMOOTH NAVIGATION
// ==============================

navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId =
            link.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==============================
// CARD HOVER EFFECT
// ==============================

const cards = document.querySelectorAll(
    ".project-card, .skill-card, .certificate-card"
);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});


// ==============================
// HERO TYPING EFFECT
// ==============================

const heroTitle =
document.querySelector(".hero h2");

const roles = [
    "Aspiring AI Engineer",
    "Full Stack Developer",
    "Data Science Student"
];

let roleIndex = 0;

setInterval(() => {

    heroTitle.textContent =
    roles[roleIndex];

    roleIndex++;

    if (roleIndex >= roles.length) {
        roleIndex = 0;
    }

}, 2500);


// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach((btn) => {

    btn.addEventListener("click", function(e) {

        const circle =
        document.createElement("span");

        const diameter =
        Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width =
        circle.style.height =
        `${diameter}px`;

        circle.style.left =
        `${e.offsetX - diameter / 2}px`;

        circle.style.top =
        `${e.offsetY - diameter / 2}px`;

        circle.classList.add("ripple");

        const ripple =
        this.getElementsByClassName(
            "ripple"
        )[0];

        if (ripple) {
            ripple.remove();
        }

        this.appendChild(circle);

    });

});


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(
    "Portfolio Developed by Bhavanasri Kona 🚀"
);