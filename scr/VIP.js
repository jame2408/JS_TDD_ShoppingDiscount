var Member = require('./members');

const ForVIPDiscount = {
    MinPrice: 500,
    Discount: 0.8
}
class VIP {
    constructor(member, price) { 
        this.member = member;
        this.price = price;
    };
    isDiscount() {
        return this.member === Member.VIP && this.price >= ForVIPDiscount.MinPrice;
    };
    isDiscountPrice() {
        return this.isDiscount() ? this.price * ForVIPDiscount.Discount : this.price;
    };
}

module.exports = VIP;