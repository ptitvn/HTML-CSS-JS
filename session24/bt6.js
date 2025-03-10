let array =[];
let menu = 0;

do {
    menu = +prompt (`
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
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
        const lengths = [];
        for (let i = 0; i < array.length; i++) {
            lengths.push(array[i].length);
        }
        alert(`[${lengths}]`);
        break;
    case 4:
        let count = 0;
        let a = prompt("Mời bạn nhập ký tự muốn đếm")
        for (let i = 0; i < array.length; i++) {
            let str = array[i];
            for (let j = 0; j < str.length; j++) {
                if (str[j] === a) {
                    count++;
                }
            }
        }
        alert(`Ký tự '${a}' xuất hiện ${count} lần trong mảng.`)

        break;
    case 5:
        let flag = 0; 
        for (let i = 0; i < array.length / 2; i++) {
            if (array[i] !== array[array.length - 1 - i]) {
                flag++;
            }
        }
        if(flag ===0){
            alert(" là chuỗi đối xứng");
        }else{
            alert(" không phải là chuỗi đối xứng")
        }
        break;  
    case 6:
        let result = [];
        for (let i = 0; i < array.length; i++) {
            let words = array[i].split(' ');
            for (let j = 0; j < words.length; j++) {
                words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
            }
        result.push(words.join(' '));
        }
        alert(result);
        break;
    case 7:
        break;
    default:
        console.log("Lựa chọn không hợp lệ");
        break;
   }
} while (menu !=7);