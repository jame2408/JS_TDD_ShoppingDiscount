var Member = require('./members');
var VIP = require('./VIP');
var Normal = require('./Normal');

class ShoppingDiscount {
    DiscountCalculator(member, price, count) {
        
        if (VIP.isDiscount(member, price)) {
            return price * 0.8;
        }

        if (Normal.isDiscount(member, price, count)) {
            return price * 0.85;
        }

        return price;
    }
}

module.exports = ShoppingDiscount;