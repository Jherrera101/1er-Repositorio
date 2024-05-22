import * as rls from 'readline-sync';

let nroMes : number = rls.questionInt("indique el nro de mes que desea saber: ");

let nombreMes : string []= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let indice: number = nroMes - 1;

console.log ("El mes seleccionado es: " +nombreMes[indice]);




