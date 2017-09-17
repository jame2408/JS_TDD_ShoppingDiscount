var Member = require('./members');

const ForVIPDiscount = {
    MinPrice: 500,
}
var VIP = {
    isDiscount(member, price) {
        return member === Member.VIP && price >= ForVIPDiscount.MinPrice;
    }
}

module.exports = VIP;