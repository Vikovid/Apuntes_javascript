//Imprimir datos
/*
    Para imprimir datos se hace uso de:
    console.log();

    Dentro de los paréntesis se coloca todo aquello
    que se desea imprimir, por ejemplo, en el ejercicio
    de programación más popular, Hola mundo!.

    console.log("Hola mundo!");
*/

console.log("¡Hola mundo!");

//Variables
/*
    Las variables como en cualquier otro lenguaje de programación
    se encarga de crear un espacio en memoria para almacenar información
    Y como en cada Lenguaje de programación, existen diferentes tipos
    de variables.

    De manera general existen dos maneras de declarar una variable.
    1) var variable = valor;
    2) let variable = valor;
    
    Aunque ambas declaraciones son completamente válidas
    la primera es la declaración de una variable global y la segunda
    es una variable local a un bloque (if, for, while). Además 
    que es necesario mencionar que en la actualidad es más común usar "let"
    que "var", sin embargo se profundizará más adelante al respecto.

    También se pueden declarar constantes, es decir espacios de memoria
    que no cambian su valor durante toda la vida del programa. Y su declaración
    es de la siguiente forma: 

    const variable = valor;
*/

//Sensibilidad a mayúsculas y minúsculas
/*
    Es importante mencionar que JavaScript es sensible a mayúsculas y
    minúsculas, esto quiere decir que aunque la combinación de caracteres
    sea adecuada, si hay diferencia entre mayúsculas y minúsuclas entre
    dos o más cadenas, entonces JavaScript las toma como diferentes

        'javascript' no es lo mismo que 'JavaScript'
*/

//Nombrar variables
/*
    En JS existen reglas y/o recomendaciones para declarar variables

    1. Siempre empezar por "let" o "var" (O cons, si se trata de una constante)
    2. Las variables no pueden ser nombradas con palabras reservadas (if, while, for, etc.)
    3. No utilizar signos de puntuación ni otros símbolos especiales.
    4. Separar las palabras con guiones bajos (_), pero solo cuando se utiliza para separar partes de una
    sola palabra compuesta.
    5. Evitar nombres de funciones o propiedades nativas de JS.
    6. Si el nombre de la variable es muy grande, dividirlo en varias palabras separándolas con guión bajo (_).
    7. Las variables solo aceptan caracteres que estén contenidos en [a-z][A-Z][0-9], aunque no se pueden
    colocar números al inicio del nombre de la variable. También puede contener signos como '-','_','$' y estos 
    últimos, si pueden estar al inicio del nombre de la variable.

        let variable1;
        let _variable1;
        let $variable1;
*/

let numero = 2.3;
console.log(numero);