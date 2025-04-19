const header = document.querySelector('.header');
const menuToggler = document.querySelector('.menu');


menuToggler.addEventListener('click', () => {
    header.classList.toggle("mobile")
})