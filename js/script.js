'use strict';

const btn = document.querySelector('button');
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