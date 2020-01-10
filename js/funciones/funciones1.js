'use strict'
/**
 * Una función es una agrupación reutilizable de un conjunto 
 * de instrucciones. 
 */
var n1 = parseInt(prompt("Ingrese el primer numero", 0));
var n2 = parseInt(prompt("Ingrese el segundo numero", 0));
while (isNaN(n1) || isNaN(n2)){
    n1 = parseInt(prompt("Ingrese el primer numero", 0));
    n2 = parseInt(prompt("Ingrese el segundo numero", 0));
}
calculadora(n1,n2, true);
function calculadora(n1,n2, result=false){
    if(result==true){
        correct(n1,n2);
    }else{
        return alert("Error");
    }   
}
function correct(n1,n2){
    document.write("Suma : " +(n1+n2)+"<br>");
    document.write("Resta : " +(n1-n2)+"<br>");
    document.write("Division : " +(n1/n2)+"<br>");
    document.write("Multiplicación : " +(n1*n2)+"<br>");
}
