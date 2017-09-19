var Member = require('./members');

const ForNormalDiscount = {
    MinPrice: 1000,
    MinProductCount: 4,
    Discount: 0.85
}
class Normal {
    constructor(member, price, count) { 
        this.member = member;
        this.price = price;
        this.count = count;
    };
    isDiscount() {
        return this.member === Member.Normal && this.price >= ForNormalDiscount.MinPrice && this.count >= ForNormalDiscount.MinProductCount;
    };
    isDiscountPrice() {
        return this.isDiscount() ? this.price * ForNormalDiscount.Discount : this.price;
    };
}

module.exports = Normal;