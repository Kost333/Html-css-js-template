function mobileMenu() {
    const burgerMenu = document.querySelector(".js-burger-menu");
    const mobileMenuBox = document.querySelector(".header-mobile-nav");

    if (burgerMenu && mobileMenuBox) {
        function toggleMobileMenu() {
            this.querySelectorAll('.full-img').forEach((icon) => {
                icon.classList.toggle('hide')
            });

            mobileMenuBox.classList.toggle('hide');
        }

        burgerMenu.addEventListener('click', toggleMobileMenu);
    }
}


window.onload = function () {
    mobileMenu()
}