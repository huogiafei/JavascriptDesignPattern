const discounts = require('./utils/discounts');

class CalcDiscount {
    total = null;
    strategy = null;
    args = [];

    setTotal(total) {
        this.total = total;
    }

    setDiscountMethod(strategy, args) {
        this.strategy = strategy;
        this.args = args
    }

    getResult() {
        return this.strategy.call(null, this.total, ...this.args);
    }
}

const order1 = new CalcDiscount();
order1.setTotal(333);
order1.setDiscountMethod(discounts.percentDiscount, [0.7]);
console.log('order1 sum: ' + order1.getResult());

const order2 = new CalcDiscount();
order2.setTotal(498);
order2.setDiscountMethod(discounts.priceBreakDiscount, [100, 5]);
console.log('order2 sum: ' + order2.getResult());
