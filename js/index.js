/*

Crear una ventana y agregarle un opacity 1 para hacerla desaparecer
con un addeventlistener//onclick agregar la funcion opacity y con remove, quitarla.


*/

const open_modal = document.querySelector(".modal_open");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".modal_close");

open_modal.addEventListener("click", () => {
    modal.classList.add('modal--show');
})

close_modal.addEventListener("click", () => {
    modal.classList.remove('modal--show');
})