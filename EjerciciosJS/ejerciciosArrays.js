
// Ejercicio Sumar Números

// Crea una función llamada sumNumbers que recibe como argumento un número indeterminado de números y devuelve un número con la suma de todos ellos.
// Por ejemplo, con la entrada sumNumbers(1,2,3,4)
// Devolverá 10

function sumNumbers(...arrayNum) {
    return arrayNum.reduce((a, n) => a += n);
}
console.log(sumNumbers(1, 2, 3, 4));

// Ejercicio Sumar Positivos

// Crea una función llamada sumPositives que recibe como argumento un número indeterminado de números y devuelve un número con la suma de todos los que son positivos. Es decir, los negativos los ignora.
// Por ejemplo, con la entrada sumPositives(1,-2,-3,4)
// Devolverá 5

function sumPositives(...arrayNum) {
    res = 0;
    arrayNum.forEach(number => {
        if (number > 0)
            res += number;
    });
    return res;
}
function sumPositives2(...arrayNum) {

    return arrayNum.filter((number) => number > 0).reduce((a, n) => a += n);
}


console.log(sumPositives2(1, -2, -3, 4));


// Ejercicio Sumar Cubos
// Crea una función llamada sumCubes que recibe como argumento un número y 
// devuelve un número con la suma de todos cubos empezando por el 1 y 
// acabando en ese número. 

function sumCubes(number) {
    let res = 0;
    for (let index = 1; index <= number; index++) {
        res += Math.pow(index, 3);
    }
    return res;
}


console.log(sumCubes(4));



function squareDigits(number) {
    let res = "";
    strNum = number.toString();
    return strNum.split('').reduce((a, n) => a += (n ** 2), "");
}

console.log(squareDigits(213));
console.log(squareDigits(90345));


//EJERCICIO MEDIA PALABRAS
let txt = "Este texto tiene: palabras. más palabras y signos.";

function mediaWord(texto = "") {
    texto = texto.replaceAll('.', ' ').replaceAll(',', ' ').replaceAll(':', ' ').replaceAll(';', ' ');
    let txtseparado = texto.split(" ");
    let contadorLetras = [];
    txtseparado = txtseparado.filter((palabras) => palabras.length > 0);
    txtseparado.forEach(word => {
        contadorLetras.push(word.length);
    });
    return (contadorLetras.reduce((a, n) => a += n) / contadorLetras.length);
}
console.log(mediaWord(txt));

//EJERCICIO CONTADOR PALABRAS

let text = "De las palabras de la lista, la palabra está en la lista.";

function contadorPalabras(text = "", ...listaPalabras) {
    let res = new Array(listaPalabras.length);
    res.fill(0);

    text = text.replaceAll('.', ' ').replaceAll(',', ' ').replaceAll(':', ' ').replaceAll(';', ' ');
    let txtseparado = text.split(" ");
    txtseparado = txtseparado.filter((palabra) => palabra.length > 0);
    
    
    for (let index = 0; index < txtseparado.length; index++) {
        listaPalabras.forEach(pal => {
            if(txtseparado[index].includes(pal)){
                res[listaPalabras.indexOf(pal)] +=1;
            }
        });
    }
    
    return res;
}
console.log(contadorPalabras(text, 'lista', 'en', 'berenjena', 'palabra'));


//EJERCICIO 1

let ar = [1, 2, [5, 4], 3, 6, [ [2, 4], 8, [9, 2, 0, [1]] ], 6, [], [8, 7]] ;

function sumArrayMult(arrayNum = []){
    arrayNum = arrayNum.flat(arrayNum.length);
    return arrayNum.reduce((a, n) => a += n);

}
console.log(sumArrayMult(ar));