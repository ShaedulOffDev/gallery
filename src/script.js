let $ = e => document.querySelector(e),
$$ = es => document.querySelectorAll(es);

let loader = $('.loader')
let left = $$('.left');
let right = $$('.right');
let bottom = $$('.bottom');

window.addEventListener('load', (e) => {
    loader.classList.add('hide');
    setTimeout(() => {
        loader.classList.remove('hide');
        loader.style.display = 'none'
    }, 500);

    left.forEach(el => {
        el.classList.add('normal')
        el.classList.remove('left')
    });
    right.forEach(el => {
        el.classList.add('normal')
        el.classList.remove('right')
    });
    bottom.forEach(el => {
        el.classList.add('normal')
        el.classList.remove('bottom')
    });
})

let modal = $('.modal')

window.addEventListener('click', (e) => {
    if(e.target.tagName == "IMG"){
        modal.querySelector('img').src = e.target.src;
        modal.classList.remove('hide');
        modal.classList.add('show');
    }
})

modal.addEventListener('click', (e) => {
    if(e.target.nodeName != 'IMG'){
        modal.classList.add('hide');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.remove('hide');
            modal.style.display = 'none';
        }, 450);
    }
})