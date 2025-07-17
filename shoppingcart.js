const myCart = ['bagel', 'waffle', 'caviar'];
const storeProds = {
    bagel: 3,
    carrot: 4,
    fries: 5,
    waffle: 6,
    turkey: 7,
    caviar: 8
};

function totalCart (cart, products) {
    let total = 0;

    for (const value of cart) {
        if (products[value]) {
            total = total + products[value];
        } else {
            console.log ('product not found')
        }

    }
    return total;
}


module.exports = {totalCart} 