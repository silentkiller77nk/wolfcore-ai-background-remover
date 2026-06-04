/* ==========================
DARK MODE
========================== */

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const icon = darkModeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}

/* ==========================
UPLOAD ELEMENTS
========================== */

const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const dropArea = document.getElementById("dropArea");

const originalPreview = document.getElementById("originalPreview");
const resultPreview = document.getElementById("resultPreview");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

/* ==========================
UPLOAD BUTTON
========================== */

if (uploadBtn) {
    uploadBtn.addEventListener("click", () => {
        fileInput.click();
    });
}

/* ==========================
FILE INPUT
========================== */

if (fileInput) {

    fileInput.addEventListener("change", (e) => {

        const file = e.target.files[0];

        if (!file) return;

        previewImage(file);

    });

}

/* ==========================
DRAG & DROP
========================== */

if (dropArea) {

    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.style.borderColor = "#16a34a";
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.style.borderColor = "#2563eb";
    });

    dropArea.addEventListener("drop", (e) => {

        e.preventDefault();

        dropArea.style.borderColor = "#2563eb";

        const file = e.dataTransfer.files[0];

        if (!file) return;

        previewImage(file);

    });

}

/* ==========================
PREVIEW IMAGE
========================== */

function previewImage(file) {

    const reader = new FileReader();

    reader.onload = function (e) {

        originalPreview.src = e.target.result;

        simulateProcessing(e.target.result);

    };

    reader.readAsDataURL(file);

}

/* ==========================
SIMULATED AI PROCESSING
========================== */

function simulateProcessing(imageSrc) {

    let progress = 0;

    progressFill.style.width = "0%";
    progressText.innerText = "0%";

    const interval = setInterval(() => {

        progress += 5;

        progressFill.style.width = progress + "%";
        progressText.innerText = progress + "%";

        if (progress >= 100) {

            clearInterval(interval);

            resultPreview.src = imageSrc;

        }

    }, 100);

}

/* ==========================
REMOVE BG BUTTON
========================== */

const removeBgBtn = document.getElementById("removeBgBtn");

if (removeBgBtn) {

    removeBgBtn.addEventListener("click", () => {

        if (!originalPreview.src) {

            alert("Please upload an image first.");

            return;
        }

        simulateProcessing(originalPreview.src);

    });

}

/* ==========================
DOWNLOAD PNG
========================== */

const downloadPng = document.getElementById("downloadPng");

if (downloadPng) {

    downloadPng.addEventListener("click", () => {

        if (!resultPreview.src) {
            alert("No image available.");
            return;
        }

        const link = document.createElement("a");

        link.href = resultPreview.src;

        link.download = "background-removed.png";

        link.click();

    });

}

/* ==========================
DOWNLOAD JPG
========================== */

const downloadJpg = document.getElementById("downloadJpg");

if (downloadJpg) {

    downloadJpg.addEventListener("click", () => {

        if (!resultPreview.src) {
            alert("No image available.");
            return;
        }

        const link = document.createElement("a");

        link.href = resultPreview.src;

        link.download = "background-removed.jpg";

        link.click();

    });

}

/* ==========================
FAQ ACCORDION
========================== */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

        } else {

            answer.style.maxHeight =
            answer.scrollHeight + "px";

        }

    });

});

/* ==========================
BEFORE / AFTER SLIDER
========================== */

const slider =
document.getElementById("comparisonSlider");

const overlay =
document.querySelector(".comparison-overlay");

if (slider && overlay) {

    slider.addEventListener("input", () => {

        overlay.style.width =
        slider.value + "%";

    });

}

/* ==========================
BACKGROUND COLOR CHANGE
========================== */

const colorButtons =
document.querySelectorAll(".color-btn");

colorButtons.forEach(button => {

    button.addEventListener("click", () => {

        const color =
        button.getAttribute("data-color");

        resultPreview.style.background =
        color;

    });

});

/* ==========================
CONTACT FORM
========================== */

const contactForm =
document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}

/* ==========================
NEWSLETTER
========================== */

const newsletterBtn =
document.querySelector(".newsletter-form button");

if (newsletterBtn) {

    newsletterBtn.addEventListener("click", () => {

        const email =
        document.querySelector(
            ".newsletter-form input"
        ).value;

        if (email === "") {

            alert("Enter your email.");

            return;

        }

        alert("Subscribed Successfully!");

    });

}

/* ==========================
SCROLL ANIMATION
========================== */

const revealElements =
document.querySelectorAll(
    ".feature-card, .pricing-card, .testimonial-card"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".6s";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==========================
CONSOLE MESSAGE
========================== */

console.log(
    "RemoveAI Website Loaded Successfully"
);