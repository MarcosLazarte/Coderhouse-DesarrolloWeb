const btnSwitch = document.querySelector("#switch");
const btnTitulo = document.querySelector("#titulo");
const btnParrafo = document.querySelector("#parrafo");
const btnStar = document.querySelector("#star");
let animado = document.querySelectorAll(".animado");
var alto = (window.innerHeight);

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    btnTitulo.classList.toggle('dark');
    btnParrafo.classList.toggle('dark');
});
btnStar.addEventListener('click', () =>{
    document.body.classList.toggle('color1');
    btnTitulo.classList.toggle('color1');
    btnParrafo.classList.toggle('color1');
    btnStar.classList.toogle('color1')
});
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - (alto - 50) < scrollTop) {
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}
window.addEventListener('scroll', mostrarScroll);

let charlemosUno = document.querySelector('.charlemos__primero');
let charlemosDos = document.querySelector('.charlemos__segundo');

window.onscroll = () =>{
    let pos = window.scrollY - 900;
    charlemosUno.style.left = `${pos}px`
    charlemosDos.style.right = `${pos}px` 
}
