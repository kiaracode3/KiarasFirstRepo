const storeProds = {
    bagel: 3,
    carrot: 4,
    fries: 5,
    waffle: 6,
    turkey: 7,
    caviar: 8
};

const myCart = ['bagel', 'waffle', 'caviar'];

function totalCart (cart, products) {
    let total = 0;
    for (const value of myCart) {
        if (products[value]) {
            total = total + products[value];
        } else {
            console.log ('product not found')
        }

    }
    return total;
}

console.log (totalCart (myCart,storeProds));

