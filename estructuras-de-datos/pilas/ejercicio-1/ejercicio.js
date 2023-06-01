let stack = new Stack(); 
stack.push('Manzana')
stack.push('Cebolla')
stack.push('Apio')
stack.push('Naranja')
stack.push('Papaya')
stack.push('Sandía')
stack.push('Melón')

let hanoi = new Stack();
hanoi.push('Azul');
hanoi.push('Verde');
hanoi.push('Amarillo');
hanoi.push('Naranja');
hanoi.push('Rojo');

let mascotas = new Stack();
mascotas.push('Perro');
mascotas.push('Gato');


// Entrada : ultimosElementos(pila, 1)
// ultimosElementos(stack, 4);

function ultimosElementos(pila, num){
    // pila = stack, num = 4
    let aux = new Stack();

    for(let i=0; i<num ; i++){
        const x = pila.pop();
        aux.push(x);
        console.log(x);
    }

    for(let i=0; i<num; i++){
        const y = aux.pop();
        pila.push(y);
        // pila.push(aux.pop());
    }

    aux.print();
    pila.print();
}

