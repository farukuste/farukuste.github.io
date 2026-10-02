const helloText = document.querySelector(".hello-text");

const originalText = helloText.textContent;

helloText.textContent = "";

let index = 0;

function typeText() {

    if (index < originalText.length) {

        helloText.textContent += originalText[index];

        index++;

        setTimeout(typeText, 70);

    }

}

setTimeout(typeText, 800);
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav ul li a");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });

});
