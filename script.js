/* =====================================================
   PORTFOLIO — MAHMOUDANE MBACKE DIOP
   ===================================================== */


/* ================= MENU MOBILE ================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Fermer le menu après avoir cliqué sur un lien */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= ANNÉE AUTOMATIQUE ================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ================= ANIMATION AU SCROLL ================= */

const elements = document.querySelectorAll(
    ".section-title, .about-text, .about-info, .skill-card, .project-card, .timeline-item, .contact-text, .contact-form"
);

elements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elements.forEach(element => {
    observer.observe(element);
});


/* ================= FORMULAIRE ================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            alert("Veuillez remplir tous les champs.");

            return;

        }


        alert(
            `Merci ${name} ! Votre message est prêt à être envoyé.`
        );


        contactForm.reset();

    });

}


/* ================= NAVBAR AU SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(15, 23, 42, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});
