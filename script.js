

let palabra = 'APPLE';
let intentos = 6;

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE!")
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    if (intentos==0){
        console.log("PERDISTE!")
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
