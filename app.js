const readLineSync = require('readline-sync');
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const numero = () => {
    return readLineSync.question('ingrese un numero: ');
};
const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;
    console.log("Bienvenido a adivina el numero secreto");
    console.log("intenta adivinar un numero del 1 al 100");
    while(numeroAdivinado !== numeroSecreto){
        numeroAdivinado = numero();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};
juegoAdivinanza();