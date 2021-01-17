class Pople{
    protected _firtname: string;
    public lastname: string;
    age: number;

    constructor(firtname: string, lastname: string, age: number){
        this._firtname = firtname;
        this.lastname = lastname;
        this.age = age;
    }
    //metodos
    print(){
        console.log('Impresion desde la clase');
        console.log('Nombre Completo: ' + this._firtname + " "+ this.lastname);
        console.log('Edad: ' + this.age);
    }
    get firstname(): string{
        return this._firtname;
    }
    set firstname(firstname: string){
        this._firtname = firstname;
    }
}
class Student extends Pople{
    private _carnetUniversitario: string;
    constructor(firstname: string, lastname:string, age: number, carnetUniversitario: string){
        super(firstname, lastname, age);
        this._carnetUniversitario = carnetUniversitario;
    }
    print(){
        super.print();
            console.log('CU: ' + this._carnetUniversitario);
    }
    get carnetUniversitario(): string{
        return this._carnetUniversitario;
    }
    set carnetUniversitario(carnetUniversitario: string){
        this._carnetUniversitario = carnetUniversitario;
    }
}
 const erickJuarez: Student = new Student('Erick', 'Vidal', 24, '10507307pt');
 erickJuarez.print();
 console.log('Impresion directamnte  con los atributos');
 erickJuarez.firstname = "Vidal";
 console.log('Nombre: ' + erickJuarez.firstname);
 erickJuarez.lastname = "Choque";
 console.log('Apellidos: ' + erickJuarez.lastname);
 erickJuarez.age = 24;
 console.log('Edad: '+ erickJuarez.age);
 erickJuarez.carnetUniversitario = "10507307pt";
 console.log('CU: ' + erickJuarez.carnetUniversitario);