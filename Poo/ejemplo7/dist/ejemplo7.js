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
var Pople = /** @class */ (function () {
    function Pople(firtname, lastname, age) {
        this._firtname = firtname;
        this.lastname = lastname;
        this.age = age;
    }
    //metodos
    Pople.prototype.print = function () {
        console.log('Impresion desde la clase');
        console.log('Nombre Completo: ' + this._firtname + " " + this.lastname);
        console.log('Edad: ' + this.age);
    };
    Object.defineProperty(Pople.prototype, "firstname", {
        get: function () {
            return this._firtname;
        },
        set: function (firstname) {
            this._firtname = firstname;
        },
        enumerable: true,
        configurable: true
    });
    return Pople;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstname, lastname, age, carnetUniversitario) {
        var _this = _super.call(this, firstname, lastname, age) || this;
        _this._carnetUniversitario = carnetUniversitario;
        return _this;
    }
    Student.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log('CU: ' + this._carnetUniversitario);
    };
    Object.defineProperty(Student.prototype, "carnetUniversitario", {
        get: function () {
            return this._carnetUniversitario;
        },
        set: function (carnetUniversitario) {
            this._carnetUniversitario = carnetUniversitario;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(Pople));
var erickJuarez = new Student('Erick', 'Vidal', 24, '10507307pt');
erickJuarez.print();
console.log('Impresion directamnte  con los atributos');
erickJuarez.firstname = "Vidal";
console.log('Nombre: ' + erickJuarez.firstname);
erickJuarez.lastname = "Choque";
console.log('Apellidos: ' + erickJuarez.lastname);
erickJuarez.age = 24;
console.log('Edad: ' + erickJuarez.age);
erickJuarez.carnetUniversitario = "10507307pt";
console.log('CU: ' + erickJuarez.carnetUniversitario);
