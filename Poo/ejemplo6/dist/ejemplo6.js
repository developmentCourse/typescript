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
var People = /** @class */ (function () {
    function People(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    People.prototype.print = function () {
        console.log('Impresion desde la clase');
        console.log('Nombre Completo: ' + this.firstname + " " + this.lastname);
        console.log("Edad: " + this.age);
    };
    People.prototype.getFirstname = function () {
        return this.firstname;
    };
    People.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    return People;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstname, lastname, age, carnetUniversitario) {
        var _this = _super.call(this, firstname, lastname, age) || this;
        _this.carnetUniversitario = carnetUniversitario;
        return _this;
    }
    Student.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log('CU: ' + this.carnetUniversitario);
    };
    Student.prototype.getCarnetUniversitario = function () {
        return this.carnetUniversitario;
    };
    Student.prototype.setCarnetUniversitario = function (carnetUniversitario) {
        this.carnetUniversitario = carnetUniversitario;
    };
    return Student;
}(People));
var erickJuarez = new Student('Erick', 'Vidal', 24, '10507307pt');
erickJuarez.print();
console.log('Impresion directamente con los atributos');
erickJuarez.setFirstname("vidal");
console.log('Nombre: ' + erickJuarez.getFirstname());
erickJuarez.lastname = 'Choque';
console.log('Apellido: ' + erickJuarez.lastname);
erickJuarez.age = 24;
console.log('Edad: ' + erickJuarez.age);
