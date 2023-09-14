

let palabra;
let pista;

let intentos = 6;

let palabras = ['GUATA','GUERU','KUARU','HENDU','HECHA','NANDI','JAGUA','ÑANDE','HESAI','POCHY']

let pistas= ['Caminar','traer','orinar','escuchar','observar','vacio','perro','nosotros','sano','enojado']

let numeroRandom = Math.floor(Math.random() * palabras.length) 
console.log(numeroRandom);
palabra = palabras[numeroRandom]
console.log(palabra);
pista = pistas[numeroRandom]
console.log(pista);

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

let divPista = document.getElementById('pista');
divPista.textContent = pista.toUpperCase();

function intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    if(INTENTO.length !=5){
        alert("5 letrante oreko'arã")
        return
    }

    if (INTENTO === palabra) {
        terminar("<h1>¡VY'APAVĒ NDEVE GUARÃ😀(felicidades) !</h1>")
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';

        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';

        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
		intentos--
    if (intentos==0){
        terminar("<h1>EJAVYPÁ SOCIO😖!</h1>")
    }
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
     
    return intento;
}

