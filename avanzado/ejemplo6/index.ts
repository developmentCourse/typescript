enum PaymentMethod{
    NONE = 0,
    CASH = 1,
    TRANSFER =2,
    DEPOSIT// si se deja asi  y sigue la secencia
}
class Sale{
    paymentMethod: PaymentMethod = PaymentMethod.NONE;
}
let sale: Sale = new Sale();
sale.paymentMethod = PaymentMethod.DEPOSIT;
console.log("Metodo de Pago: " + sale.paymentMethod);

//verifica maana  la compilacion de estos ejercicios 
