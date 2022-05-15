// query the DOM for the nav button and links
const navButton = document.querySelector('.mobileNav');
const nav = document.querySelector('.navMenu');

console.log(nav);

// add event listener (click) to our nav button
navButton.addEventListener('click', function (){
    console.log('you clicked me');
    // toggle nav between open and closed
    navButton.classList.toggle('active');
    nav.classList.toggle('active');

})

