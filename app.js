const header = document.querySelector('.header');
const menuToggler = document.querySelector('.menu');
const logoLink = document.querySelector('.logo');
const headerbutton = document.querySelector('.header-button');
const navLinks = document.querySelectorAll('.nav-link')


//toggle the mobile nav menu
menuToggler.addEventListener('click', () => {
    header.classList.toggle("mobile")
})

// close the menu when any nav link in the header is clicked
navLinks.forEach((link) => {
    link.addEventListener('click', () =>{
        closeMobileNav();
    })
})

logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileNav();
})

headerbutton.addEventListener('click', () => {
    closeMobileNav();
})




// functions------------------------------------

function closeMobileNav (){
header.classList.remove('mobile');
}