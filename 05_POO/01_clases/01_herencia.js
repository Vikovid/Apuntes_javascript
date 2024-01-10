//Herencia

/*
    La herencia es una característica fundamental
    de la programación orientada a objetos, ya que 
    permite crear clases (o "objetos") basados en otros.

    Las clases que heredan sus atributos a otras clases se les llama
    clase padre, y por supuesto quien recibe los atributos
    se le llama clase hija

    Una forma clara de ver la herencia es con la clase persona
    tiene atributos como nombre, apellido y nacionalidad

    Sin embargo si hablamos de profesiones como Médico, Ingeniero, Profesor
    Estamos hablando de clases que heredan los atributos 
    de la clase persona, ya que dentro de sus propios atributos
    también también requieren de otros atributos como nombre
    apellido y nacionalidad. Esto se hace con la finalidad de reciclar código

    Es importante decir que cuando se define el constructor de
    una clase hija es necesario mandar a llamar la función super();
    al inicio del cuerpo del constructor debido a que este será quién
    recupere los atributos de la clase padre
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
}

let persona2 = new Persona('Roberto','Braga');
console.log(persona2);

let trabajador1 = new Profesional(), trabajador2 = new Profesional("Carlos","Durán","Médico Cirujano");
console.log(trabajador1);

//Métodos set
trabajador1.nombre = 'Gustavo';
trabajador1.apellido = 'González';
trabajador1.profesion = 'Ingeniero';

console.log(trabajador1);
console.log(trabajador2);

//Métodos get
console.log(trabajador1.nombre);
console.log(trabajador1.apellido);
console.log(trabajador1.profesion);

//métodos definidos
console.log(persona2.saludar())
console.log(trabajador1.saludar())
console.log(trabajador2.saludar())

//ejemplo de herencia
/*
    La sobreestcitura consiste en mandar a llamar métodos de la clase
    Padre para complementarlo con algún método de la clase hija
    en este caso el método saludar() pertenece a la clase Persona
    y es heredada a la clase Profesional, sin embargo se requiere
    que en el saludo mencione su profesión, por ello se hace uso de la
    siguiente sintaxis.

    saludar(){
        return `${super.saludar()}, y soy ${this._profesion}.`;
    }
*/
console.log(trabajador2.saludar());