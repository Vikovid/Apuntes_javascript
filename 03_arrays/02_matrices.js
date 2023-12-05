//Matrices
/*
    Las matrices son arreglos de dos dimensiones de tamaño nxm.

    Aunque realmente, una manera más sencilla de ver los arreglos
    es pensar en ellos como una lista, cada lista tiene diferentes
    elementos e incluso diferentes tipos de datos entre sí.

    Y si las listas pueden tener elementos de diferente dipo y pueden 
    tener n elementos, entonces las listas pueden contener dentro de
    sí mismas, n listas. 

    Aunque varía mucho dependiendo del caso, la manera general de
    declarar una matriz es la siguiene:

    let matriz = [[fila0],[fila1],[fila2]...[fila_n]];
*/

let matriz = [[],[],[]]; //se declara una matriz vacía
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let matriz2 = matriz;

console.log(matriz[0][1]);
matriz[0][1] = 10;
/*
    En este caso modifica el elemento de la matriz
    que pertenece a la fila 0, columna 1
*/
console.log(matriz[0][1]);

//--Operadores
/*
    Los operadores para las matrices son los mismos que para los arreglos
    sin embargo, hay que tomar en cuenta diferentes factores, hay que
    recordar que se está trabajando con un arreglo de arreglos
*/

//length
console.log(matriz2.length);
/*
    En este caso devuelve el valor de 3 
    por que es un arreglo con tres arreglos 
*/
console.log(matriz2[0].length);
/*
    En este caso devuelve el valor de 3 porque está tomando
    en cuenta el arreglo de la posición 0, es decir está
    midiendo la longitud de la fila 0
*/

//includes()
console.log("¿Se encuentra el elemento 1 en la matriz?",matriz2.includes(1));
/*
    En este caso se devuelve un false, debido a que el element0 1
    como tal no se encuentra en la matriz, recordar que el arreglo
    solo tiene arreglos, entonces se opta por el siguiente método
*/
console.log("¿Se encuentra el elemento 1 en la matriz?",matriz2[0].includes(1));
/*
    En este caso se retorna true ya que se está preguntando
    si en la fila 0, se se encuentra el elemento 1.

    Cabe destacar que se tiene un arreglo de n*m y se busca un elemento
    que no se sabe si está dentro de la matriz, se implementan
    otros métodos, que se verán posteriormente

    Entonces implementando esa lógica, es como se usan los demás operadores
*/