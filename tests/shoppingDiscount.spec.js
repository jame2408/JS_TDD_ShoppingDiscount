var mocha = require('mocha');
var sinon = require('sinon');
var chai = require('chai');

chai.should();

var ShoppingDiscount = require('../scr/shoppingDiscount');
var Member = require('../scr/members');

describe('ShoppingDiscount', () => {
    describe('#Calculate', () => {
        it('一般使用者購買 100 元，沒有任何折扣.', () => {
            // Arrange
            var price = 100;
            var expected = 100;
            var actual = 0;

            var shoppingDiscount = new ShoppingDiscount();
            
            // Act
            actual = shoppingDiscount.DiscountCalculator(Member.Normal, price);
            
            // Assert
            actual.should.equal(expected);
        });
    });
});