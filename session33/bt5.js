const products = [
    {
        id: 1,
        name: "Laptop Dell XPS 15",
        price: 35990000,
        image: "https://th.bing.com/th/id/OIP.G6pcR9u1iOto3Cm6yQJrSwHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB."
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 32990000,
        image: "https://th.bing.com/th/id/OIF.h8FOkpWzfbei72udRHMqtA?w=262&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro."
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: 28990000,
        image: "https://phucanhcdn.com/media/product/54242_dien_thoai_thong_minh_samsung_galaxy_s24_ultra_xam_6.jpg",
        description: "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom."
    },
    {
        id: 4,
        name: "Tai nghe Sony WH-1000XM5",
        price: 7990000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf",
        description: "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ."
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        price: 11990000,
        image: "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
        description: "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao."
    },
    {
        id: 6,
        name: "Loa JBL Charge 5",
        price: 3990000,
        image: "https://th.bing.com/th/id/OIP.HXlFv3Lx_JSWuKJrYGcOqwHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ."
    }
];

function displayProducts(productList) {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = ''; // clear previous results

    productList.forEach(product => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>${product.price.toLocaleString()} VNĐ</strong></p>
                        <button class="btn btn-success">Buy</button>
                    </div>
                </div>
            </div>
        `;
        productListElement.innerHTML += card;
    });
}

document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayProducts(filteredProducts);
});

// To display all products initially
displayProducts(products);