class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  };
  //CONSULTAR EL VALOR DEL PRIMER ELEMENTO
  front() {
    return this.first;
  };
  // CONSULTAR EL VALOR DEL ULTIMO ELEMENTO
  back() {
    return this.last;
  }
  //VERIFICAR QUE LA QUEUE ESTE VACIA
  isEmpty() {
    // debe regresar true o false
  }
  //"ENCOLAR"/AGREGAR UN ELEMENTO AL FINAL 
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  };
  // "DESENCOLAR"/QUITAR UN ELEMENTO AL PRINCIPO
  dequeue() {
  }
};

const myQueue = new MyQueue();
// console.log(myQueue.front());
myQueue.enqueue("Daniel");
myQueue.enqueue("Alicia");
myQueue.enqueue("Alma");

console.log(myQueue);
