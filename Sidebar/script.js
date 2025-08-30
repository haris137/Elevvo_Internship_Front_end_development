const crossbtn = document.querySelector('.cross');
const barbtn = document.querySelector(' .hamburger'); // Select only the main hamburger
const container = document.querySelector('.container');
const overlay = document.querySelector('.overlay');
let open = false;

barbtn.addEventListener('click', () => {
    container.style.display = 'block';
    open = true;
    overlay.classList.add('active')
    container.classList.add('open')
});
crossbtn.addEventListener('click', () => {
    container.style.display = 'none';
    overlay.classList.remove('active')
    container.classList.remove('open')
    open = false;
});