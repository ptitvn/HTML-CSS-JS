let array =[];
let menu = 0;

do {
    menu = +prompt (`
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi ký tự
        5. Đếm số lượng từ trong chuỗi ký tự
        6. Tìm kiếm và thay thế các ký tự 
        7. Thoát chương trình`);
   switch (menu) {
    case 1:
        let n = prompt("Mời bạn nhập vào chuỗi");
        for (let i = 0; i < n; i++) {
            let element = prompt("Nhập chuỗi ký tự thứ :"+(i+1));
            element.split(",");  
            array.push(element); 
        }
        break;
    case 2:
        alert(`[${array}]`);
        break;
    case 3:
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].trim();
        }
        alert(array);
        break;
    case 4:
        let reversedCharArray = array.reverse();
        let reversedString = reversedCharArray.join("");
        alert(reversedString);

        break;
    case 5:
        let lengths = [];
        for (let i = 0; i < array.length; i++) { 
            lengths.push(array[i].length);
            
        }
        alert(`số lượng từ trong chuỗi là [${sum}]`);
        break;  
    case 6:
        let searchString = prompt("MỜi bạn nhập vào ký tự muốn thay thế");
        let replaceString = prompt("Mời bạn nhập vào ký tự thay thế");
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'string') {
                array[i] = array[i].split(searchString).join(replaceString);
            }
        }
        alert(array);
        break;
    case 7:
        break;
    default:
        console.log("Lựa chọn không hợp lệ");
        break;
   }
} while (menu !=7);