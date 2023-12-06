//Call y Apply
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return `${this.nombre}  ${this.apellido}`;
    },
    presentacion: function(telefono){
        if(telefono != '')
            return `Hola, soy ${this.nombre} ${this.apellido}  y mi número telefónico es: ${telefono}`
        else
            throw new Error("El parámetro recibido no puede estar vacío");
    }
}
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

//--call()
console.log(persona1.nombreCompleto());
/*
    En este caso se hace uso de la función 'nombreCompleto'
    que está definida en persona1 Usando los datos de persona2
*/
console.log(persona1.nombreCompleto.call(persona2));

/*
    En el caso anterior es cuando la función no tiene parámetros
    si embargo si la función a la que se desea llamar tiene parámetros
    Entonces la función tiene la siguiente sintaxis.
*/
console.log(persona1.presentacion.call(persona2,5520012123));

//--ppply()
/*
    Apply es un método que funciona para lo mismo que call();
    sin embargo la diferencia radica en la forma en que se pasan los 
    argumentos.

    Cuando la función a llamar no tiene argumentos se puede decir que
    el funcionamiento es exactamente el mismo, sin embargo, cuando
    la función necesita recibir parámetros en vez de pasar uno a uno
    se pasan dos variables
*/
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.apply(persona2));
console.log(persona1.presentacion.apply(persona2,[5574757445]));