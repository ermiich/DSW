


//EJERCICIO 1
    //1. Recorremos el array para obtener los valores de los grados.
    //2. Mientras obtenemos los grados lo sobreescribimos
    //   usando la fórmula.

function toCelsius(tempArray = []){
    for (let index = 0; index < tempArray.length; index++) {
        tempArray[index] = (tempArray[index]-32)*5/9;
    }
    return tempArray;
}
console.log("\nEJERCICIO 1:");
let tempArray = [68, 50, 46.4, 39, 90];
console.log(toCelsius(tempArray));

//EJERCICIO 2
    //1. Filtramos todos los numeros positivos incluyendo el cero.
    //2. Si hay algun negativo el tamaño del array inicial es mayor,
    //   por lo tanto devolveriamos true o viceversa.

function belowCero(...tempArray){

    let positives = tempArray.filter((temp) => temp > -1);

    if(positives.length < tempArray.length){
        return true;
    }
    return false;
}
console.log("\nEJERCICIO 2:");
console.log(belowCero(22, 5, 13, 0, 35));

//EJERCICIO 3
    // 1. Divide la frase por espacios.
    // 2. Compara cada tamaño de palabra con el deseado.

    function searchByLenght(txt = "",wordLenght = 0) {
    let result = "";
    if(txt.length > 0){
        txt.split(' ').forEach(word => {
            if(word.length == wordLenght){
                result = result.concat(" " +word);
            }
        });

    }
    return result;
    
}
console.log("\nEJERCICIO 3:");
let txt = 'Siempre escribe tu código como si la persona que lo fuera a mantener fuera un peligroso psicópata que sabe quien eres y donde vives';
console.log(searchByLenght(txt,9));

//EJERCICIO 4
    // 1. Separa la fecha por los guiones.
    // 2. Guardamos cada valor como el dia, mes y año 
    //    formateando el mes ya que enero equivale a mes 0.
    // 3. Creamos una variable Date() con los datos formateados.
    // 4. Establecemos el formato de la fecha total.
    // 5. Guardamos el resultado total como un array dividiendolo
    //    por comas ya que solo nos interesarán las dos primeras partes
    //    del resultado que nos da para que quede en el formato deseado.

    function formatDate(date=""){
    const dateArray = date.split('-');

    const day = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]) - 1;
    const year = parseInt(dateArray[2]);

    const dateaux = new Date(year,month,day);

    const aux = new Intl.DateTimeFormat("es-ES", {
        calendar: "gregory", 
        dateStyle: "full",
        timeStyle: "long",
        timeZone: "Atlantic/Canary"
    });
    let res = aux.format(dateaux).toString().split(',');
    
    return res[0].concat(", ",res[1]);
}
console.log("\nEJERCICIO 4:")
console.log(formatDate("40-5-24"));


//EJERCICIO 5
    //1. Suponiendo que todos los valores son válidos
    //   (se podria usar un filtro en caso contrario),
    //   creamos un array para guardar los valores de 0 al 9
    //2. Llenamos el array con 0.
    //3. Verificamos si nos dió numeros ya que en el ejemplo
    //   se puede apreciar que hay un caso en el que se ejecuta la función
    //   sin ningún parámetro.
    //4. Iteramos cada valor y sumaremos en 1 la posición con el valor del número.
    
function checkNumbers(...arrayNum){
    let res = new Array(10);
    res.fill(0);
    if (arrayNum.length>0) {
        arrayNum.forEach(number => {
            res[number] +=1;
        });
    }
    return res;
}
console.log("\nEJERCICIO 5:")
console.log(checkNumbers(1,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,8));