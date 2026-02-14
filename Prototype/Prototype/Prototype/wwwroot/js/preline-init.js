window.initPreline = () => {
    if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
    }
};

window.addEventListener('load', () => {
    window.initPreline();
});