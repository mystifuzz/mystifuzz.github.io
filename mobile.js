function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function toggleStylesheet() {
    const desktopStylesheet = document.getElementById('desktop-style');
    const mobileStylesheet = document.getElementById('mobile-style');

    if (isMobileDevice()) {
        desktopStylesheet.disabled = true;
        mobileStylesheet.disabled = false;
    } else {
        desktopStylesheet.disabled = false;
        mobileStylesheet.disabled = true;
    }
}

window.addEventListener('load', toggleStylesheet);

