'use strict'
/**
 * Calculadora que pida 2 numeros
 * Solo numeros.
 * Se suman, se restan, se multiplican y se dividen
 */
var n1 = parseInt(prompt("Ingrese el primer numero", 0));
var n2 = parseInt(prompt("Ingrese el segundo numero", 0));
while (isNaN(n1) || isNaN(n2)){
    n1 = parseInt(prompt("Ingrese el primer numero", 0));
    n2 = parseInt(prompt("Ingrese el segundo numero", 0));
}
var r = "Suma : " +(n1+n2)+"<br>"+
        "Resta : " +(n1-n2)+"<br>"+
        "Division : " +(n1/n2)+"<br>"+
        "Multiplicación : " +(n1*n2)+"<br>";

document.write(r)
        