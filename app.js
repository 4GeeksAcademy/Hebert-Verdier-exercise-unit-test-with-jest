// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
// console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

function fromEuroToDollar(euro){
    return euro*1.07;
}
function fromDollarToYen(dollar){
    let euro = dollar/1.07;
    return euro*156.5;
}
function fromYenToPound(yen){
    let euro = yen/156.5;
    return euro*0.87;
}

console.log(fromYenToPound(3.5));
