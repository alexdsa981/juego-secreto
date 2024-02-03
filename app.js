let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function verificarIntento() {
    //obtener elemento por id
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //comprobar tipo de dato
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroDeUsuario == numeroSecreto);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el número en ' + intentos + (intentos == 1 ? ' vez' : ' veces'));
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}
function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    //vaciamos caja
    valorCaja.value = "";
}
function suma() {
    let a1 = parseInt(prompt('primer numero'));
    let a2 = parseInt(prompt('segundo numero'));
    alert('la suma es: ' + (a1 + a2));
}

function reiniciarJuego() {
    limpiarCaja();

    condicionesIniciales();

    document.getElementById('reiniciar').setAttribute('disabled', 'true');


}

function asignarTextoElemento(elemento, texto) {
    //obtener elemento html o por clase
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un número del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}

let promedioU = promedio(4, 10, 3);
console.log("PROMEDIO: " + promedioU);

condicionesIniciales();