let cart = [];
let phones = [
    { id: 1, name: "iPhone 13", price: 12000000, quantity: 10, company: "Apple" },
    { id: 2, name: "Galaxy S21", price: 10000000, quantity: 15, company: "Samsung" },
    { id: 3, name: "Mi 11", price: 5000000, quantity: 20, company: "Xiaomi" }
];
function main(){
    let choice = 0;
    do {
        choice = +prompt(`
            1.Hiển thị danh sách điện thoại theo hãng (Ví dụ: Samsung, Apple, Xiaomi…)
            2.Thêm điện thoại mới vào cửa hàng (Nhập thông tin: id, tên điện thoại, giá, số lượng, hãng)
            3.Tìm kiếm điện thoại theo tên hoặc id
            4.Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)
            5.Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
            6.Sắp xếp điện thoại theo giá:
                1.Tăng dần
                2.Giảm dần
            7.Hiển thị tổng số tiền của các điện thoại trong kho
            8.Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
            9.Thoát chương trình`);
        switch (choice) {
            case 1:
                let genre = prompt(`
                    Mời bạn chọn nhập thể loại
                    1.samsung
                    2.apple
                    `);
                    let i = displayPhonesByCompany(genre);
                console.log(i);
                 
                break;
            case 2:
                let addid = +prompt("Mời bạn nhập vào id muốn thêm"); // hoặc dùng let id = books.length == 0?1:books.[length].id +1;
                let addname = prompt("Mời bạn nhập vào tên điện thoại muốn thêm");
                let addprice = +prompt("Mời bạn nhập vào giá sách");
                let addquantity = +prompt("Mời bạn nhập vào số lượng sách");
                let addcategory = prompt("Mời bạn nhập vào hãng");
                addPhone(addid, addname, addprice, addquantity, addcategory);
                break;
            case 3:
                let nsearch = +prompt(`Mời bạn nhập lựa chọn tìm kiếm theo id hoặc name
                    1.id
                    2.name`);
                    
                if(nsearch === 1){
                    let searChid = +prompt("Mời bạn nhập id cần tìm kiếm");
                    let a =searchPhone(searChid );
                    console.log(a);
                    
                }else if(nsearch === 2){
                    let searChname = prompt("Mời bạn nhập id cần tìm kiếm");
                    let b= searchPhone(searChname);
                    console.log(b);
                    
                }
                break;
            case 4:
                let buyid = +prompt("Mời bạn nhập id b muốn mua");
                let buy = +prompt("Mời bạn nhập số lượng b muốn mua");
                console.log(buyPhone(buyid, buy));
                break;
            case 5:
                console.log(checkout());     
                break;
            case 6:
                let choose = +prompt(`
                    Mời bạn nhập lựa chọn 1 hoặc 2
                    1.Tăng dần
                    2.giảm dần`);
                    if(choose === 1){
                        const sortedByPriceAsc = [...phones].sort((a, b) => a.price - b.price);
                        console.log('Điện thoại sắp xếp theo giá tăng dần:', sortedByPriceAsc);
                    }else if(choose ===2){
                        const sortedByPriceDesc = [...phones].sort((a, b) => b.price - a.price);
                        console.log('Điện thoại sắp xếp theo giá giảm dần:', sortedByPriceDesc);
                    }
               
                break;
            case 7:
                 totalValue = phones.reduce((total, phone) => total + phone.price * phone.quantity, 0);
                console.log(`Tổng số tiền của các điện thoại trong kho: $${totalValue}`);
                break;
            case 8:
                let quantityByCompany = phones.reduce((acc, phone) => {
                    acc[phone.company] = (acc[phone.company] || 0) + phone.quantity;
                    return acc;
                }, {});
                
                console.log('Tổng số lượng điện thoại theo từng hãng:', quantityByCompany);
                break;
            default:
                console.log("Không tồn tại");
                break;
        }
    } while (choice !=0);
}
main();
function displayBooksByCategory(category) {
    return books.filter(book => book.category === category);
}
function displayPhonesByCompany(company) {
    return phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
}
// Thêm điện thoại mới vào cửa hàng
function addPhone(id, name, price, quantity, company) {
    phones.push({ id, name, price, quantity, company });
}

// Tìm kiếm điện thoại theo tên hoặc id
function searchPhone(query) {
    return phones.filter(phone => phone.name.includes(query) || phone.id === query); //phones.filter(phone => phone.name.toLowerCase().includes(query.toLowerCase()) || phone.id === query);
}

// Mua điện thoại
function buyPhone(id, quantity) {
    let phone = phones.find(phone => phone.id === id);
    if (phone && phone.quantity >= quantity) {
        phone.quantity -= quantity;
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...phone, quantity });
        }
        return `Đã thêm ${quantity} ${phone.name} vào giỏ hàng.`;
    } else {
        return `Không đủ số lượng ${phone ? phone.name : 'điện thoại'} trong kho.`;
    }
}

// Thanh toán giỏ hàng
function checkout() {
    if (cart.length > 0) {
        cart = [];
        return "Thanh toán thành công! Giỏ hàng đã được xóa.";
    } else {
        return "Giỏ hàng trống.";
    }
}
