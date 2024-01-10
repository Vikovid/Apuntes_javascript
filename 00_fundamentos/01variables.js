//Tipos de datos Primitivos

//Numérico
let edad = 25;
console.log(edad);
console.log(typeof edad);

//String
let nombre = "Victor";
console.log(nombre);
console.log(typeof nombre);

//Función replace
let cadena = "Hola Mundo desde Visual Studio Code";
console.log(cadena);
let nuevaCadena = cadena.replace("Visual Studio Code","JavaScript");
console.log(nuevaCadena);

//Boolean
let esMayorDeEdad = true;
console.log(esMayorDeEdad);
console.log(typeof esMayorDeEdad);

//Null
let noExiste = null;
console.log(noExiste);
console.log(typeof noExiste);

//Undefined
let sinDefinir;
console.log(sinDefinir);
console.log(typeof sinDefinir);

//Bigint
let numeroMuyGrande = 12345678901234567890n;
console.log(numeroMuyGrande);
console.log(typeof numeroMuyGrande);

//typeof
/*
    typeof es una función que retorna el tipo de dato de una variable.
    Es necesario recordar que las variables pueden cambiar de tipo de dato
    de manera dinámica, por lo que el tipo de dato puede cambiar sin
    ningún problema, aunque lo ideal es que el tipo de dato
    sea acorde con el nombre de la variable, solo como una recomendación.
*/
let ejemplo = 12;
console.log(typeof ejemplo);

ejemplo = 'Hola';
console.log(typeof ejemplo);

//Hoisting
/*
    La manera más fácil de entender este concepto es primero
    se asigna valor a lavariable, después se declara, es decir

        var x; //se define la variable
        x = 5; //se le da un valor

    Entonces se puede tener este caso: 
        miPrimerHoisting = 20; //se asigna valor

        console.log(miPrimerHoisting);

        var miPrimerHoisting; Se define variable

    Es importante decir que esto solo es posible si se declara
    con "var", además de que el Hoisting puede resultar confuso
    para programadores novatos.

    El hoisting no funciona para clases.
*/

miPrimerHoisting = 20;
console.log(miPrimerHoisting);
var miPrimerHoisting;

//Constantes
/*
    Se puede pensar en una constante como una variable con 
    un valor que no va a cambiar durante el ciclo de vida del programa
    o incluso del script.

    Las reglas para nombrar las constantes son exactamente las mismas 
    que las de las variables, salvo que estas se declaran con 'const'
    antes del nombre. Y se recomienda que se nombren en mayúsculas

    const PI = 3.141592653589;
    console.log(PI);
    PI = 10; //ERROR
*/

const PI = 3.141592653589;
console.log(PI);
PI = 10;

