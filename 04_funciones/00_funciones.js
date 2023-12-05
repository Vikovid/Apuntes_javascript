//Funciones
/*
    Las funciones en JavaScript, y de manera general,
    en cualquier otro lenguaje de programación, se trata de 
    pequeños bloques de código que se encargan de realizar una
    tarea en específico.

    Las funciones resultan bastante útiles para crear módulos en
    un algoritmo, para reciclar código, y en general para dividir
    el problema a resolver en pequeños subproblemas y hacer la
    solución más sencilla.

    La forma de declarar una función en JavaScript es la siguiente

        function nombre_funcion (parámetros) {
            ... cuerpo de la función

            return valor;
        }

    Como se puede ver en el cuerpo de la función, termina con una
    sentencia return, la cual regresa un valor e indica que es el final
    de la función. Sin embargo, no siempre es necesario hacer uso de
    esta sentencia. 
    
    --- De manera general si el bloque de código retorna un valor
    se le llama FUNCIÓN, pero si no lo hace, se le llama PROCEDIMIENTO ---

    --- Procedimiento
    function mostrar_mensaje(mensaje){
        console.log(`Su mensaje es: ${mensaje}`);
    }

    --- Función
    function sumar_numeros(a,b,c){
        return a+b+c;
    }

    Es importante tener en cuenta que existen funciones ya instaladas
    en JavaScript, entre otros tipos de funciones, pero esos temas 
    se verán más adelante.
*/
//--- Procedimiento
function mostrar_mensaje(mensaje){
    console.log(`Su mensaje es: "${mensaje}"`);
}
//--- Función
function sumar_numeros(a,b,c){
    return a+b+c;
}

console.log(sumar_numeros(7,7,7));
mostrar_mensaje("Este es mi primer procedimiento");

//--Paso por valor y por referencia
/*
    Cuando se pasan valores (Parámetros de la función o procedimiento)
    se debe tomar en cuenta que existen formas de pasar valores, es decir
    Paso por referencia y paso por valor

    1. Paso por valor: se pasa una copia del valor del parámetro a la función. 
    Cualquier cambio que se realice en la copia del parámetro dentro de 
    la función no afectará al valor original del parámetro 
    fuera de la función. Esta operación afecta a los datos de tipo primitivo

    2. Paso por referencia: se pasa la referencia del parámetro a 
    la función. Cualquier cambio que se realice en el parámetro 
    dentro de la función afectará al valor original del 
    parámetro fuera de la función. Esta Operación afecta a los datos de tipo
    Object
*/
function cambiar_primitivo(variable){
    variable = 10000;
}
function cambiar_object(variable){
    variable[0] = 777;
}

let tipo_primitivo = 10;
console.log(`Antes de llamar la función: ${tipo_primitivo}`);
cambiar_primitivo(tipo_primitivo);
console.log(`Después de llamar a la función: ${tipo_primitivo}`);

let tipo_objeto = [10];
console.log(`Antes de llamar la función: ${tipo_objeto}`);
cambiar_object(tipo_objeto);
console.log(`Después de llamar a la función: ${tipo_objeto}`);

//--Paso de cadenas a funciones
/*
    En el caso de las cadenas, su comportamiento es similar al de
    los datos primitivos, ya que las cadenas son inmutables
    ante funciones, la única manera de cambiar el valor de una
    cadena es con el operador de asignación (=).
*/
function paso_de_cadenas(cadena){
    cadena = "Hola fui cambiada :)";
}

let prueba_cadena = "Hola :c";
console.log(`Antes de llamar la función: "${prueba_cadena}"`);
paso_de_cadenas(prueba_cadena);
console.log(`Después de llamar a la función: "${prueba_cadena}"`);