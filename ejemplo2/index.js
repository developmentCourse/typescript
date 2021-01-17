"use strict";
var unLet = 5;
var unConst = 4;
console.log(unLet);
console.log(unConst);
//colases
var Docente = /** @class */ (function () {
    function Docente() {
    }
    Docente.prototype.hi = function (name) {
        console.log(name);
    };
    return Docente;
}());
var apDocente = /** @class */ (function () {
    function apDocente() {
    }
    apDocente.prototype.h2 = function (surname) {
        console.log(surname);
    };
    return apDocente;
}());
var docente = new Docente();
var apdocente = new apDocente();
docente.hi("Erisk");
apdocente.h2("juarez");
