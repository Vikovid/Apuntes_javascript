//Arreglos
/*
    Los arreglos son tipos de datos que pueden almacenar
    varios datos en la misma variable. cabe destacar
    que estos arreglos pueden tener varios tipos de datos,
    no necesariamente deben ser todos del mismo tipo.
*/
/*
    Los arreglos tienen índices, es decir que cada elemento 
    del arreglo tiene asignado un lugar, los lugares asignados
    van desde el 0 (el primer elemento), hasta el n-1 (que es el
    último elemento). es decir si el arreglo tiene 10 elementos
    entonces el último índice del arreglo es 9.

    Para acceder a un índice en específico, se hace de la siguiente
    manera:

    - nombre_del_arreglo[índice]

    Si el índice es superior al número de elementos en el arreglo
    se tomará como un dato de tipo undefined
*/
let arreglo = []; //se declara un arreglo vacío
let arreglo2 = [110,'Hola',true]; //se declara un arreglo con elementos

console.log(arreglo2[2]);
console.log(arreglo2[10]);
console.log(typeof arreglo);

//--Operadores con arreglos
//length
console.log("Número de Elementos:",arreglo2.length);

//includes
console.log('¿3 se encuentra en el elemento?',arreglo2.includes(3));

//push
arreglo2.push(false); //Coloca un elemento al final del arreglo
console.log(arreglo2);

//pop
arreglo2.pop(); //quita el último elemento del arreglo
console.log(arreglo2);

//unshift
arreglo2.unshift(5); //coloca un elemento al principio del arreglo
console.log(arreglo2);

//shift
arreglo2.shift(); //Quita el primer elemento del arreglo
console.log(arreglo2);

//splice
/*
    este método en particular toma como parámetros
    - índice
    - cantidad
    - valor1 
    ...
    - valor_n

    es decir, cantidad, es la cantidad de elementos que se
    van a borrar del arreglo. y se van a sustituir por los valores,
    por ello hay que ser congruente entre el número de valores 
    y la cantidad.

    E índice es apartir de donde se van a borrar los datos
*/
console.log(arreglo2);
arreglo2.splice(0,3,'Hola','mundo','!');
console.log(arreglo2);

//--Otros métodos
//reverse
arreglo2.reverse();
console.log(arreglo2);

//sort
arreglo = [1,-10,0,2,-9,3,2,2];
console.log(arreglo);
arreglo.sort();
console.log(arreglo);

//indexOf
console.log(arreglo.indexOf(-10));
console.log(arreglo.indexOf(0));
console.log(arreglo.indexOf(2));

//lastIndexOf()
console.log(arreglo.indexOf(2));
console.log(arreglo.lastIndexOf(2));

//concat()
let arreglo3 = arreglo.concat(arreglo2);
console.log(arreglo3);

//slice()
console.log(arreglo3);
console.log(arreglo3.slice(0,3));

/*
    Otra forma de declarar los arreglos en JavaScript es la 
    siguiente:
    
    let arreglo = Array(elemento1, elemento2, ... elemento_n);
*/