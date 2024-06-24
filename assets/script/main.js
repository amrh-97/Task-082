const headContent = document.querySelector('.mainheader__content');
const navIcon = document.querySelector('.header__navIcon');
const navMenu = document.querySelector('.mainheader__nav');


let navShowHide = navIcon.addEventListener('click', () => {
    headContent.classList.toggle('active');
})