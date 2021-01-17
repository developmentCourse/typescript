//Herencia
class People{
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    //metodos
    print() {
    console.log('Impreisin desde la clase');
    console.log('Nombre completo: ' + this.firstname + " " + this.lastname);
    console.log('Edad: ' + this.age);
    }
}
//clase hija
class Student extends People{
    carnetUniversitario: string;

    constructor(firstname: string, lastname:string, age: number, carnetUniversitario: string){
        super(firstname, lastname, age); //llamando al construnctor de la clase padre 
        this.carnetUniversitario = carnetUniversitario;
    }
}
const erickJuarez: Student = new Student ('Erick', 'Juarez', 24, '10507307pt');
erickJuarez.print();
console.log('Impresion directamente con los atributos');

erickJuarez.firstname ="Erick";
console.log('Nombre: ' + erickJuarez.firstname);

erickJuarez.lastname = "Juarez";
console.log('Apellido: ' + erickJuarez.lastname); 

erickJuarez.age = 24;
console.log('Edad: ' + erickJuarez.age);

erickJuarez.carnetUniversitario = "10507307pt";
console.log('Nro. de carné Universitario: ' + erickJuarez.carnetUniversitario);