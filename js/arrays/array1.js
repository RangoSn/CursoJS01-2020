'use strict'
/**
 * Los arreglos son colecciones de datos.
 */
var nombre = "Eduardo";
var nombres = ["Lalo","Piri","Snoop",52, true];
var category = ["Humor", "Fumadores","Porno"];
var lenguajes = new Array("JAVA", "PHP", "JS");
console.log(nombres);
console.log(nombres.length);
/*
Capturar arrays
*/
//var elemento = parseInt(prompt("Que elemento quieres",0));
//while(elemento>=nombres.length){
//    elemento = parseInt(prompt("Que elemento quieres",0));
//}
//alert(nombres[elemento]);

/**
 * Recorrer arrays
 */
document.write("<h1>Lenguajes de programación</h1>")
document.write("<ul>");
for (let index = 0; index < lenguajes.length; index++) {
    document.write("<li>"+lenguajes[index]+"</li>");    
}
document.write("</ul>");
/**
 * Recorrer con foreach
 */

document.write("<h1>Programadores</h1>")
document.write("<ul>");
nombres.forEach((elemento,index,data)=>{
    console.log(data);
    document.write("<li>"+index+"-"+elemento+"</li>");    
});
document.write("</ul>");
/**
 * Recorrer con forin
 */

document.write("<h1>Categorias</h1>")
document.write("<ul>");
for(let categoria in category){
    document.write("<li>"+category[categoria]+"</li>");    
}
document.write("</ul>");
/**
 * Busquedas en arrays
 */
var busqueda = category.find(categoria => categoria == "Humor");
var busqueda2 = category.findIndex(categoria => categoria == "Humor");
console.log(busqueda);
console.log(busqueda2);

var precios = [2,3,10];
var busqueda3 = precios.some(precio => precio > 10);
console.log(busqueda3);


