const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu-button');

menu.addEventListener('click' , () =>{
    navbar.classList.toggle('navbar-hide');
    navbar.classList.toggle('navbar-show');
})