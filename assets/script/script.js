
const button1 = document.querySelectorAll('.buttonsmenu li');
console.log(button1[1])

const kvadratas = document.querySelector('.square');

button1[0].onclick = function(){
    kvadratas.classList.toggle('hide')
}

button1[1].onclick = function(){
    kvadratas.classList.toggle('width')
}


function aukstis(){
    kvadratas.classList.toggle('height')
}
button1[2].onclick = aukstis;


const remelis = document.querySelector('.content');

button1[3].onclick = function(){
    remelis.classList.toggle('center');
    kvadratas.classList.remove('position');
}

button1[4].onclick = function(){
    kvadratas.classList.toggle('position');
    remelis.classList.remove('center');
}

button1[5].onclick = function(){
    kvadratas.classList.remove('position', 'height', 'width');
    remelis.classList.remove('center');
}


// Random RGB color
function rgbRandom(){
    a = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    c = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    console.log(`rgb(${a}, ${b}, ${c})`)
    return `rgb(${a}, ${b}, ${c})`
}
rgbRandom()


const spalvLang = document.querySelectorAll('.colorblock');
console.log(spalvLang)

const spalvPavad = document.querySelectorAll('.colorname');


function spalvblokai(){
    spalvLang[0].style.backgroundColor = rgbRandom();
    spalvPavad[0].textContent = spalvLang[0].style.backgroundColor;

    spalvLang[1].style.backgroundColor = rgbRandom();
    spalvPavad[1].textContent = spalvLang[1].style.backgroundColor;

    spalvLang[2].style.backgroundColor = rgbRandom();
    spalvPavad[2].textContent = spalvLang[2].style.backgroundColor;

    spalvLang[3].style.backgroundColor = rgbRandom();
    spalvPavad[3].textContent = spalvLang[3].style.backgroundColor;

    spalvLang[4].style.backgroundColor = rgbRandom();
    spalvPavad[4].textContent = spalvLang[4].style.backgroundColor;
}

spalvLang.forEach(Item => {
    Item.addEventListener('click', spalvblokai);
});




