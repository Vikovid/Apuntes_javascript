//Ciclos o Bucles
/*
    Los ciclos básicamente 
    son una acción que se repetirá siempre y cuando se cumpla
    una condición. Por ende también pueden haber ciclos indeterminados
    e interrumpir ciclos.
*/

let a = 0;

//--Ciclo while
while(a<=10){
    console.log(a);
    a++;
}

//--Ciclo do-while
/*
    Este ciclo básicamente es el mismo que el ciclo while
    excepto por el detalle que este se ejecuta por lo menos
    una vez, posteriormente se verifica si se cumple la condición.
*/
do {
    console.log(a);
} while (a<=10);
/*
    En este caso en particular no se uso el decremento en la variable
    ya que desde un inicio no se cumplió la condición, sin embargo, 
    recordar que este ciclo ejecuta por primera vez una acción
    y después verifica si se cumplió la condición.
*/

//--Ciclo for
/*
    Esta sentencia tiene la siguiente forma: 
    for(){
        ...
    }

    los parámetros de la sentencia se especifícan de la siguiente manera
    1. se inicializa el iterador
    2. se comprueba la condición del bucle
    3. se incrementa/decrementa el iterador
*/
for(let i=0;i<5;i++){
    console.log("Hola");
}