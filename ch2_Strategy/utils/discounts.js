var discounts = {
    /** 满减
     * @param total 总价
     * @param step 满减价
     * @param discount 满减优惠
     * **/
    priceBreakDiscount: function (total, step, discount) {
        return total - Math.floor(total / step) * discount
    },


    /** 现金券
     * @param total 总价
     * @param discount 现金券金额
     * **/
    directDiscount: function (total, discount) {
        return total - discount;
    },


    /** 折扣券
     * @param total 总价
     * @param percent 0.8
     * **/
    percentDiscount: function (total, percent) {
        return (total * percent).toFixed(2)
    },
};

module.exports = discounts;
