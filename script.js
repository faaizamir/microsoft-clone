let search = document.querySelector('.icon');
let box = document.querySelector('.box');
let hamburger = document.querySelector('.hamburger');
let feat = document.querySelector('.feat');

search.addEventListener('click', ()=>{
    box.classList.toggle('hidden');
})

hamburger.addEventListener('click', ()=>{
    feat.classList.toggle('hidden');
})