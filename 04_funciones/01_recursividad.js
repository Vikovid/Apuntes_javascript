//Recursividad
/*
    En escencia, la recursividad es una técnicap para resolver problemas
    que consiste en una función que se llame a sí misma
    hasta que se haya resuelto el problema.

    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
*/

//--Ej.1 imprimir los números de manera descendente de n a 1
function kaboom(n){
  if(n === 1)
    console.log(n,"... ¡Kaboom!");
  else{
    console.log(n);
    kaboom(n-1);
  }
}
kaboom(5);

//--Ej.2 imprimir una pirámide de altura n
function escaleraRecursiva(n, nivel = 1){
  if(nivel > n)
    return;

  console.log(("-".repeat(n-nivel))+("#".repeat(nivel*2-1))+("-".repeat(n-nivel)));
  escaleraRecursiva(n, nivel + 1);
}
escaleraRecursiva(5);