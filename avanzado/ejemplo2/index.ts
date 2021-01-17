function isNumber(value:number|string|boolean): value is number{
    return typeof value === 'number';
}
function isString(value:number| string| boolean): value is string{
    return typeof value === 'string';
}
function isBoolean(value:number |string |boolean): value is boolean{
    return typeof value === 'boolean';   
}
/*
let value: number | string | boolean;
value = 5;
print(value);

value = "Hola";
print(value);

value = true;
print(value);
*/
function printAge(age: number | string){
    if(typeof age === 'number'){
        console.log("Es un number");        
    } 

    if(typeof age === 'string'){
        console.log("Es un string");     
        // como ya sabemos que en este bloque de codigo si o si el tipo de datos e un string
        // podemos ya utilizar metodos que tiene implementado el tipo en el bloque de codigo
        // como se lo hace con el metodo chartAt que solo es posible utilizarlo cuando el tipo de dato es string   
        console.log(age.charAt(0));
    }
}
/*
let age: number | string;

age = 5;
printAge(age);

age = "Cinco";
printAge(age);*/