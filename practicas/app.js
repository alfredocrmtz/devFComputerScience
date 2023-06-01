let numero=prompt("Ingresa un numero: ");
let cast= Number(numero);
if(cast!=undefined && cast!=null && !isNaN(cast)){
    if(numero.indexOf(".")<=0){
        let valor=Number(numero);
        if((valor%2)==0){
            console.log("Es PAR");
        }else{
            console.log("No es PAR");
        }
    }else{
        console.log("Solo numeros enteros");
    }
}else{
    console.log("Solo se admiten numeros");
}