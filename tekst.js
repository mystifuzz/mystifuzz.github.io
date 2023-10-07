document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const textContainer = document.querySelector(".text-container");
    const texts = [
        "I am mystic - some arrogant unicorn!!",
        "jestem mysticzny - taki arogancki jednorożec!!",
        "jsem mysticky - taký arogantní jednorožec!!"
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
