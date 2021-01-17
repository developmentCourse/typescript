/**
 * Las funciones de javascript pueden ser utilizadas en typecript
 * como no declaramos el tipo de dato a los parametros 
 * typescript automaticamente la asigna el tipo any
 * 
 * @param op1 
 * @param ope2 
 */
function suma(op1, op2){
    return op1 + op2;
}
console.log(suma(1,2))

//resta
function resta(op1: any, op2: any): any{
    return op1 - op2;
}
console.log(resta(1,2));
//multiplication
function multiplication(op1: number, op2:number):number{
    return op1 * op2;
}
console.log(multiplication(4,5));

//division
function division(op1: number, op2:number):void{
    //return null;
    return undefined;
}
console.log(division(1,4));

//saludo
function saludo(name?: string): void{
    console.log('hola' + name);
}
saludo();
saludo('Erick');

function unir ( firstname: string,  lastname?: string): void{
    console.log(firstname +' '+ lastname);
}
unir('Erick');
unir('Erick','Juarez');

function welcome(name: string = 'Erick'){
    console.log('Hola'+ name);
}
welcome();