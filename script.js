document.addEventListener("DOMContentLoaded", function () {
    const blurFollow = document.getElementById('blur-follow');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        blurFollow.style.left = x - 100 + 'px';
        blurFollow.style.top = y - 100 + 'px';
    });
    const texts = ["Web Developer", "Full Stack Developer", "Software Developer", "Python Enthusiast"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Speed of typing
    const erasingSpeed = 50; // Speed of erasing
    const newTextDelay = 1000; // Delay between new text

    const changingTextElement = document.getElementById("changing-text");

    function type() {
        if (charIndex < texts[index].length) {
            changingTextElement.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            changingTextElement.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            index = (index + 1) % texts.length;
            setTimeout(type, typingSpeed + 1100);
        }
    }

    setTimeout(type, newTextDelay + 250);
});
