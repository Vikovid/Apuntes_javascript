//Métodos Get y Set
/*
    También conocidos como getters y setters
    son métodos que se utilizan para controlar el acceso a 
    las propiedades de un objeto.

    Básicamente el método get se encarga de obtener el valor
    de un atributo

    Mientras que el método set se encarga de modificar el valor 
    de un atributo

    Si bien es cierto que eso se puede hacer de manera explícita
    accediendo a los atributos por medio del operador punto.
    también es cierto que esta pŕactica no es muy recomendable
    ya que se debe de restringir el acceso a los atributos del
    método.
*/
let persona = {
    //atibutos
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    email: "jperez@gmail.com",
    idioma: "es",

    //metodos
    get saludo(){
        return `Hola, mi nombre es: ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get lang(){
        return this.idioma.toUpperCase();
    }
}

console.log(persona.saludo);
console.log(persona.lang);

persona.lang = 'en';
console.log(persona.lang);