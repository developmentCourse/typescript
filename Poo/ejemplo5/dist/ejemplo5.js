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
var Peoplee = /** @class */ (function () {
    function Peoplee(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Peoplee.prototype.print = function () {
        console.log('Impresionde la clase');
        console.log('Nombre completo: ' + this.firstname + " " + this.lastname);
        console.log('Edad' + this.age);
    };
    return Peoplee;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(firstname, lastname, age, carnetUniveritario) {
        var _this = _super.call(this, firstname, lastname, age) || this;
        _this.carnetUniversitario = carnetUniveritario;
        return _this;
    }
    Students.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log('CU: ' + this.carnetUniversitario);
    };
    return Students;
}(Peoplee));
//no se entendio claramente 
