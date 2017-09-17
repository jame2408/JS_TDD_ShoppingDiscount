function ShoppingDiscount() { }

ShoppingDiscount.prototype.DiscountCalculator = function(member, price) {
    return price;
};

module.exports = ShoppingDiscount;