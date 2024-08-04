let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const texts = ["Software Engineer","Web Developer", "Full-Stack Developer", "Java Developer"];
let index = 0;
const animatedText = document.querySelector('.text-animation');
const typingSpeed = 100; // Speed for typing each letter
const erasingSpeed = 50; // Speed for erasing each letter
const delayBetweenTexts = 2000; // Delay between each text change

function typeText(text, callback) {
    let charIndex = 0;
    function type() {
        if (charIndex < text.length) {
            animatedText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(callback, delayBetweenTexts);
        }
    }
    type();
}

function eraseText(callback) {
    let charIndex = animatedText.textContent.length;
    function erase() {
        if (charIndex > 0) {
            animatedText.textContent = animatedText.textContent.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            setTimeout(callback, typingSpeed);
        }
    }
    erase();
}

function animateText() {
    typeText(texts[index], () => {
        eraseText(() => {
            index = (index + 1) % texts.length;
            animateText();
        });
    });
}

document.addEventListener('DOMContentLoaded', animateText);