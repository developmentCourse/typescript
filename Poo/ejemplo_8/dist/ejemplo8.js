"use strict";
//clases con atributos estaticos 
var StudentRequest = /** @class */ (function () {
    function StudentRequest() {
    }
    StudentRequest.getStudents = function () {
        //se accede al atributo direnctamente con el nombre de la clase
        console.log("\"students\": [{\"id\":1,\"firstname\": \"Erick\", \"lastname\": \"Juarez\"}, \"url\": \"" + StudentRequest.STUDENTS_GET + "\"]");
    };
    StudentRequest.getStudent = function (id) {
        console.log("\"student\":{\"id\":1, \"firstname\": \"Erick\", \"lastname\": \"Juarez\"}, \"url\": \"" + StudentRequest.STUDENT_GET + "\"");
    };
    StudentRequest.STUDENTS_GET = "http://syscode.dev/typescript/students";
    StudentRequest.STUDENT_GET = "http://syscode.dev/typescript/students/{id}";
    return StudentRequest;
}());
StudentRequest.getStudents();
StudentRequest.getStudent(1);
/// se puede manejar de esa forma para obterner el api rest   cuando se crea
