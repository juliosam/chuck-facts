const lista = document.querySelector(".card__list");
const frase = document.querySelector(".card__response");


fetch("https://api.chucknorris.io/jokes/categories")
.then(res => res.json())
.then(data => { 
        lista.innerHTML;
    for(let count = 0 ; count< data.length; count++){
        lista.innerHTML= lista.innerHTML + `<li class="item">${data[count]}</li>`}
        
    });

fetch("")

function picker(e){
    if(e.target.className === 'item'){

        fetch(`https://api.chucknorris.io/jokes/random?category=${e.target.innerHTML}`)
        .then(res => res.json())
        .then(data => {   frase.innerHTML = data.value; 
        console.log(data.value)}
        )}}

lista.addEventListener('click', picker);

//
//let handleClick = function(e){
//    if( e.target.className === '.card__question' || '.card__arrowDown'){ 
//        const li = e.target.parentElement;
//        li.classList.toggle("active");
//    }
//}
//
//lista.addEventListener('click', handleClick);