// RECORRER LOS DATOS DESORDENADOS

// SE ASEGURA QUE LOS VALORES EN LA IZQUIERDA, SEAN LOS VALORES MAS CHICOS Y
// DE LA DERECHA LOS MAYORES, HAY QUE PREGUNTAR DESDE LA DERECHA SI SOY MAS CHICO
// QUE ALGUN NUMERO EN LA IZQUIERDA, SI ESO OCURRE ME INSERTO EN ESA POSICION

function insertionSort(numeros) {

  for (let i = 0; i < numeros.length; i++) {

    let j = i;
    while (j >= 1 && numeros[j] < numeros[j - 1]) {
      [numeros[j - 1], numeros[j]] = [numeros[j], numeros[j - 1]];
      j--;
    }
  }

  return numeros;
}

console.log(insertionSort([3, 0, 1, 9]));