const button = document.getElementById('moveButtonNo');
const container = document.querySelector('.container');
const image = document.getElementById('photo');
const h1 = document.querySelector('h1');


button.addEventListener('mouseover', () => {


    
    button.addEventListener('mouseover', function() {
        image.src = 'no.jpg';
        h1.textContent = 'Oooh Please !! Chou Yess ki katlme3 ';
    });


    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);


    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;




});


document.addEventListener('DOMContentLoaded', function() {

    const buttonYes = document.getElementById('moveButtonYes');
    const image = document.getElementById('photo');
    const h1 = document.querySelector('h1');

    buttonYes.addEventListener('click', function() {
        button.style.display='none';
        buttonYes.style.display='none';

        image.src = 'yess.jpg';
        h1.textContent = 'Yayyyy! L3eezzzzzzzz ! Thank you ! ';
    });
});
