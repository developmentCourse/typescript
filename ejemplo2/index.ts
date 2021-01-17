let unLet =5;
const unConst =4;
console.log(unLet);
console.log(unConst);

//colases
class Docente {
    hi(name: string){
        console.log(name);
    }
}
class apDocente{
    h2(surname: string){
        console.log(surname);
    }
}
let docente: Docente = new Docente();
let apdocente: apDocente = new apDocente();
docente.hi("Erisk")
apdocente.h2("juarez");

