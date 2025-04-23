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


// project image scroll on hover

const imageWrapper = document.querySelector(".image-wrapper");
const image = document.querySelector(".image");


imageWrapper.addEventListener('mouseover', ()=>{
    const imageHeight = image.offsetHeight;
    console.log(imageHeight);

    image.style.transform = `translateY(${-imageHeight / 2 + 20}px)`;
})

imageWrapper.addEventListener('mouseout', ()=>{
     image.style.transform = `translateY(${0}px)`;
})


// end of project image scroll on hover



// functions------------------------------------

function closeMobileNav (){
header.classList.remove('mobile');
}