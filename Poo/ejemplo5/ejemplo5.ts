class Peoplee {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    print(){
        console.log('Impresionde la clase');
        console.log('Nombre completo: '+ this.firstname + " " + this.lastname);
        console.log('Edad' + this.age);
    }
}
class Students extends Peoplee{
carnetUniversitario: string;

constructor(firstname: string, lastname: string,age: number, carnetUniveritario: string){
    super(firstname, lastname, age)
    this.carnetUniversitario = carnetUniveritario;
    }
    print(){
        super.print();
        console.log('CU: ' + this.carnetUniversitario);
    }
}

//no se entendio claramente 