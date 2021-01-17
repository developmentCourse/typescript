"use strict";
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod[PaymentMethod["NONE"] = 0] = "NONE";
    PaymentMethod[PaymentMethod["CASH"] = 1] = "CASH";
    PaymentMethod[PaymentMethod["TRANSFER"] = 2] = "TRANSFER";
    PaymentMethod[PaymentMethod["DEPOSIT"] = 3] = "DEPOSIT"; // si se deja asi  y sigue la secencia
})(PaymentMethod || (PaymentMethod = {}));
var Sale = /** @class */ (function () {
    function Sale() {
        this.paymentMethod = PaymentMethod.NONE;
    }
    return Sale;
}());
var sale = new Sale();
sale.paymentMethod = PaymentMethod.DEPOSIT;
console.log("Metodo de Pago: " + sale.paymentMethod);
//verifica maana  la compilacion de estos ejercicios 
