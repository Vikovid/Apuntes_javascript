//Clases
/*
    Las clases son parte fundamental de la programación
    orientada a objetos, es parte importante de un concepto llamado
    abstracción, dicho concepto se refiere a representar un objeto
    por medio de sus atributos más notables.

    Por ejemplo si se tiene una paleta helada, sus atributos más notables
    son el sabor, el volúmen en ml. y la cubierta. Entonces en la 
    clase PaletaHelada existen dichos atributos, los cuales pueden variar
    o quizá algunos ya estén definidos, pero el resultado siempre será una paleta

    En resúmen, se puede pensar en una clase como una plantilla para
    crear más objetos.

    Las clases tienen las siguientes características
    - nombre de la clase (Se recomienda que el nombre de la 
    clase empiece con mayúsculas).
    - atributos.
    - métodos.
    - constructor: este es un método sin embargo, este método se manda
    a llamar en automático cada que se crea un objeto.
    
    Si no se define un método constructor, JavaScript agrega un constructor
    vacío en automático
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
}

let persona1 = new Persona(), persona2 = new Persona('Roberto','Braga');

console.log(persona1);
console.log(persona2);

//--métodos get
console.log(persona2.nombre);

//--método set
console.log(persona1.apellido);
console.log(persona1.nombre);
//LLamada a set
persona1.apellido = "Pérez";
persona1.nombre = "José";
console.log(persona1.apellido);
console.log(persona1.nombre);