//Static
/*
    El uso de la palabra static es para declarar miembros estáticos
    de una clase es decir, que no serán miembros de un objeto, 
    sino de una clase.

    La manera más sencilla de entender este concepto es en el uso de
    la clase Math, en Math está definida la constante PI, sin embargo
    no es necesario crear un objeto para acceder a dicha constante.

    console.log(Math.PI); 3.141592653589793
*/

//--Ejemplo de static

class Persona{
    //constructor
    constructor(nombre, apellido){
        //atributos de la clase
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //getters
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    //setters
    set nombre(nombre){
        if(typeof nombre == "string" && nombre.trim() != '')
            this._nombre = nombre;
        else
            throw new Error("El nombre de la persona no debe estar vacío y debe ser un dato de tipo string");
    }
    set apellido(apellido){
        if(typeof apellido == "string" && apellido.trim() != '')
            this._apellido = apellido
        else
            throw new Error("El apellido del la persona no debe estar vacío y debe ser un dato de tipo string");
    }

    //Otros métodos
    saludar(){
        return `¡Hola!, mi nombre es: ${this._nombre} ${this._apellido}`; 
    }

    //Método toString
    toString(){
        return `${this._nombre}, ${this._apellido}`;
    }
}
class Profesional extends Persona{
    constructor(nombre, apellido, profesion){
        super(nombre, apellido);
        this._profesion = profesion
    }
    get profesion(){
        return this._profesion;
    }
    set profesion(profesion){
        if(typeof profesion == "string" && profesion.trim() != '')
            this._profesion = profesion;
        else
            throw new Error("La profesión de la persona no debe estar vacío y debe ser un dato de tipo string");
    }

    //Sobreescritura
    saludar(){
        return `${super.saludar()}, y soy ${this._profesion}.`;
    }
    //Sobreescritura del método toString()
    toString(){
        return `${super.toString()}, ${this._profesion}`;
    }
}
class Imprimir{
    static imprimirPersona(persona){
        return `${persona.nombre} ${persona.apellido}`;
    }
}
class ImprimirSaludando extends Imprimir{
    static imprimirPersona(persona){
        return `Hola a todos, mi nombre es: ${super.imprimirPersona(persona)} y soy ${persona.profesion}`;
    }
}

let personita = new Persona('Roberto','Andrade');
let trabajadorcito = new Profesional('Luz María','Reyes','Profesora');

/*
    imprimirPersona al ser un método estático no requiere
    un objeto para que se mande a llamar, simplemente, se 
    manda a llamar dede la clase
*/
console.log(Imprimir.imprimirPersona(personita));
console.log(ImprimirSaludando.imprimirPersona(trabajadorcito));

