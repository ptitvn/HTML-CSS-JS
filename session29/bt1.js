let contacts = [];
let choice = 0;
do {
  choice = +prompt(`
    1.Thêm đối tượng Contact vào danh sách liên hệ.
    2.Hiển thị danh sách danh bạ.
    3.Tìm kiếm thông tin Contact theo số điện thoại.
    4.Cập nhật thông tin Contact(name, email, phone) theo id.
    5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
    6.Thoát`)  
    switch (choice) {
        case 1:
            let id = +prompt("Mời bạn nhập vào id");
            let name= prompt("Mời bạn nhập vào tên của mình");
            let email = prompt("Mời bạn nhập vào email");
            let phone = prompt("Mời bạn nhập vào số điện thoại của mình");
            addContact(id,name,email,phone);
            break;
        case 2:
            displayContacts();
            break;
        case 3:
            let searchphone = prompt("Mời bạn nhập vào số điện thoại cần tìm");
            searchContactByPhone(searchphone);
            break;
        case 4:
            let addid = +prompt("Mời bạn nhập vào id cần cập nhật");
            let addname = prompt("Mời bạn nhập vào tên muốn cập nhật");
            let addemail = prompt("Mời bạn nhập email bạn muốn thêm");
            let addphone = prompt("Mời bạn nhập vào số đt muốn cập nhật");
            updateContact(addid,addname,addemail,addphone);
            break;
        case 5:
            let deleteid = +prompt("Mời bạn nhập vào id muốn xóa");
            deleteContactById(deleteid);
            break;
        case 6:
            break;
        default:
            console.log("Không hợp lệ")
            break;
    }
} while (choice !=0);
function addContact(id, name, email, phone) {
    if (contacts.find(contact => contact.id === id)) {
        console.log("ID đã tồn tại. Vui lòng nhập lại.");
        return;
    }

    let newContact = {
        id: id,
        name: name,
        email: email,
        phone: phone
    };

    contacts.push(newContact);
    console.log("Liên hệ đã được thêm thành công.");
}

function displayContacts() {
    console.log("Danh sách liên hệ:");
    contacts.forEach(contact => {
        console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
    });
}

function searchContactByPhone(phone) {
    let foundContact = contacts.find(contact => contact.phone === phone);
    if (foundContact) {
        console.log(`Thông tin liên hệ: ID: ${foundContact.id}, Name: ${foundContact.name}, Email: ${foundContact.email}, Phone: ${foundContact.phone}`);
    } else {
        console.log("Không tìm thấy liên hệ với số điện thoại này.");
    }
}
function updateContact(id, newName, newEmail, newPhone) {
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
        contact.name = newName;
        contact.email = newEmail;
        contact.phone = newPhone;
        console.log("Đã cập nhật thông tin liên hệ thành công.");
    } else {
        console.log("Không tìm thấy liên hệ với ID này.");
    }
}
function deleteContactById(id) {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Đã xóa liên hệ thành công.");
    } else {
        console.log("Không tìm thấy liên hệ với ID này.");
    }
}