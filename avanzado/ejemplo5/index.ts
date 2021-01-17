type numberOrString = number | string;
let age: numberOrString;
age = 31;
age ="vainte y cuatro";
class User{
    name: string="";
}
class Admin{
    permissions: number = 0;
}
//declarando el tipo
type UserAdmin = User&Admin;
let user: UserAdmin = new User() as UserAdmin;

user.name = "Erick";
user.permissions = 7;
console.log("user: " + user.name);
console.log("Admin: " + user.permissions);

type funcString = ()=>string
function ejecutar(func: funcString){

}
//este parametro devleve un string
ejecutar(()=>"hola");