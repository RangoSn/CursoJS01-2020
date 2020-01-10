'use strict'
/*
Usar un bucle para pedir numeros que serán sumados
obteniendo la media hasta tener un numero negativo.
*/
var sum=0;
var cont=0;
var media=0.0;
do{
    var i = parseInt(prompt('Introduce un numero',0));
    if(isNaN(i)){
        i=0;
    }else if(i>=0){
        sum=sum+i;
        cont++;
        media=sum/cont;
    }
}while(i>=0);
alert("El total de la suma es: "+sum+" La media es: "+media);