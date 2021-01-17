"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Herencia
var People = /** @class */ (function () {
    function People(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    //metodos
    People.prototype.print = function () {
        console.log('Impreisin desde la clase');
        console.log('Nombre completo: ' + this.firstname + " " + this.lastname);
        console.log('Edad: ' + this.age);
    };
    return People;
}());
//clase hija
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstname, lastname, age, carnetUniversitario) {
        var _this = _super.call(this, firstname, lastname, age) || this;
        _this.carnetUniversitario = carnetUniversitario;
        return _this;
    }
    return Student;
}(People));
var erickJuarez = new Student('Erick', 'Juarez', 24, '10507307pt');
erickJuarez.print();
console.log('Impresion directamente con los atributos');
erickJuarez.firstname = "Erick";
console.log('Nombre: ' + erickJuarez.firstname);
erickJuarez.lastname = "Juarez";
console.log('Apellido: ' + erickJuarez.lastname);
erickJuarez.age = 24;
console.log('Edad: ' + erickJuarez.age);
erickJuarez.carnetUniversitario = "10507307pt";
console.log('Nro. de carné Universitario: ' + erickJuarez.carnetUniversitario);
