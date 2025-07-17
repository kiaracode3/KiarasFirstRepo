const {totalCart} = require('./shoppingcart')
const myCart = ['bagel', 'waffle', 'caviar'];
const mySecondCart =['carrot', 'fries'];
const storeProds = {
    bagel: 3,
    carrot: 4,
    fries: 5,
    waffle: 6,
    turkey: 7,
    caviar: 8
};

test('returns correct value of mycart', () => {
    expect(totalCart(myCart,storeProds)).toBe(17);
    expect(totalCart(mySecondCart,storeProds)).toBe(9);
});  


