class Video{
    constructor(title: string){
        console.log(title);
    }
}
const myVideo: Video = new Video("Constructor");
class Student {
    constructor(firstname: string, lastname?: string, age?: number){
        console.log('Nombre: ' + firstname);
        if (lastname != undefined){
            console.log('Apellidos: ' + lastname);
        }
        if(age !== undefined){
            console.log('Edad' + age);
        }
    }
}
const Erick: Student = new Student('Erick');
const ErickJuarez: Student = new Student('Erick','Juarez');
const student = new Student('Erick','Juarez', 24);

//parametros por defecto
class Welcome{
    constructor(name: string= 'amigo'){
        console.log('hola' + name);
    }
}
const amigo: Welcome = new Welcome();
const ErickJ: Welcome = new Welcome('Erick');