/**
 * Navigation functionality
 */
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
  }

  // Header shadow on scroll
  function headerShadow() {
    const navHeader = document.querySelector(".header");

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }

  // Set active navigation link
  function setActiveNavLink() {
    // Set home as active by default
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => link.classList.remove("active"));
    document.querySelector('.nav-link[href="#home"]').classList.add("active");

    // Update active link on scroll (with slight delay to fix early trigger)
    setTimeout(() => {
      window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${sectionId}`) {
                link.classList.add("active");
              }
            });
          }
        });
      });
    }, 200); // Delay to allow full content/image load

    // Update active link on click
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }

  // Typed.js initialization
  function initTypedJS() {
    const options = {
      strings: [
        "Hello, I'm Roman!", // English
        "Hola, soy Roman!", // Spanish
        "Bonjour, je suis Roman!", // French
        "Hallo, ich bin Roman!", // German
        "Ciao, sono Roman!", // Italian
        "こんにちは、ロマン・カセレスです！", // Japanese
        "안녕하세요, 저는 로만 카세레스입니다!", // Korean
        "你好，我是 Roman！", // Chinese
        "Привет, я Роман!", // Russian
        "Merhaba, ben Roman!", // Turkish
        "سلام، من رومن کاسرس هستم!", // Persian
        "नमस्ते, मैं Roman हूँ!", // Hindi
        "Olá, eu sou Roman!", // Portuguese
        "Hej, jag är Roman!", // Swedish
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
    };

    new Typed(".typeText", options);
  }

  // ScrollReveal initialization
  function initScrollReveal() {
    ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 2000,
      delay: 200,
    });

    // Reveal animations
    ScrollReveal().reveal(".featured-text, .featured-image", { origin: "top" });
    ScrollReveal().reveal(".about-info", { origin: "left" });
    ScrollReveal().reveal(".skills-box", { origin: "right" });
    ScrollReveal().reveal(".project-box", { origin: "bottom", interval: 200 });
    ScrollReveal().reveal(".top-header", { origin: "top" });
  }

  // Initialize all functions
  window.scrollTo(0, 0); // Force scroll to top on initial load
  window.myMenuFunction = myMenuFunction; // Make it globally available
  window.onscroll = function () {
    headerShadow();
  };
  setActiveNavLink();
  initTypedJS();
  initScrollReveal();
});

//hire me button function
const email = "romancaseres929@gmail.com";
const subject = "Hiring Inquiry";
const subject1 = "";
const body1 = "";
const body =
  "Hi Roman,%0AI found your portfolio and would like to hire you for a project.";
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
const gmailUrl1 = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject1}&body=${body1}`;

document.getElementById("hireMeBtn").addEventListener("click", function () {
  window.open(gmailUrl, "_blank");
});

document.getElementById("getInTouchBtn").addEventListener("click", function () {
  window.open(gmailUrl1, "_blank");
});
