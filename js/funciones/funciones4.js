'use strict'
/**
 * Funciones con flecha
 * sustituye la palabra function por una flecha
 */
var pelicula = function(nombre){
    return "La pelicula es:"+nombre;
}

function suma(n1,n2, sumaYmuestra, SumaPor2){
    var suma = n1+n2;
    sumaYmuestra(suma);
    SumaPor2(suma);
    return suma;
}
suma(5,7,(dato)=>{
    console.log("La suma es:",dato);
}, (dato)=>{
    console.log("La suma por 2 es:",(dato*2));
})