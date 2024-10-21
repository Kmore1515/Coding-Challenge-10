let sizeSelector = document.getElementById("size-selector");
let priceElement = document.getElementById("Product Price");
let purchaseItemButton = document.getElementById("purchase-item")

sizeSelector.addEventListener("change", (event) => {
    let selectedPrice = event.target.value
    priceElement.textContent = `$${selectedPrice}`
})  
 function disableButton() {
    if(stock === "Out of Stock") {
        purchaseItemButton.disable = true;
    }
    else
        purchaseItemButton.disable = false;
 }
 function checkoutEvent() {
    if(stock === "In Stock") {
        alert(`Your purchase has been completed!`)
    }
    else alert(`Order could not be fullfilled due to lack of stock.`)
 }

