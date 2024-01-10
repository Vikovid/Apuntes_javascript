//Funciones Flecha
/*
    En JavaScript, una fución flecha es una forma más sencilla
    de escribir funciones, es más considerablemente más corta que
    las funciones anterioromente vistas. Claro que estas funciones
    son limitadas, no siempre pueden sustituir a una función tradicional

    La forma general de una función flecha es la siguiente:
    
        const nombreFuncion = (parámetro1, parámetro2, ... parámetroN) => {
            cuerpo de la función
            return resultado;
        }

        nombreFuncion(parámetro1, parámetro2, ... parámetroN);
    
    Un ejemplo para hacer
*/

// Función tradicional
function sumar1(a, b) {
    return a + b;
}
// Función flecha equivalente
const sumar2 = (a, b) => a + b;

console.log("Función Tradicional:",sumar1(1,1));
console.log("Función Flecha:",sumar2(2,2));

//-- Formas de escribir una función flecha

// Con un solo parámetro
/*
    Cuando se pone un solo parámetro en esta función
    no se requiere poner paréntesis.
*/
const cuadrado = x => x*x;
console.log(cuadrado(7));

// Con múltiples parámetros 
/*
    Si se tienen más de un parámetro, la sintaxis requiere 
    del uso de paréntesis
*/
const saludar = (nombre, apellido) => `Hola a todos, mi nombre es: ${nombre} ${apellido}`;
console.log(saludar("Roberto", "Olivares"));

// Sin parámetros
/*
    Si la función no requiere de parámetros, también requiere del
    uso de paréntesis
*/
const saludo = () => "¡Hola! Soy una función flecha :)";
console.log(saludo());

// Con múltiples líneas en el cuerpo de la función
/*
    La función flecha que tenga más de una línea dentro de su
    cuerpo debe estar rodeada por llaves {} y cada instrucción
    debe terminar con un punto y coma ;
*/
const obtenerMensaje = (nombre) => {
    const mensaje = `¡Hola a todos!, soy ${nombre}!`;
    return mensaje;
};
console.log(obtenerMensaje("Álvaro Obregón"));

// Función en una línea
/*
    const obtenerMensaje = (nombre) => `¡Hola, ${nombre}!`;
*/