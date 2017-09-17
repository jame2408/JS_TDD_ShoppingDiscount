var Member = require('./members');

var VIP = {
    isDiscount(member, price) {
        return member === Member.VIP && price >= 500;
    }
}

module.exports = VIP;