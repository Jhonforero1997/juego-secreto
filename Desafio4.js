let listaGenerica = [];

let lenguagesDeProgramacion = ['JavaScript', 'C' , 'C++' , 'Kotlin' , 'Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostarLenguagesSeparadamente();

function mostarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--){
    console.log(lenguagesDeProgramacion[i]);
  }
}
mostarLenguagesReversoSeparadamente();

function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Media:', media);

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista [0];

    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if  (lista[i] < menor) {
        menor = lista[i];
      }
    }

    console.log('Mayor:',mayor);
    console.log('menor:', menor);
}

let numero =[15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let Numero = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);

  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
      throw new Error("Las listas deben tener el mismo tamaño");
    }
  
    let resultado = [];
    for (let i = 0; i < lista1.length; i++) {
      resultado.push(lista1[i] + lista2[i]);
    }
  
    return resultado;
  }
  
  // Ejemplo de uso:
  const lista1 = [1, 2, 3];
  const lista2 = [4, 5, 6];
  const Suma = sumarListas(lista1, lista2);
  console.log(suma); // Salida: [5, 7, 9]
  
  function cuadradoDeNumeros(lista) {
    return lista.map(function(numero) {
      return numero * numero;
    });
  }
  
  // Ejemplo de uso:
  const Numeros = [1, 2, 3, 4, 5];
  const cuadrados = cuadradoDeNumeros(numeros);
  console.log(cuadrados); // [1, 4, 9, 16, 25]
  