var Member = require('./members');
var VIP = require('./VIP');

class ShoppingDiscount {
    DiscountCalculator(member, price) {
        if (VIP.isDiscount(member, price)) {
            return price * 0.8;
        }
        return price;
    }
}

module.exports = ShoppingDiscount;