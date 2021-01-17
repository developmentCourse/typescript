"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//clases abstactas
var Asset = /** @class */ (function () {
    function Asset() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.name = "";
    }
    Asset.prototype.getcoords = function () {
        return "{\"x\":" + this.x + ", \"y\":" + this.y + "}";
    };
    return Asset;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Hero.prototype.move = function () {
        return true;
    };
    return Hero;
}(Asset));
var hero = new Hero("TypeScript");
console.log(hero.move);
