'use strict'
var category = ["Humor", "Fumadores","Porno"];
var pelis = ["1","2","3"];
var cine = [category,pelis];
console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][1]);
/**
 * Insertar en arreglo
 */
pelis.push("4");
console.log(pelis);
var elemento = prompt("Introduce una peli","jiji");
while(elemento != "acabar"){
    var elemento = prompt("Introduce una peli","jiji");
    pelis.push(elemento);
}
console.log(pelis);
/**
 * Borrar de arreglo
 */
pelis.pop();
console.log(pelis);
/**
 * Index del array
 */
var indice = pelis.indexOf("1");
console.log(indice);
pelis.splice(indice,1);
console.log(pelis);
/**
 * Pasar un array a texto
 */
var txt = pelis.join();
console.log(txt);
/**
 * Pasar texto a array
 */
var cadena = "1,2,3,4";
var cad_array=cadena.split();
console.log(cad_array);
/**
 * Ordenar arreglos
 */
category.sort();
console.log(category);
category.reverse()
console.log(category);

