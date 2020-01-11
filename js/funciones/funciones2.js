'use strict'
/**
 * El parametro REST junta los parametros.
 * El parametro SPREAD los separa.
 */
//Recibiendo parametros REST
//Los 3 puntos indican el parametro REST
function frutas (f1,f2,...rest_fruits){
    console.log("Fruta1: "+f1);
    console.log("Fruta2: "+f2);
    console.log("Frutas: "+rest_fruits);
    console.log("Fin de funcion")
}
//Enviando parametros con REST
frutas("Uva","Limon","Pera","Sandia","Cawama");
//Enviando parametros con SPREAD, los 3 puntos indican parametros SPREAD
var fruta=["guayaba","Melon"];
frutas(...fruta,"Perax2")

