var mocha = require('mocha');
var sinon = require('sinon');
var chai = require('chai');

chai.should();

var ShoppingDiscount = require('../scr/shoppingDiscount');
var Member = require('../scr/members');

describe('ShoppingDiscount', () => {
    describe('#Calculate', () => {

        var shoppingDiscount = new ShoppingDiscount();
        
        it('一般使用者購買 100 元，沒有任何折扣.', () => {
            // Arrange
            var price = 100;
            var expected = 100;
            var actual = 0;
            
            // Act
            actual = shoppingDiscount.DiscountCalculator(Member.Normal, price);
            
            // Assert
            actual.should.equal(expected);
        });

        it('VIP 使用者購買 500 元，打 8 折.', () => {
            // Arrange
            var price = 500;
            var expected = 400;
            var actual = 0;

            // Act
            actual = shoppingDiscount.DiscountCalculator(Member.VIP, price);
            
            // Assert
            actual.should.equal(expected);
        });

        it('VIP 使用者購買 499 元，不打折.', () => {
            // Arrange
            var price = 499;
            var expected = 499;
            var actual = 0;

            // Act
            actual = shoppingDiscount.DiscountCalculator(Member.VIP, price);
            
            // Assert
            actual.should.equal(expected);
        });
    });
});