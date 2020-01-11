'use strict'
/**
 * Funciones anonimas
 * Funcion que no tiene nombre
 */
var pelicula = function(nombre){
    return "La pelicula es:"+nombre;
}
/**
 * Callbacks
 * Es una función dentro de otra función
 */
function suma(n1,n2, sumaYmuestra, SumaPor2){
    var suma = n1+n2;
    sumaYmuestra(suma);
    SumaPor2(suma);
    return suma;
}
suma(5,7,function(dato){
    console.log("La suma es:",dato);
}, function(dato){
    console.log("La suma por 2 es:",(dato*2));
})