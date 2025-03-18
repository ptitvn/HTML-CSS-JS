let products = [
    {
        id:1,
        name:"mèn mén",
        price:20000,
        quantity:20,
        category:"Món ăn dân tộc Mông"
    },
    {
        id:2,
        name:"mứt",
        price:80000,
        quantity:21,
        category:"Món ăn dân tộc Kinh"
    },
    {
        id:3,
        name:"cơm lam",
        price:40000,
        quantity:15,
        category:"Món ăn dân tộc Mông"
    },
    {
        id:4,
        name:"bánh đậu xanh",
        price:60000,
        quantity:30,
        category:"Món ăn dân tộc Kinh"
    },
]
let cart = [];
function main(){
    let choice = 0;
    do {
        choice = +prompt(`
            1.Hiển thị các sản phẩm theo tên danh mục.
            2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
            3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
                1.Tăng dần.
                2.Giảm dần.
            4.Tính số tiền thanh toán trong giỏ hàng.
            5.Thoát.`);
        switch (choice) {
            case 1:
                let categoryName = prompt(`
                    1.Món ăn dân tộc Mông
                    2. Món ăn dân tộc Kinh`);
                    displayProductsByCategory(categoryName);
                    
                break;
            case 2:
               let id = +prompt("Mời bạn nhập vào id muốn mua")
               let amount = +prompt("Mời bạn nhập số lượng muốn mua")
                let selectedProduct = selectProduct(products, id);
                if (selectedProduct) {
                let totalPrice = purchaseProduct(selectedProduct, amount);
                if (totalPrice > 0) {
                    cart.push({ productId: selectedProduct.id, quantity: amount, totalPrice: totalPrice });
                }
}
                break;
            case 3:
                let select = +prompt(`
                    Mời bạn nhập lựa chọn
                    1.tăng dần
                    2.giảm dần`);
                if(select === 1){
                    console.log("Sản phẩm sắp xếp theo giá tăng dần:");
                    displayProducts(sortProductsByPrice(products, true));
                }else if (select ===2){
                    console.log("Sản phẩm sắp xếp theo giá giảm dần:");
                    displayProducts(sortProductsByPrice(products, false));
                }
                break;
            case 4:
                console.log("Giỏ hàng:", cart);
                console.log("Tổng số tiền thanh toán:", calculateTotal(cart));
                break;
            case 5:
                break;
            default:
                console.log("Không tồn tại");
                break;
        }
    } while (choice !=0);
}
main();
function displayProductsByCategory(categoryName) {
    const filteredProducts = products.filter(product => product.category.toLowerCase().includes(categoryName.toLowerCase()));
    
    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
      });
    } else {
      console.log('Không tìm thấy sản phẩm nào trong danh mục này.');
    }
  }

// Hiển thị sản phẩm theo tên danh mục
function displayProducts(products) {
    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}`);
    });
}

// Chọn sản phẩm để mua
function selectProduct(products, productId) {
    let product = products.find(p => p.id === productId);
    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng.");
        return null;
    }
    return product;
}

// Nhập số lượng sản phẩm muốn mua
function purchaseProduct(product, quantity) {
    if (product.quantity >= quantity) {
        product.quantity -= quantity;
        console.log(`Mua thành công. Số lượng còn lại của sản phẩm ${product.name}: ${product.quantity}`);
        return  product.price * quantity;
    } else {
        console.log("Không đủ số lượng sản phẩm trong cửa hàng.");
        return 0;
    }
}

// Sắp xếp sản phẩm theo giá
function sortProductsByPrice(products, ascending = true) {
    return products.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

// Tính tổng số tiền thanh toán trong giỏ hàng
function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
}