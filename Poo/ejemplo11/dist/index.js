"use strict";
var dev;
(function (dev) {
    var ejuarez;
    (function (ejuarez) {
        ejuarez.URL = "http://syscode";
        //en el momento de poner  export  la clase podra ser reutilizada
        var Youtube = /** @class */ (function () {
            function Youtube(name) {
                this._name = name;
            }
            Object.defineProperty(Youtube.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (name) {
                    this._name = name;
                },
                enumerable: true,
                configurable: true
            });
            return Youtube;
        }());
        ejuarez.Youtube = Youtube;
        var Vimeo = /** @class */ (function () {
            function Vimeo(name) {
                this._name = name;
            }
            Object.defineProperty(Vimeo.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (name) {
                    this._name = name;
                },
                enumerable: true,
                configurable: true
            });
            return Vimeo;
        }());
    })(ejuarez = dev.ejuarez || (dev.ejuarez = {}));
})(dev || (dev = {}));
var youtube = new dev.ejuarez.Youtube("TypeScript");
console.log(youtube.name);
console.log(dev.ejuarez.Youtube);
