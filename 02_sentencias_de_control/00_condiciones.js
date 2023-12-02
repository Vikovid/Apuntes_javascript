//Sentencias condicionales
//--Sentencia if
/*
    Esta sentencia necesita de un valor true
    para que pueda ser ejecutada, es decir
    si se cumple la condición, entonces se ejecuta el bloque
    de código correspondiente.
*/
let num = 10;
if (num % 2 == 0){
    console.log('Es un número par');
}

//--Sentencia if-else
/*
    Esta sentencia es complemento de la sentencia if
    se ejecuta en caso de que la sentencia if no se cumpla,
    Por lo que no se puede declarar sola.
*/
if (num === '10') {
    console.log('Es una cadena');
} else{
    console.log('Es un número');
}

//--Sentencia else-if
/*
    Esta sentencia es un complemento de la sentencia if
    por lo que se tienen los siguientes casos:
    if{

    }else if(){

    }


    if {

    }
    else if(){

    }else if() {

    }
    ...
    else {

    }

    es decir se puede tener cuantos bloques else if como se desee
    pero se recomienda cerrar con un bloque else
*/
if (num > 0) {
    console.log("El número es positivo");
} else if (num === 0) {
    console.log("El número es cero");
} else {
    console.log("El número es negativo");
}

//--Operador ternario
/*
    Este operador se trata de una setencia if-else
    pero simplificada, su sintaxis es la siguiente

    condición ? acción1:acción2;

    en donde acción1 se ejecuta si la condición se cumple
    y acción2 se ejecuta cuando no se cumple.
*/
console.log('¿5 es un múmero par? \n'+(5%2 == 0 ? 'Sí lo es :)':'No lo es :('));

//--Sentencia switch
/*
    Esta sentencia es un bloque de código similar a la sentencia else if
    de tal manera que su sintaxis es la siguiente:

    switch (expresion) {
        case valor1:
            ...
            break;
        case valor2:
            ...
            break;
        .
        .
        .
        default:
            ...
    }

    Se pueden tener tantas condiciones se desee,
    pero es importante recalcar que cada bloque de código
    de cada caso debe terminar con la sentencia break; 
    para que rompa el ciclo. Esto no es necesario para el bloque
    default, ya que es te bloque se ejecuta si ninguna de las condiciones
    se cumplió, es decir, esta es la última opción.
*/
let diaSemana = "lunes";

switch (diaSemana) {
    case "lunes":
        console.log("El día de la semana es lunes");
        break;
    case "martes":
        console.log("El día de la semana es martes");
        break;
    case "miércoles":
        console.log("El día de la semana es miércoles");
        break;
    default:
        console.log("El día de la semana no es válido");
}
