'use strict'
/*
Muestre los numero divisores de un numero
que se introduce
*/
var n = parseInt(prompt("Mete un numero",1));
for (var i = 1; i<=n; i++){
    if(n%i == 0){
        document.write("Divisor"+i+"<br>");
    }
}
