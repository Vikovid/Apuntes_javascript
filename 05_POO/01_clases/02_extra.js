//Clase Object
/*
    Ya quedó claro que cuando se desea heredar los atributos de
    una clase, se hace uso de la palabra reservada extends.

    Sin embargo, siempre que se crea una clase, automáticamente se
    heredan atributos y métodos de la clase Object.
*/

//Método toString()
/*
    Esta clase se determ
*/
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

let persona1 = new Persona('Alicia','Villareal');
let trabajador1 = new Profesional('Robert','Johnson','Músico');

console.log(persona1.toString());
console.log(trabajador1.toString());