class People {
    //modificador de acceso que solo sera visible para las clases hijas
    protected firstname: string;
    public lastname: string;
    age: number;
    constructor(firstname:string, lastname:string, age:number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
print(){
    console.log('Impresion desde la clase');
    console.log('Nombre Completo: ' + this.firstname + " " + this.lastname);
    console.log("Edad: "+ this.age); 
    }
    getFirstname(){
        return this.firstname;
    }
    setFirstname(firstname: string){
        this.firstname = firstname;
    }
}
class Student extends People {
    private carnetUniversitario: string;
    constructor(firstname:string, lastname:string, age:number, carnetUniversitario:string){
        super(firstname, lastname, age);
        this.carnetUniversitario = carnetUniversitario;
    }
    print(){
        super.print();
        console.log('CU: ' + this.carnetUniversitario);
    }
    getCarnetUniversitario(){
        return this.carnetUniversitario;
    }
    setCarnetUniversitario(carnetUniversitario: string){
        this.carnetUniversitario = carnetUniversitario;
    }
}
const erickJuarez: Student = new Student('Erick','Vidal', 24, '10507307pt');
erickJuarez.print();
console.log('Impresion directamente con los atributos');
erickJuarez.setFirstname("vidal");
console.log('Nombre: ' + erickJuarez.getFirstname());
erickJuarez.lastname = 'Choque';
console.log('Apellido: ' + erickJuarez.lastname);
erickJuarez.age = 24;
console.log('Edad: '+ erickJuarez.age);