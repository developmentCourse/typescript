"use strict";
var age;
age = 31;
age = "vainte y cuatro";
var User = /** @class */ (function () {
    function User() {
        this.name = "";
    }
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin() {
        this.permissions = 0;
    }
    return Admin;
}());
var user = new User();
user.name = "Erick";
user.permissions = 7;
console.log("user: " + user.name);
console.log("Admin: " + user.permissions);
function ejecutar(func) {
}
//este parametro devleve un string
ejecutar(function () { return "hola"; });
