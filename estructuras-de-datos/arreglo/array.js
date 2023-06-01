// ABSTRACCION
// indices
// datos
// longitud/cantidad de elementos/length
class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  //OBTENER UN ELEMENTO, DADA UNA POSICION/INDICE
  get(index) {
    return this.data[index]
  }
  //AGREGAR UN ELEMENTO AL FINAL DE MI ARREGLO
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }
  // ELIMINAR EL ULTIMO ELEMENTO DE MI ARREGLO
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
  // AÑADIR UN ELEMENTO AL PRINCIPIO
  unshift(item) {
    // ACCEDER AL ULTIMO ELEMENTO
    const lastItem = this.data[this.length - 1]

    // RECORRER LOS VALORES DEL ULTIMO Y PRIMER ELEMENTO
    for (let i = 0; i <= this.length - 1; i++) {
      this.data[i + 1] = this.data[i]
    }

    // ACTUALIZAR LOS VALORES DEL ULTIMO Y EL PRIMER ELEMENTO
    this.data[this.length] = lastItem
    this.data[0] = item

    // ACTUALIZAR LA CANTIDAD DE ELEMENTOS EN MI LISTA Y RETORNAR EL VALOR QUE ACABO DE AGREGAR
    this.length++
    return item
  }

  // CONSTRUIR EL METODO PARA ELIMINAR EL PRIMER ELEMENTO
  shift(item) {
    // code...
  }
}

const list = new MyArray()

list.push("Pedro")
list.push("Alma")
list.pop()
list.unshift("Celina")
console.log(list.get(1))

console.log(list);