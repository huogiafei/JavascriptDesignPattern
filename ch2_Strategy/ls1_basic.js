var discounts = require('./utils/discounts');
var Discount = function () {
    this.result = null;
    this.setStrategy = function (obj) {
        this.result = obj
    };
    this.getResult = function () {
        return this.result;
    }
};

var discount1 = new Discount();
discount1.setStrategy(discounts.priceBreakDiscount(333, 100, 5));
console.log(discount1.getResult());


