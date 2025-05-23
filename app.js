const header = document.querySelector('.header');
const menuToggler = document.querySelector('.menu');
const logoLink = document.querySelector('.logo');
const headerbutton = document.querySelector('.header-button');
const navLinks = document.querySelectorAll('.nav-link');


// window.addEventListener('resize', function() {
//     if(window.innerWidth = 1200){
//         header.classList.toggle("mobile");
//     }
// });


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

// form validation
const submit = document.querySelector("#submit");
const nameInput = document.querySelector("#name");
const warning = document.querySelector(".warning");

submit.addEventListener("click", (e) =>{
    e.preventDefault();
    const value = nameInput.value;
    
    if(value === ""){
        warning.innerHTML = "Enter your name";
        return
    }

    warning.innerHTML = "";
    nameInput.value = "";
})


// functions------------------------------------

function closeMobileNav (){
header.classList.remove('mobile');
}