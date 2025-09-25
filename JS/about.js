// Typing Effect
document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Web Developer ", "UI/UX Designer ", "Graphic Designer ", "Freelancer ", "Tech Enthusiast "];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing");

    function typeEffect() {
        let currentText = texts[index];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex--);
        } else {
            typingElement.textContent = currentText.substring(0, charIndex++);
        }

        let typingSpeed = isDeleting ? 100 : 170;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

        typeEffect(); // start
});