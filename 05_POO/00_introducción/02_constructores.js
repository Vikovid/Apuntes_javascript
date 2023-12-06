//Constructores
/*
    Los constructores en JavaScript y en general en POO
    son métodos especiales que se utilizan para inicializar un objeto
    de una clase.
*/

//función constructor de objetos
function Persona(nombre = 'Alicia',apellido = 'Rodea',email = 'ejemplo@mail.com'){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

let papa = new Persona('Roberto','Braga','rbraga@gmail.com');
console.log(papa);

let mama = new Persona();
console.log(mama);

/*
    Otra forma muy breve de declarar un objeto usando la siguiente sintaxis

        let objeto = ();

    en vez de usar

        let objeto = new Object();
*/

//--Prototype
/*
    Si se desea agregar otro atributo al método constructor}
    se hace uso de la siguiente sintaxis:
*/
Persona.prototype.tel='5511224455';
console.log(papa.tel);
console.log(mama.tel);

Persona.prototype.miemail = function () {
    return this.email;
}
console.log(papa.miemail());
console.log(mama.miemail());

/*
    Si se desea agregar un getter o setter, entonces se hace
    uso de las siguientes sintaxis.
*/
//--Para definir un getter
Persona.prototype.__defineGetter__("saludo",function(){
    return `Hola soy ${this.nombreCompleto()}`;
});
console.log(mama.saludo);
console.log(papa.saludo);

Persona.prototype.__defineSetter__("setNombre",function(nuevoNombre){
    if(nuevoNombre != '')
        this.nombre = nuevoNombre;
});

console.log(mama.apellido);
mama.setNombre = 'Sarahí';

console.log(mama.saludo);
