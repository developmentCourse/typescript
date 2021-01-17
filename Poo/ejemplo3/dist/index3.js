"use strict";
var Studen = /** @class */ (function () {
    //constructores
    function Studen(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    // metodos
    Studen.prototype.printStuden = function () {
        console.log('Impresionde la clase :v');
        console.log('Nombre completo: ' + this.firstname + " " + this.lastname);
        console.log('Edad: ' + this.age);
    };
    return Studen;
}());
var erickJuarez = new Studen('Erick', 'Juarez', 24);
erickJuarez.printStuden();
console.log('Impresion directa con los atributos');
erickJuarez.firstname = "Vidal";
console.log('Nombre: ' + erickJuarez.firstname);
erickJuarez.lastname = "Choque";
console.log('Apellido: ' + erickJuarez.lastname);
erickJuarez.age = 24;
console.log('Años: ' + erickJuarez.age);
