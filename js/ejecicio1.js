'use strict'
/*
Programa que pida 2 numero y que nos diga cual es mayor y cual es menor
solo se podran insertar numeros y deberán ser mayores a 0
*/
var num1=prompt('Ingrese el primer numero',0);
var num2=prompt('Ingrese el segundo numero',0);

while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
    num1=prompt("Ingrese el primer numero",0);
    num2=prompt("Ingrese el segundo numero",0);
}
if (num1==num2){
    console.log("los numeros son iguales")
}
else if(num1 > num2){
    console.log("el numero 1 es mayor" +num1)
}
else if(num2>num1){
    console.log("el numero 2 es mayor"+num2)
}
else{
    alert("inserte numeros");
}
