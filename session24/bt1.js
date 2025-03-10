let array =[];
let menu = 0;

do {
    menu = +prompt (`
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình`);
   switch (menu) {
    case 1:
        let n = +prompt("Mời bạn nhập vào số lượng phần tử");
        for (let i = 0; i < n; i++) {
            let element = +prompt("Nhập phần tử thứ :"+(i+1));
            array.push(element);       
        }
        break;
    case 2:
        alert(`${array}`);
        break;
    case 3:
        let max = array[0];
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
            if (array[i] < min) {
                min = array[i];
            }
        }
        alert(`Phần tử lớn nhất là: ${max}`);
        alert(`Phần tử nhỏ nhất là: ${min}`);
        break;
    case 4:
        let sum = 0;
        for(let i = 0; i< array.length;i++){

            sum += array[i];
        }
        alert(`Tổng các phần tử có trong mảng là ${sum}`);
        break;
    case 5:
        let numbers = +prompt("Mời bạn nhập phần tử trong mảng");
        let count = 0;
        for(let i =0; i<array.length;i++){
            if(array[i]===numbers){
                count++;
            }
        }
    if(count>0){
        alert(`Số ${numbers} xuất hiện ${count} lần trong mảng.`);
    }else{
        alert("Số không tồn tại");
    }
        break;  
    case 6:
        array.sort((a, b) => a - b);
        alert(`Mảng sau khi sắp xếp là ${array}`);
        break;
    case 7:
        break;
    default:
        console.log("Lựa chọn không hợp lệ");
        break;
   }
} while (menu !=7);