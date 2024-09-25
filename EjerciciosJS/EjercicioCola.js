


function queueTime(prodClientes=[],numCajas = 1){
    let res = 0;
    let cajas = new Array(numCajas);
    cajas.fill(0);
    prodClientes.forEach(productos => {
        cajas.sort((a,b)=> a-b);
        cajas[0] += productos;
    });

    
    return cajas[cajas.length-1];
}

console.log(queueTime([5,2,3,6,7,1,4,9,2,6,4],3));