//datos primitivos o basicos
let fullname:string = "Erick Vidal";
let age:number = 24;
let developer:boolean = true;
//Array
let skills:Array<string> = ['JavaScript', 'TypeScript', 'Angular'];
let numbers:number[]= [1,2,3];
//enum
enum Role{
    Employee, manager, admin, developer
}
var role:Role = Role.admin;
console.log('Role' + role);

//any
let firstname: any = 'Erick';
firstname = 4;
let days:any[]= ['Lunes', 2, 'martes', ];
console.log(days[1]);