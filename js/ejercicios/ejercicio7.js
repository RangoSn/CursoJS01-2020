'use strict'
/*
Tabla de multiplicar con un 
numero introducido en pantalla
*/ 
var n = parseInt(prompt("Ingrese el numero a multiplicar",0));
while (isNaN(n)){
    n = parseInt(prompt("Ingrese el numero a multiplicar",0));
}
for(var i =1; i < 11; i++){
    let res = n*i;
    document.write(res+"<br>");
}