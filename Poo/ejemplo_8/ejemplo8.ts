//clases con atributos estaticos 
class StudentRequest {
    static STUDENTS_GET: string = "http://syscode.dev/typescript/students";
    static STUDENT_GET: string = "http://syscode.dev/typescript/students/{id}"; 
    static getStudents(){
        //se accede al atributo direnctamente con el nombre de la clase
        console.log(`"students": [{"id":1,"firstname": "Erick", "lastname": "Juarez"}, "url": "${StudentRequest.STUDENTS_GET}"]`);
    }
    static getStudent(id: number){
        console.log(`"student":{"id":1, "firstname": "Erick", "lastname": "Juarez"}, "url": "${StudentRequest.STUDENT_GET}"`);

    }
}
StudentRequest.getStudents();
StudentRequest.getStudent(1);
/// se puede manejar de esa forma para obterner el api rest   cuando se crea