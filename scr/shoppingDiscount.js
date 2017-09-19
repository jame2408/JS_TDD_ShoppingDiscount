var Member = require('./members');
var Vip = require('./VIP');
var Normal = require('./Normal');

class ShoppingDiscount {
    DiscountCalculator(member, price, count) {
        return member === Member.VIP ?
            new Vip(member, price).isDiscountPrice() :
            new Normal(member, price, count).isDiscountPrice();
    }
}

module.exports = ShoppingDiscount;