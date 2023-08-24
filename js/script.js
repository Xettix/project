'use strict';

const btn = document.querySelector('.btn-header');
const h1 = document.querySelector('h1');

let counter = 0;

btn.addEventListener('click', ()=>{
    
    counter++;

    if(counter % 2 === 0) {
        h1.innerText = 'Salon samochodowy w Krakowie';
    } else {
        h1.innerText = 'Tymoteusz Bartos';
    }


});

const hamburger = document.querySelector('.top .material-icons');
const closeBtn = document.querySelector('nav .material-icons');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {

    nav.classList.add('display-block')
    // nav.style.display = 'block';

});

closeBtn.addEventListener('click', () => {

    nav.classList.remove('display-block')
    // nav.style.display = 'none';

});