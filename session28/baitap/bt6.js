function calculateTotal(cart) {
    return cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
}
let cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1},
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

let total = calculateTotal(cart);
console.log(`Tổng tiền trong giỏ hàng là: ${total} VND`);