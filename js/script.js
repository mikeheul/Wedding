let burger = document.querySelector(".burger")
let menu_toggle = document.querySelector(".menu-toggle")
let menu_links = document.querySelectorAll(".menu-toggle ul li a")

menu_links.forEach(element => {
    element.addEventListener("click", (element) => {
        menu_toggle.classList.remove("active")
    })
});

burger.addEventListener("click", (event) => {

    if(menu_toggle.classList.contains("active")) {
        menu_toggle.classList.remove("active")
        menu_toggle.classList.add("fadeout")

    } else {
        menu_toggle.classList.add("active")
        menu_toggle.classList.remove("fadeout")
    }
    event.preventDefault();
})


function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {total, days, hours, minutes, seconds};
}
  
function initializeClock(id, endtime) {
    const clock = document.querySelector(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
        const t = getTimeRemaining(endtime);
  
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}
  
const deadline = new Date(Date.parse(new Date(2023, 01, 17, 13, 30)));
console.log(deadline)
initializeClock('.counter-time', deadline);


window.addEventListener("DOMContentLoaded", (event) => {

    window.onscroll = function() {myFunction()};

    // Get the navbar
    var header = document.querySelector("header");
    var navbar = document.querySelector("nav");
    var logo = document.querySelector("nav .logo a");
    var navlinks = document.querySelector(".nav-links");
    
    // Get the offset position of the navbar
    var sticky = header.offsetHeight;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
            logo.style.color = "black"
        } else {
            navbar.classList.remove("sticky");
            logo.style.color = "white";
        }
    }
});

