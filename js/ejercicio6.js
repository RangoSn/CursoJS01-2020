'use strict'
/*
Saber si un numero es par o impar
*/
var n = parseInt(prompt("Ingrese un numero"));
while(isNaN(n)){
    n = parseInt(prompt("Ingrese un numero"));
}
if(n%2 == 0){
    document.write("EL numero " +n+ " es par")
}else{
    document.write("EL numero " +n+ " es impar")
}