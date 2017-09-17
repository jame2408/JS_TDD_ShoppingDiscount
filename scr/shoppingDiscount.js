function ShoppingDiscount() { }

var Member = require('./members');

ShoppingDiscount.prototype.DiscountCalculator = function (member, price) {
    if (member === Member.VIP && price >= 500) {
        return price * 0.8;
    }
    return price;
};

module.exports = ShoppingDiscount;