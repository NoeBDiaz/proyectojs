console.log('Operador Módulo: ');
//Operador matemático del módulo x
    //let numUno = Number( prompt('Introduce un número para saber si es Par o Impar'));
let numUno = 100

if(numUno % 2 == 0){
    console.log(numUno);
    console.log('El numero ingresado es PAR');
}else{
    console.log('El numero ingresado NO es PAR');
}

let resultado = numUno / 2;

console.log('El resultado de la división es:', resultado);


//Operadores logicos



//Funciones
function miFuncion(){

    console.log('Me llamate para que haga algo');

}

miFuncion();

let numDos = 100;
let numTres = 200;

function sumar(a, b){
    let respuesta = a + b
    console.log('El resultado de la suma es:', respuesta)
}

sumar(numDos, numTres);

/*function sumar(a, b){
    let respuesta = a + b
    return respuesta
} 

console.log('El resultado de la suma es:', sumar(numDos, numTres)); */

//Bucles

let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Melón",
    "Mora",
    "Limón",
    "Kiwi"
];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
console.log(frutas[6]);


console.log('==========================================');

//for
for (let index = 0; index < frutas.length; index++) {
    console.log('Las frutas son:', index, frutas[index]);

}
