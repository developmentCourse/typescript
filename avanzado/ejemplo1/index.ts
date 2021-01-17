let age: number | string;
age = 24;
console.log(age);
age = "veinte  cuatro";
console.log(age);
function print(value: number| string|boolean){
    console.log(value);
}

let value:number|string|boolean;
value = 5;
print(value);
value ="hola";
print(value);
value = true;
print(value);