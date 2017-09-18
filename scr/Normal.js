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
    isDiscount(member, price, count) {
        return this.member === Member.Normal && this.price >= ForNormalDiscount.MinPrice && this.count >= ForNormalDiscount.MinProductCount;
    };
    discountPrice() {
        return this.price * ForNormalDiscount.Discount;
    }
}

module.exports = Normal;