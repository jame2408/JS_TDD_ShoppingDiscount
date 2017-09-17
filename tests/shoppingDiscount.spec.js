var mocha = require('mocha');
var sinon = require('sinon');
var chai = require('chai');

chai.should();

var ShoppingDiscount = require('../scr/shoppingDiscount');
var Member = require('../scr/members');

describe('ShoppingDiscount', () => {
    describe('#Calculate', () => {

        var shoppingDiscount = new ShoppingDiscount();
        
        it('一般使用者購買 100 元商品一件，沒有任何折扣.', () => {
            // Arrange
            var price = 100;
            var count = 1;            
            var expected = 100;
            var actual = 0;
            
            // Act
            actual = shoppingDiscount.DiscountCalculator(Member.Normal, price, count);
            
            // Assert
            actual.should.equal(expected);
        });

        it('VIP 使用者購買 500 元商品一件，打 8 折.', () => {
            // Arrange
            var price = 500;
            var count = 1;            
            var expected = 400;
            var actual = 0;

            // Act
            actual = shoppingDiscount.DiscountCalculator(Member.VIP, price, count);
            
            // Assert
            actual.should.equal(expected);
        });

        it('VIP 使用者購買 499 元商品一件，不打折.', () => {
            // Arrange
            var price = 499;
            var count = 1;            
            var expected = 499;
            var actual = 0;

            // Act
            actual = shoppingDiscount.DiscountCalculator(Member.VIP, price, count);
            
            // Assert
            actual.should.equal(expected);
        });

        it('一般使用者購買 1000 元且購買 3 件商品，打 85 折.', () => {
            // Arrange
            var price = 1000;
            var count = 3;
            var expected = 850;
            var actual = 0;
            
            // Act
            actual = shoppingDiscount.DiscountCalculator(Member.Normal, price, count);
            
            // Assert
            actual.should.equal(expected);
        });
    });
});