
// Ejercicio Sumar Números

// Crea una función llamada sumNumbers que recibe como argumento un número indeterminado de números y devuelve un número con la suma de todos ellos.
// Por ejemplo, con la entrada sumNumbers(1,2,3,4)
// Devolverá 10

function sumNumbers(...arrayNum){
    return arrayNum.reduce((a,n) => a+=n);
}
console.log(sumNumbers(1,2,3,4));

// Ejercicio Sumar Positivos

// Crea una función llamada sumPositives que recibe como argumento un número indeterminado de números y devuelve un número con la suma de todos los que son positivos. Es decir, los negativos los ignora.
// Por ejemplo, con la entrada sumPositives(1,-2,-3,4)
// Devolverá 5

function sumPositives(...arrayNum){
    res = 0;
    arrayNum.forEach(number => {
        if(number > 0)
            res+=number;
    });
    return res;
}
function sumPositives2(...arrayNum){

    return arrayNum.filter((number) => number > 0).reduce((a,n) => a+=n);
}
    

console.log(sumPositives2(1,-2,-3,4));


// Ejercicio Sumar Cubos
// Crea una función llamada sumCubes que recibe como argumento un número y 
// devuelve un número con la suma de todos cubos empezando por el 1 y 
// acabando en ese número. 

function sumCubes(number){
    let res = 0;
    for (let index = 1; index <= number; index++) {
        res += Math.pow(index,3);
    }
    return res;
}


console.log(sumCubes(4));



function squareDigits(number){
    let res = "";
    strNum = number.toString();
    return strNum.split('').reduce((a,n) => a+=(n**2),"");
}

console.log(squareDigits(213));
console.log(squareDigits(90345));