"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nroMes = rls.questionInt("indique el nro de mes que desea saber: ");
var nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var indice = nroMes - 1;
console.log("El mes seleccionado es: " + nombreMes[indice]);
