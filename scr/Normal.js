var Member = require('./members');

var Normal = {
    isDiscount(member, price, count) {
        return member === Member.Normal && price >= 1000 &&count > 3;
    }
}

module.exports = Normal;