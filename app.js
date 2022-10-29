/**
 *  Open/Close Mobile Menu
 */
const mobileMenu = document.querySelector('.nav-mobile > nav');
const menuButton = document.querySelector('.nav-mobile > button');


menuButton.addEventListener('click', e => {
    // add class show to menu
    mobileMenu.classList.toggle('show-menu');

    // change menu icon
    let menuIcon = menuButton.querySelector('i');

    if (mobileMenu.classList.contains('show-menu')) {
        menuIcon.className = 'fas fa-xmark';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
})
