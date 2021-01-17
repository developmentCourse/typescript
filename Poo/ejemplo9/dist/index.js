"use strict";
var Hero = /** @class */ (function () {
    function Hero(name) {
        this.x = 0;
        this.y = 0;
        this.whidth = 0;
        this.height = 0;
        this.name = name;
    }
    Hero.prototype.getCoords = function () {
        return "coords Hero";
    };
    return Hero;
}());
var Bullet = /** @class */ (function () {
    function Bullet(name) {
        this.x = 0;
        this.y = 0;
        this.whidth = 0;
        this.height = 0;
        this.name = name;
    }
    Bullet.prototype.getCoords = function () {
        return "coords Bullet";
    };
    return Bullet;
}());
var Enemy = /** @class */ (function () {
    function Enemy(name, x, y, whidth, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (whidth === void 0) { whidth = 0; }
        if (height === void 0) { height = 0; }
        this.name = name;
        this.x = x;
        this.y = y;
        this.whidth = whidth;
        this.height = height;
    }
    Enemy.prototype.getCoords = function () {
        return "coords Enemy";
    };
    return Enemy;
}());
var Collisions = /** @class */ (function () {
    function Collisions() {
    }
    Collisions.check = function (asset1, asset2) {
        console.log(asset1.name + " x1= " + asset1.x + ", x2= " + asset1.y);
        console.log(asset2.name + " x1= " + asset2.x + ", x2= " + asset2.y);
    };
    return Collisions;
}());
var hero = new Hero("TypeScript");
var bullet = new Bullet("Bala");
var enemy = new Enemy("ViaualB", 2, 5);
Collisions.check(hero, enemy);
