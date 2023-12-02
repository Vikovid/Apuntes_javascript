//Operadores

// --Operadores aritméticos
// Suma
let suma = 1 + 2;
console.log(suma);

// Resta
let resta = 5 - 3;
console.log(resta);

// Multiplicación
let multiplicacion = 2 * 3;
console.log(multiplicacion);

// División
let division = 10 / 3;
console.log(division);

// Potencia
let potenciacion = 2 ** 3;
console.log(potenciacion);

// Módulo
let modulo = 10 % 3;
console.log(modulo);


// --Operadores de pre-incremento
let a=0;
//Pre-incremento
++a; //se incrementa antes de ser usada
console.log(a);

//Post-incremento
let b = a++; // se incrementa después de ser usado
console.log(b);
console.log(a);

//Pre-decremento
--a; // se decrementa antes de ser usada
console.log(a);

//Post-decremento
let c = a--; // se decrementa después de ser usado
console.log(c);


//--Operadores de asignación
//Operador de asignación
let num = 10;
console.log(10);

//Operador +=
num += 10;
console.log(num);

//Operador -=
num -= 5;
console.log(num);

//Operador *=
num *= 4;
console.log(num);

//Operador /=
num /= 2;
console.log(num);

//Operador %=
num %= 7;
console.log(num);

//Operador **=
num**=2;
console.log(num);


//--Operadores de comparación
/*
    Estos operadores solo retornan valores de tipo Bool
*/
let m = 5;
let n = '5';
console.log(m);
console.log(n);

//Operador == (igual a)
console.log(`¿m es igual a n ? ${( m == n)}`);
/*
    El resultado es true porque el operador toma en cuenta que
    las variables tengan el mismo valor NO toma en cuenta
    el tipo de dato.
*/

//Operador === (estrictamente igual a)
console.log(`¿m es identico a n? ${(m === n)}`);
/*
    El resultado es false porque el operador toma en cuenta que
    las variables tengan el mismo valor y que además
    sean del mismo tipo de dato.
*/

//Operador != (diferente a)
console.log(`¿m es diferente a n? ${(m != n)}`);
/*
    Al igual que '==' este operador solo toma en cuenta
    el valor de la variable descartando su tipo de dato
*/

//Operador !== (estrictamente diferente a)
console.log(`¿m no es identico a n? ${(m !== n)}`);
/*
    En este caso la respuesta es true debido a que se toma 
    en cuenta el tipo de dato
*/

//Operador < (menor que)
console.log(`¿m es mayor que n? ${(m < n)}`);

//Operador <= (menor o igual que)
console.log(`¿m es mayor o igual que n? ${(m <= n)}`);

//Operador > (mayor que)
console.log(`¿m es menor que n? ${(m > n)}`);

//Operador >= (mayor o igual que)
console.log(`¿m es menor o igual que n? ${(m >= n)}`);

//--Operadores lógicos
/*
    Estos operadores igual funcionan con datos de tipo Bool
    y de la misma manera solo retornan datos de ese mismo tipo
*/
//Operador && (and)
/*
    Solo retorna true si ambas variables son true
*/
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Operador || (or)
/*
    Solo retorna false si ambas variables son false
*/
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

//Operador ! (not)
/*
    Intercambia el valor de la variable, si es false, será true
    y viceversa
*/
console.log(!false);
console.log(!true);

//--Precedecncia de operadores
/*
    Cuando se tienen varios operadores en una sentencia
    existe una precedencia o jerarquía que se encarga
    de ejecutar cierto operador antes que otro dicha precedencia
    es:

    1. Paréntesis y Corchetes
    2. Operadores unarios (--,++,!)
    3. Operadores exponentenciales (**)
    4. Multiplicación, división y módulo (*,/,%)
    5. Suma y resta (+,-)
    6. Comparaciones (==,===,!=,!==,<,<=,>,>=)
    7. Logicos (&&,||)
    8. Asignación (+=,-=,,*=,/=, **=,%=)
    9. Ternario (?:)
*/
console.log((1 + 2) ** 3);