/*
    JavaScript tiene dentro de sí otras funciones ya definidas
    que pueden ser de mucha ayuda.
*/

//--Obtener el largo de una cadena
let nombre = "Juan";
console.log(nombre.length);

//--Subcadenas
let frase = "Esto es un ejemplo de subcadena en javascript.";
console.log(frase.substring(10, 31)); 

//--Concatenación de cadenas
let saludo = "Hola ";
saludo += "mundo!";
console.log(saludo);

//--Convertir cadena a número
let numCadena = "500";
numCadena = parseInt(numCadena)
console.log(`La cantidad: ${numCadena} es de tipo ${typeof numCadena}`);

//--Convertir de número a cadena
let a = 10, b = 20;
//Existen dos maneras de incorporar 
a = String(a);
b = b.toString();
console.log(`La variable ${b} es de tipo ${typeof b}`);

//--Valor absoluto
let numero = -100;
console.log(numero);

numero = Math.abs(numero);
console.log(numero);

//--Redondeo
/*
    Redondea al número entero más cercano
*/
let num = 7.5;
console.log(Math.round(num));

//--Truncado
/*
    Elimina los decimales de un número
*/
console.log(Math.trunc(num));