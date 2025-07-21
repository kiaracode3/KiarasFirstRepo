const storeProds = {
    bagel: 3,
    carrot: 4,
    fries: 5,
}; 

const storeItemsDiv = document.getElementById("store-items");
const cartList = document.getElementById("cart");
const cartTotal = document.getElementById("cart-total");
let total = 0;

for (const item in storeProds){
    const button = document.createElement("button"); 
    button.textContent = item;
    storeItemsDiv.appendChild(button);

    function addToGroceryList () {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li); 
    };

    button.addEventListener("click", addToGroceryList); 
    
    function cartTotalFunction (){
    total = total + storeProds[item];
    cartTotal.innerHTML = total;
    }    
    
    button.addEventListener("click", cartTotalFunction);
    

};




