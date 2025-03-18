let cart = [];
let books = [
    { id: 1, name: "book A", price: 100, quantity: 10, category: "mục 1" },
    { id: 2, name: "book B", price: 150, quantity: 5, category: "mục 2" },
    { id: 3, name: "book C", price: 200, quantity: 8, category: "mục 1" },
    { id: 4, name: "book D", price: 250, quantity: 3, category: "mục 3" }
];
function main(){
    let choice = 0;
    do {
        choice = +prompt(`
            1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
            2.Thêm sách mới vào kho
            3.Tìm kiếm sách theo tên hoặc id.
            4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
            5.Sắp xếp sách theo giá:
                1.Tăng dần.
                2.Giảm dần.
            6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
            7.Hiển thị tổng số lượng sách trong kho.
            8.Thoát chương trình.`);
        switch (choice) {
            case 1:
                let genre = prompt(`
                    Mời bạn chọn nhập thể loại
                    1.mục 1
                    2.mục 2
                    3.mục 3`);
                console.log(`Danh sách sách trong thể loại ${genre}:`, displayBooksByCategory(genre));
                break;
            case 2:
                let addid = +prompt("Mời bạn nhập vào id muốn thêm"); // hoặc dùng let id = books.length == 0?1:books.[length].id +1;
                let addname = prompt("Mời bạn nhập vào tên sách muốn thêm");
                let addprice = +prompt("Mời bạn nhập vào giá sách");
                let addquantity = +prompt("Mời bạn nhập vào số lượng sách");
                let addcategory = prompt("Mời bạn nhập vào thể loại sách");
                addBook(addid, addname, addprice, addquantity, addcategory);
                break;
            case 3:
                let nsearch = +prompt(`Mời bạn nhập lựa chọn tìm kiếm theo id hoặc name
                    1.id
                    2.name`);
                if(nsearch === 1){
                    let searchid = +prompt("Mời bạn nhập id cần tìm kiếm");
                    console.log(`Tìm kiếm sách với id ${searchid}:`, searchBook(searchid));
                }else if(nsearch === 2){
                    let searchname = prompt("Mời bạn nhập id cần tìm kiếm");
                    console.log(`Tìm kiếm sách với tên ${searchname}`, searchBook(searchname));
                }
                break;
            case 4:
                let buyid = +prompt("Mời bạn nhập id b muốn mua");
                let buy = +prompt("Mời bạn nhập số lượng b muốn mua");
                buyBook(buyid, buy);
                console.log("Giỏ hàng sau khi mua sách:", cart);
                break;
            case 5:
                let choose = +prompt(`
                    Mời bạn nhập lựa chọn 1 hoặc 2
                    1.Tăng dần
                    2.giảm dần`);
                    if(choose === 1){
                        console.log("Sắp xếp sách theo giá tăng dần:", sortBooksByPrice(true));
                    }else if(choose ===2){
                        console.log("Sắp xếp sách theo giá giảm dần:", sortBooksByPrice(false));
                    }
                
                break;
            case 6:
                console.log("Tổng số lượng sách đã mua và tổng tiền trong giỏ hàng:", calculateCartTotal());
                break;
            case 7:
                console.log("Tổng số lượng sách trong kho:", displayTotalBooksInStock());
                break;
            default:
                console.log("Không tồn tại");
                break;
        }
    } while (choice !=0);
}
main();
// Hiển thị danh sách sách theo thể loại
function displayBooksByCategory(category) {
    return books.filter(book => book.category === category);
}

// Thêm sách mới vào kho
function addBook(id, name, price, quantity, category) {
    isDuplicateId(id);
    books.push({ id, name, price, quantity, category });
}
function addBook(newBook) {
    if (books.some(book => book.id === newBook.id)) {
        console.log("ID sách đã tồn tại.");
        return;
    }
    books.push(newBook);
}

// Tìm kiếm sách theo tên hoặc id
function searchBook(query) {
    return books.filter(book => book.name.includes(query) || book.id === query);
}

// Mua sách
function buyBook(id, quantity) {
    let book = books.find(book => book.id === id);
    if (book && book.quantity >= quantity) {
        book.quantity -= quantity;
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ id: book.id, name: book.name, price: book.price, quantity });
        }
    } else {
        console.log("Số lượng sách không đủ hoặc sách không tồn tại.");
    }
}

// Sắp xếp sách theo giá
function sortBooksByPrice(order = true) {
    return books.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
}

// Tính tổng số lượng sách đã mua và tổng tiền trong giỏ hàng
function calculateCartTotal() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return { totalQuantity, totalPrice };
}

// Hiển thị tổng số lượng sách trong kho
function displayTotalBooksInStock() {
    return books.reduce((sum, book) => sum + book.quantity, 0);
}
function isDuplicateId(id) {
    return books.some(book => book.id === id);
}
