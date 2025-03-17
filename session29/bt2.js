let products = [];
let choice = 0;
let currentId = 1;
do {
    choice = +prompt(`
        1.Thêm sản phẩm vào danh sách sản phẩm.
        2Hiển thị tất cả sản phẩm.
        3.Hiển thị chi tiết sản phẩm theo id.
        4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5.Xóa sản phẩm theo id.
        6.Lọc sản phẩm theo khoảng giá.
        7.Thoát.`)  
      switch (choice) {
          case 1:
            let name = prompt("Mời bạn nhập vào tên sản phẩm");
            let price = +prompt("Mời bạn nhập vào giá sản phẩm");
            let category = prompt("Mời bạn nhập vào danh mục sản phẩm");
            let quantity = +prompt("Mời bạn nhập vào số lượng trong kho");
              addProduct(name,price,category,quantity);
              break;
          case 2:
              displayAllProducts();
              break;
          case 3:
              let id = +prompt("Mời bạn nhập vào id muốn hiển thị");
              displayProductById(id);
              break;
          case 4:
            let addid = Number(prompt("Mời bạn nhâp vào id muốn cập nhật"));
            let addname = prompt("Mời bạn nhập tên muốn cập nhật");
            let addpice = +prompt("Mời bạn nhập vào giá muốn thêm");
            let addcategory = prompt("Mời bạn nhập vào danh mục muốn cập nhật");
            let addquantity = +prompt("Mời bạn nhập số lượng muốn cập nhật")
            updateProductById(addid, addname, addpice, addcategory, addquantity);
              break;
          case 5:
                let deleteid = +prompt("Mời bạn nhập vào id muốn xóa");
                deleteProductById(deleteid);
              break;
          case 6:
                let minPrice = +prompt("Mời bạn nhập vào giá thấp nhất");
                let maxPrice = +prompt("Mời bạn nhập vào giá cao nhất");
                filterProductsByPriceRange(minPrice, maxPrice);
              break;
            case 7:
                break;
          default:
              console.log("Không hợp lệ")
              break;
      }
  } while (choice !=0);
 

  function addProduct(name, price, category, quantity) {
    const product = {
        id: currentId++,
        name,
        price,
        category,
        quantity
    };
    products.push(product);
}

// Hiển thị tất cả sản phẩm
function displayAllProducts() {
    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
    });
}

// Hiển thị chi tiết sản phẩm theo ID
function displayProductById(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        console.log(`Chi tiết sản phẩm ID: ${id}`);
        console.log(`Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
    } else {
        console.log(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
}

// Cập nhật thông tin sản phẩm theo ID
function updateProductById(id, name, price, category, quantity) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.name = name;
        product.price = price;
        product.category = category;
        product.quantity = quantity;
        console.log(`Sản phẩm ID: ${id} đã được cập nhật.`);
    } else {
        console.log(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
}

// Xóa sản phẩm theo ID
function deleteProductById(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        console.log(`Sản phẩm ID: ${id} đã được xóa.`);
    } else {
        console.log(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
}

// Lọc sản phẩm theo khoảng giá
function filterProductsByPriceRange(minPrice, maxPrice) {
    const filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    console.log(`Sản phẩm trong khoảng giá từ ${minPrice} đến ${maxPrice}:`);
    filteredProducts.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
    });
}
