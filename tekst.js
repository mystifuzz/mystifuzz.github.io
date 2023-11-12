document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const textContainer = document.querySelector(".text-container");
    const texts = [
        "I am mystic - who am I?",
        "jestem mystic - kim jestem?",
        "jsem mystic - kdo jsem ja?"
    ];
    let currentIndex = 0;
    let fading = false;

    function setTextContainerHeight() {
        textContainer.style.height = textContainer.offsetHeight + "px";
    }

    setTextContainerHeight();

    function fadeInText() {
        fading = false;
        textElement.textContent = texts[currentIndex];
        setTimeout(function () {
            textElement.style.opacity = "1";
            setTextContainerHeight();
            setTimeout(fadeOutText, 3000);
        }, 100);
    }

    function fadeOutText() {
        if (!fading) {
            fading = true;
            textElement.style.opacity = "0";
            setTextContainerHeight();
            setTimeout(function () {
                currentIndex = (currentIndex + 1) % texts.length;
                fadeInText();
            }, 1500);
        }
    }

    fadeInText();
});
