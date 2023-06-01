function multiplicacion(x, y){
    console.log("Esta es una mult.")
    return x*y;
}

const multiplicacionECMA = (x,y) => {
    console.log("Esta es una mult.")
    return x*y;
}

const multiplicacionECMASimple = (x,y) => x*y
//Solo cuando tenemos una sola linea;

multiplicacion(1,5);
multiplicacionECMA(6,7);

function saludar(nombre){
    return "Hola "+nombre;
}
