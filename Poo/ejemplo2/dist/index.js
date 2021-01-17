"use strict";
var Video = /** @class */ (function () {
    function Video(title) {
        console.log(title);
    }
    return Video;
}());
var myVideo = new Video("Constructor");
var Student = /** @class */ (function () {
    function Student(firstname, lastname, age) {
        console.log('Nombre: ' + firstname);
        if (lastname != undefined) {
            console.log('Apellidos: ' + lastname);
        }
        if (age !== undefined) {
            console.log('Edad' + age);
        }
    }
    return Student;
}());
var Erick = new Student('Erick');
var ErickJuarez = new Student('Erick', 'Juarez');
var student = new Student('Erick', 'Juarez', 24);
//parametros por defecto
var Welcome = /** @class */ (function () {
    function Welcome(name) {
        if (name === void 0) { name = 'amigo'; }
        console.log('hola' + name);
    }
    return Welcome;
}());
var amigo = new Welcome();
var ErickJ = new Welcome('Erick');
