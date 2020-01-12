'use strict'
/**
 * Funciones para procesar texto
 */
var n=444;
var t="Hola   jjajajajajajaj Hola";
var t2="Buenas tardes";

n.toString();
/**
 * Busqueda en texto.
 */
var busqueda =t.indexOf("l");
var busqueda2 =t.search("a");
var busqueda3 =t.match("Hola");
var busquedaRegular =t.match(/Hola/g);
var busqueda4 =t.substr(5,10);
var busqueda5 =t.charAt(11);
var busqueda6 =t.startsWith("Hola");
var busqueda7 =t.endsWith("Hola");
var busqueda8 =t.includes("Hola");
console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busquedaRegular);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
/**
 * Modificación de texto
 */
var Replace = t.replace("jjajajajajajaj","no da risa");
var Replace2 = t.slice(10,12);
var Replace3 = t.split();
var Replace4 = t.split(" ");
var Replace5 = t.trim();
console.log(Replace);
console.log(Replace2);
console.log(Replace3);
console.log(Replace4);
console.log(Replace5);
/**
 * Plantillas de texto
 */
var nombre = prompt("Nombre");
var app = prompt("Apellidos");
var text = "Mi nombre es "+nombre+ "Mis apellidos son "+app;
var plantilla = `
    <h1>Hola</h1>
    <h3>Mi nombre es : ${nombre}</h3>
    <h3>Mis apellidos son: ${app}</h3>
`;
document.write(plantilla);
