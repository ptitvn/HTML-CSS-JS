let menu = {};
let choice = 0;
do {
    choice = +prompt(`
        1.Thêm món ăn vào danh mục.
        2.Xóa món ăn theo tên khỏi danh mục.
        3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
        4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5.Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6.Thoát`)  
      switch (choice) {
          case 1:
            let Appetizers = prompt("Mời bạn nhập danh mục");
            let MainCourse = prompt("Mời bạn nhập vào món ăn");
            let money = +prompt("Mời bạn nhập vào giá");
            let describe = prompt("Mời bạn nhập giới thiệu sơ qua về món ăn");
            addDish(Appetizers, MainCourse, money, describe);
              break;
          case 2:
            let deleteApptizers = prompt("Mời bạn nhập vào danh mục");
            let deleteMain = prompt("Mời bạn nhập vào món  muốn xóa");
            removeDish(deleteApptizers, deleteMain );
              break;
          case 3:
                let upmain = prompt("Mời bạn nhập tên danh mục muốn thay");
                let upSideDishes = prompt("Mời bạn nhập vào món muốn thay ");
                let updateSpecial = prompt("Mời bạn nhập vào món ");
                let updateMony = +prompt("Mời bạn nhập giá đổi");
                let updateDescribe = prompt("Mời bạn nhập vào mô tả món ăn b vừa nhập")
                updateDish(upmain, upSideDishes, updateSpecial,updateMony , updateDescribe);
              break;
          case 4:
              displayMenu();
              break;
          case 5:
                let name = prompt("Mời bạn nhập vào tên món ăn muốn tìm");
                searchDish(name);
              break;
          case 6:
              break;
          default:
              console.log("Không hợp lệ")
              break;
      }
  } while (choice !=0);
  // thêm món ăn
function addDish(category, name, price, description) {
    if (!menu[category]) {
        menu[category] = [];
    }
    menu[category].push({ name, price, description });
}
// xóa món ăn
function removeDish(category, name) {
    if (menu[category]) {
        menu[category] = menu[category].filter(dish => dish.name !== name);
    }
}
// cập nhật món ăn theo danh mục ok
function updateDish(category, name, newName, newPrice, newDescription) {
    if (menu[category]) {
        for (let dish of menu[category]) {
            if (dish.name === name) {
                dish.name = newName || dish.name;
                dish.price = newPrice || dish.price;
                dish.description = newDescription || dish.description;
                break;
            }
        }
    }
}
// hiện menu
function displayMenu() {
    for (let category in menu) {
        console.log(`Danh mục: ${category}`);
        for (let dish of menu[category]) {
            console.log(`  Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`);
        }
    }
}

function searchDish(name) {
    for (let category in menu) {
        for (let dish of menu[category]) {
            if (dish.name === name) {
                console.log(`Tìm thấy món ăn: ${dish.name} trong danh mục: ${category}, Giá: ${dish.price}, Mô tả: ${dish.description}`);
                return;
            }
        }
    }
    console.log(`Không tìm thấy món ăn: ${name}`);
}