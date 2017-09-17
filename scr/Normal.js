var Member = require('./members');

const ForNormalDiscount = {
    MinPrice: 1000,
    MinProductCount: 4
}
var Normal = {
    isDiscount(member, price, count) {
        return member === Member.Normal && price >= ForNormalDiscount.MinPrice && count >= ForNormalDiscount.MinProductCount;
    }
}

module.exports = Normal;