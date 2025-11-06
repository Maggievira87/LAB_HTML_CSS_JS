let contador = 0;
const contadorElemento = document.getElementById("contador");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
function actualizarContador() {
    contadorElemento.textContent = contador;
    if (contador >= 10) {
        contadorElemento.style.color = "Blue";
    } else {
        contadorElemento.style.color = "black";
    }
}

btnIncrementar.addEventListener("click", () => {
    contador++;
    actualizarContador();
});

btnDecrementar.addEventListener("click", () => {
    contador--;
    actualizarContador();
});