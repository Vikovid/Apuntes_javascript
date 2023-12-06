//Programación Orientada a Objetos
/*
    La programación orientada a objetos (POO)
    Es un paradigma de programación que se encarga de
    representar objetos por medio de código. Recordar que 
    un objeto es una entidad que tiene estado y comportamiento
    El estado de un objeto se representa através de sus atributos
    mientras que su comportamiento se representa através
    de sus métodos.
*/

//Ejemplo de POO en Java:
/*
    Este tipo de declaración es cuando se declara directamente el objeto
    existen otras formas de declarar objetos, las cuales se verán 
    más adelante.
*/
let persona = {
    //atibutos
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    email: "jperez@gmail.com",
    //metodos
    nombreCompleto: function(){return this.nombre+" "+this.apellido}
}

/*
    Y para acceder a los atributos del objeto
    se hace uso del operador .

    También se pueden modificar los atributos de un objeto
    de manera dinámica:

    persona.nombre = 'Roberto';
    console.log(persona.nombre); 'Roberto'
*/
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);

console.log(persona);

/*
    Para acceder a los métodos, de la misma manera
    se hace uso del operador .

    Para evitar confuciones, se puede pensar en un método como
    una función de un objeto, y en un atributo como un dato 
    primitivo que le pertenece a un objeto.
*/

console.log(persona.nombreCompleto());

//--Otra forma de declarar objetos
/*
    En esta forma de declarar un objeto, se trata de indicar 
    a la memoria que recerbe un espacio para un objeto al cual
    se le agregaran atributos y métodos de manera dinámica
*/

let persona2 = new Object();
persona2.nombre = 'Roberto';
persona2.apellido = 'Gonzalez';
persona2.edad = 30;
persona2.email = 'rgonzales@gmail.com';
persona2.nombreCompleto = function (){ return this.nombre +" "+ this.apellido};

console.log(persona2.nombreCompleto());

/*
    También se puede acceder a una propiedad con una sintaxis similar
    a la de los arreglos
*/

console.log(persona['nombre']);
/*
    Para recorrer todos los atributos de un objeto se puede hacer 
    uso de la sentencia for in, que se trata de un ciclo similar
    al ciclo for, pero enfocado a objetos.

    for (nombrePropiedad in objeto) {

    }
*/

for (const nombreAtributo in persona) {
    console.log(nombreAtributo);
    console.log(persona[nombreAtributo]);
}

//--Agregar y/o eliminar propiedades
/*
    Para agregar o eliminar propiedades de manera dinámica
    es muy simple

    Para agregar una propiedad, solo se declara
        
        persona.direccion = "Calle 1";
    
    Para eliminar una propiedad se hace uso de la sentencia
    delete

        delete persona.email;
*/
persona.direccion = "Calle 1"; //agregando una nueva propiedad
delete persona.email; //Eliminando una propiedad

console.log(persona.direccion);
console.log(persona.email)

/* 
    También se pueden recuperar los atributos de un objeto 
    como si fuera un arreglo.
*/
let arreglo_persona = Object.values(persona);
console.log(arreglo_persona);

/*
    También se puede acceder a los atributos de un objeto
    por medio de JSON
*/
let persona_string = JSON.stringify(persona);
console.log(persona_string);