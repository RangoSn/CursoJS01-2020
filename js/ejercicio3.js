'use strict'
/*
Hacer un programa que muestre 
todos los numeros que hay entre un numero y otro
*/
var n1 = parseInt(prompt('Ingrese el primer numero',0));
if(isNaN(n1)){
    n1 = parseInt(prompt('Ingrese el primer numero',0));
}else{
    var n2 = parseInt(prompt('Ingrese el segundo numero',0));
    if(isNaN(n2)){
        n2 = parseInt(prompt('Ingrese el segundo numero',0));
    }else{
        document.write("<h3> De "+n1+ " a "+n2+" hay los siguientes numero </h3>")
        if(n1<n2){
            for(var i = n1; i<=n2; i++){
                document.write(i+"<br>");
            } 
        }else{
            for(var i = n2; i<=n1; i++){
                document.write(i+"<br>");
            }
        }
    }
}

