// Mostrar el botón cuando se hace scroll más allá de 500px
window.onscroll = function() {
    mostrarBoton();
};

function mostrarBoton() {
    const boton = document.querySelector("#boton-arriba");

    // Si el scroll vertical supera los 500px, muestra el botón
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
};

// Función para desplazarse hacia arriba
function irArriba() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}