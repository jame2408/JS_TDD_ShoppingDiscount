function ShoppingDiscount() { }

var Member = require('./members');

ShoppingDiscount.prototype.DiscountCalculator = function (member, price) {
    if (member === Member.VIP) {
        return price * 0.8;
    }
    return price;
};

module.exports = ShoppingDiscount;