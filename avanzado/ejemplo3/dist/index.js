"use strict";
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
// para hacer interceciones   y tipos se utiliza "&"
var user = new User();
user.name = "Erick";
user.permissions = 7;
console.log("User: " + user.name);
console.log("Admin: " + user.permissions);
