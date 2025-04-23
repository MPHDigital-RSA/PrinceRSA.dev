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

const imageWrapper = document.querySelectorAll(".image-wrapper");
// const image = document.querySelectorAll(".image");


imageWrapper.forEach( (item) => {
    item.addEventListener('mouseover', () => {
        const image = item.children[0];
        const imageHeight = image.offsetHeight;
        image.style.transform = `translateY(${-imageHeight / 2 + 20}px)`;
    })
})

imageWrapper.forEach( (item) => {
    item.addEventListener('mouseout', () => {
        const image = item.children[0];
        image.style.transform = `translateY(0px)`;
    })
})


// imageWrapper.addEventListener('mouseover', ()=>{
//     const imageHeight = image.offsetHeight;
//     console.log(imageHeight);

//     image.style.transform = `translateY(${-imageHeight / 2 + 20}px)`;
// })

// imageWrapper.addEventListener('mouseout', ()=>{
//      image.style.transform = `translateY(${0}px)`;
// })


// end of project image scroll on hover



// functions------------------------------------

function closeMobileNav (){
header.classList.remove('mobile');
}