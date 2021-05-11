const btnSwitch = document.querySelector("#switch");
const hCabezal__name = document.querySelector("#cabezal__name");
const hCabezal__status = document.querySelector("#cabezal__status");
const mTitulo = document.querySelector("#titulo");
const mParrafo = document.querySelector("#parrafo");
const mParrafo2 = document.querySelector("#parrafo2");
const mParrafo3 = document.querySelector("#parrafo3");
const hNavNombre = document.querySelector("#nav__nombre");
const hNavEstado = document.querySelector("#nav__estado");
const hNavAnio = document.querySelector("#navAbajo__time");
const mTrabajo1 = document.querySelector("#trabajos__t1");
const mTrabajo2 = document.querySelector("#trabajos__t2");
const mCharla1 = document.querySelector("#charlemos1");
const mCharla2 = document.querySelector("#charlemos2");
const mContactame = document.querySelector("#contactame");
const mContactactame__lItemA = document.querySelector("#contactame__lItemA");
const fAnio = document.querySelector("#footer__anio");
const fLegal = document.querySelector("#footer__legal");

var i="A";
const hStar = document.querySelector("#star");
const mAky = document.querySelector("#imagenAky");
let animado = document.querySelectorAll(".animado");
var alto = (window.innerHeight);

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    mTitulo.classList.toggle('dark');
    mParrafo.classList.toggle('dark');
    mParrafo2.classList.toggle('dark');
    mParrafo3.classList.toggle('dark');
    mAky.classList.toggle('dark');
    hCabezal__name.classList.toggle('dark');
    hCabezal__status.classList.toggle('dark');
    hNavNombre.classList.toggle('dark');
    hNavEstado.classList.toggle('dark');
    hNavAnio.classList.toggle('dark');
    hStar.classList.toggle('dark');
    mTrabajo1.classList.toggle('dark');
    mTrabajo2.classList.toggle('dark');
    mCharla1.classList.toggle('dark');
    mCharla2.classList.toggle('dark');
    mContactame.classList.toggle('dark');
    mContactactame__lItemA.classList.toggle('dark');
    fAnio.classList.toggle('dark');
    fLegal.classList.toggle('dark');


});
//añadido nueva
hStar.addEventListener('click', () =>{
    switch(i){
        case"A":
        hCabezal__name.classList.toggle('color1');
        hCabezal__status.classList.toggle('color1');
        hNavNombre.classList.toggle('color1');
        hNavEstado.classList.toggle('color1');
        hNavAnio.classList.toggle('color1');
        hStar.classList.toggle('color1');
        mTitulo.classList.toggle('color1');
        mParrafo.classList.toggle('color1');
        mParrafo2.classList.toggle('color1');
        mParrafo3.classList.toggle('color1');
        mTrabajo1.classList.toggle('color1');
        mTrabajo2.classList.toggle('color1');
        mCharla1.classList.toggle('color1');
        mCharla2.classList.toggle('color1');
        mContactame.classList.toggle('color1');
        mContactactame__lItemA.classList.toggle('color1');
        fAnio.classList.toggle('color1');
        fLegal.classList.toggle('color1');

        console.log("I tiene "+i+" y es rosa");
        i="B";
        console.log("Se le asigno "+i+"");
        break;

        case"B":
        hCabezal__name.classList.toggle('color1');
        hCabezal__status.classList.toggle('color1');
        hNavNombre.classList.toggle('color1'); //Duplicamos para quitar el estilo anterior
        hNavEstado.classList.toggle('color1');
        hNavAnio.classList.toggle('color1');
        hStar.classList.toggle('color1');
        mTitulo.classList.toggle('color1');
        mParrafo.classList.toggle('color1');
        mParrafo2.classList.toggle('color1');
        mParrafo3.classList.toggle('color1');
        mTrabajo1.classList.toggle('color1');
        mTrabajo2.classList.toggle('color1');
        mCharla1.classList.toggle('color1');
        mCharla2.classList.toggle('color1');
        mContactame.classList.toggle('color1');
        mContactactame__lItemA.classList.toggle('color1');
        fAnio.classList.toggle('color1');
        fLegal.classList.toggle('color1');

        hCabezal__name.classList.toggle('color2');
        hCabezal__status.classList.toggle('color2');
        hNavNombre.classList.toggle('color2');
        hNavEstado.classList.toggle('color2');
        hNavAnio.classList.toggle('color2');
        hStar.classList.toggle('color2');
        mTitulo.classList.toggle('color2');
        mParrafo.classList.toggle('color2');
        mParrafo2.classList.toggle('color2');
        mParrafo3.classList.toggle('color2');
        mTrabajo1.classList.toggle('color2');
        mTrabajo2.classList.toggle('color2');
        mCharla1.classList.toggle('color2');
        mCharla2.classList.toggle('color2');
        mContactame.classList.toggle('color2');
        mContactactame__lItemA.classList.toggle('color2');
        fAnio.classList.toggle('color2');
        fLegal.classList.toggle('color2');

        console.log("I tiene "+i+" y es naranja");
        i="C";
        console.log("Se le asigno "+i+"");
        break;

        case"C":
        hCabezal__name.classList.toggle('color2');
        hCabezal__status.classList.toggle('color2');
        hNavNombre.classList.toggle('color2'); //Duplicamos para quitar el estilo anterior
        hNavEstado.classList.toggle('color2');
        hNavAnio.classList.toggle('color2');
        hStar.classList.toggle('color2');
        mTitulo.classList.toggle('color2');
        mParrafo.classList.toggle('color2');
        mParrafo2.classList.toggle('color2');
        mParrafo3.classList.toggle('color2');
        mTrabajo1.classList.toggle('color2');
        mTrabajo2.classList.toggle('color2');
        mCharla1.classList.toggle('color2');
        mCharla2.classList.toggle('color2');
        mContactame.classList.toggle('color2');
        mContactactame__lItemA.classList.toggle('color2');
        fAnio.classList.toggle('color2');
        fLegal.classList.toggle('color2');

        hCabezal__name.classList.toggle('color3');
        hCabezal__status.classList.toggle('color3');
        hNavNombre.classList.toggle('color3');
        hNavEstado.classList.toggle('color3');
        hNavAnio.classList.toggle('color3');
        hStar.classList.toggle('color3');
        mTitulo.classList.toggle('color3');
        mParrafo.classList.toggle('color3');
        mParrafo2.classList.toggle('color3');
        mParrafo3.classList.toggle('color3');
        mTrabajo1.classList.toggle('color3');
        mTrabajo2.classList.toggle('color3');
        mCharla1.classList.toggle('color3');
        mCharla2.classList.toggle('color3');
        mContactame.classList.toggle('color3');
        mContactactame__lItemA.classList.toggle('color3');
        fAnio.classList.toggle('color3');
        fLegal.classList.toggle('color3');

        console.log("I tiene "+i+" y es azul");
        i="D";
        console.log("Se le asigno "+i+"");
        break;

        case"D":
        hCabezal__name.classList.toggle('color3');
        hCabezal__status.classList.toggle('color3');
        hNavNombre.classList.toggle('color3');
        hNavEstado.classList.toggle('color3');
        hNavAnio.classList.toggle('color3');
        hStar.classList.toggle('color3');
        mTitulo.classList.toggle('color3');
        mParrafo.classList.toggle('color3');
        mParrafo2.classList.toggle('color3');
        mParrafo3.classList.toggle('color3');
        mTrabajo1.classList.toggle('color3');
        mTrabajo2.classList.toggle('color3');
        mCharla1.classList.toggle('color3');
        mCharla2.classList.toggle('color3');
        mContactame.classList.toggle('color3');
        mContactactame__lItemA.classList.toggle('color3');
        fAnio.classList.toggle('color3');
        fLegal.classList.toggle('color3');

        i="A";
    }
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
