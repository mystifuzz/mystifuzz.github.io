document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const texts = [
        "I am mysti - an arrogant unicorn!!",
        "jestem mysticzny - w skrócie arogancki jednorożec!!",
        "jsem mystický - zkrátka arogantní jednorožec!!"
    ];
    let currentIndex = 0;
    let fading = false;

    function fadeInText() {
        fading = false;
        textElement.textContent = texts[currentIndex];
        setTimeout(function () {
            textElement.style.opacity = "1";
            setTimeout(fadeOutText, 3000);
        }, 100);
    }

    function fadeOutText() {
        if (!fading) {
            fading = true;
            textElement.style.opacity = "0";
            setTimeout(function () {
                currentIndex = (currentIndex + 1) % texts.length;
                fadeInText();
            }, 1500);
        }
    }


    fadeInText();
});
