const handburger = document.querySelector('.toggle-container');
const navlinks = document.querySelector('nav-links');
const links = document.querySelectorAll('nav-links li');

handburger.addEventListener("click", () => {
    navlinks.classList.toggle("collapse")
})