/* =====================================================
NEEMA CHARO TUTORIAL
Main JavaScript
===================================================== */

/* ================= MOBILE MENU ================= */

function toggleMenu() {

const navLinks = document.getElementById("navLinks");

if (!navLinks) return;

navLinks.classList.toggle("active");

}

/* ================= CLOSE MENU ================= /
/ Close the mobile menu after clicking a link */

document.addEventListener("DOMContentLoaded", function () {

const navLinks = document.getElementById("navLinks");

if (navLinks) {

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


/* ================= CURRENT YEAR ================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("show");

    });

}

});

/* ================= WHATSAPP CONTACT FORM ================= */

function sendWhatsAppMessage(event) {

event.preventDefault();

const name =
    document.getElementById("name").value.trim();

const email =
    document.getElementById("email").value.trim();

const message =
    document.getElementById("message").value.trim();


if (!name || !email || !message) {

    alert("Please fill in all the fields.");

    return;

}


const phoneNumber = "254748933452";


const whatsappMessage =
    "Hello Neema Charo!%0A%0A" +
    "My name is: " + encodeURIComponent(name) +
    "%0A" +
    "My email is: " + encodeURIComponent(email) +
    "%0A%0A" +
    "My message:%0A" +
    encodeURIComponent(message);


const whatsappURL =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    whatsappMessage;


window.open(
    whatsappURL,
    "_blank"
);

}

/* ================= ESCAPE KEY ================= /
/ Allows the user to close the mobile menu */

document.addEventListener("keydown", function (event) {

if (event.key === "Escape") {

    const navLinks =
        document.getElementById("navLinks");

    if (navLinks) {

        navLinks.classList.remove("active");

    }

}

});