const btnSwitch = document.querySelector("#switch");
const mTitulo = document.querySelector("#titulo");
const mParrafo = document.querySelector("#parrafo");
const mParrafo2 = document.querySelector("#parrafo2");
const mParrafo3 = document.querySelector("#parrafo3");
const hNavNombre = document.querySelector("#nav__nombre");
const hNavEstado = document.querySelector("#nav__estado");
const hNavAnio = document.querySelector("#navAbajo__time");

const hStar = document.querySelector("#star");
const mAky = document.querySelector("#imagenAky"); //revisar
let animado = document.querySelectorAll(".animado");
var alto = (window.innerHeight);

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    mTitulo.classList.toggle('dark');
    mParrafo.classList.toggle('dark');
    mParrafo2.classList.toggle('dark');
    mParrafo3.classList.toggle('dark');

    mAky.classList.toggle('dark'); //revisar
    hNavNombre.classList.toggle('dark');
    hNavEstado.classList.toggle('dark');
    hNavAnio.classList.toggle('dark');
    hStar.classList.toogle('dark');

});
hStar.addEventListener('click', () =>{
    document.body.classList.toggle('color1');
    mTitulo.classList.toggle('color1');
    mParrafo.classList.toggle('color1');
    hStar.classList.toogle('color1');
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
