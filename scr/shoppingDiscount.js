var Member = require('./members');
var Vip = require('./VIP');
var Normal = require('./Normal');

class ShoppingDiscount {
    DiscountCalculator(member, price, count) {
        var vip = new Vip(member, price);
        if (vip.isDiscount()) {
            return vip.discountPrice();
        }

        var normal = new Normal(member, price, count)
        if (normal.isDiscount()) {
            return normal.discountPrice();
        }

        return price;
    }
}

module.exports = ShoppingDiscount;