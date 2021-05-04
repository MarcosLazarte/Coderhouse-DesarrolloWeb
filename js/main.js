const btnSwitch = document.querySelector("#switch")
const btnTitulo = document.querySelector("#titulo")

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    btnTitulo.classList.toggle('dark');
});