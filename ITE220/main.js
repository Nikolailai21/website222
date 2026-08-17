const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const quantityValue = document.querySelector(".quantity-value");

let quantity = 1;

increaseButton.addEventListener("click", function () {
    quantity++;
    quantityValue.textContent = quantity;
});

decreaseButton.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        quantityValue.textContent = quantity;
    }
});