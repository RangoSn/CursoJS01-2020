'use strict'
/*
Mostrar todos los numeros impares 
que hay entre 2 numeros.
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
            while(n1<n2){
                n1++;
                if(n1%2 !=0){
                    document.write("El numero "+n1+" es impar <br>");    
                }
            } 
        }else{
            while(n2<n1){
                n2++;
                if(n2%2 !=0){
                    document.write("El numero "+n2+" es impar <br>");    
                }
            }
        }
    }
}