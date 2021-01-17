"use strict";
//datos primitivos o basicos
var fullname = "Erick Vidal";
var age = 24;
var developer = true;
//Array
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numbers = [1, 2, 3];
//enum
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["admin"] = 2] = "admin";
    Role[Role["developer"] = 3] = "developer";
})(Role || (Role = {}));
var role = Role.admin;
console.log('Role' + role);
//any
var firstname = 'Erick';
firstname = 4;
var days = ['Lunes', 2, 'martes',];
console.log(days[1]);
