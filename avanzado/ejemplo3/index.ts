class User {
    name: string = "";
}
class Admin {
    permissions: number =0;
}
// para hacer interceciones   y tipos se utiliza "&"
let user: User&Admin = new User() as User&Admin;
user.name = "Erick";
user.permissions = 7;
console.log("User: " + user.name);
console.log("Admin: " + user.permissions);