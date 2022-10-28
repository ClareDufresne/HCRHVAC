const toggleButton = document.querySelector('.toggleButton');
const menu = document.querySelector('.navLinks');

toggleButton.addEventListener('click', function(){
    this.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});