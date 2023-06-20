const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
}
const verificarAdivinanza = (numeroSecreto, numeroAdivinado)=>{
    if (numeroAdivinado == numeroSecreto){
        console.log("Felicidades! adivinaste el numero");
    }
    else if (numeroAdivinado > numeroSecreto){
        console.log("el nuermo secreto es menor, sigue intentando");
    }
    else{
        console.log("el numero secreto es mayor, sigue intentado");
    }
}
module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};