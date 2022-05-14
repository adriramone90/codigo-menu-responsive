/*Esta linea captura el boton y lo guarda en una variable*/ 
let button = document.querySelector("#btn-menu")

/*aca capturamos el menu ul y lo guardamos en otra variable*/
let menu = document.querySelector("#menu")

/*Acá a la variable que contiene el botón la aplicamos una función al evento "click",
esa función evalua si el menu tiene la clase active de css se la saca
y si no tiene la clase active se la inserta*/
button.addEventListener("click", function(){
    menu.classList.toggle("active")
})
