let array =[];
let menu = 0;
do {
    menu = +prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
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
                alert(`Mảng vừa nhập là ${array}`);
                break;
            case 3:
                let maxIndex = 0;
                let maxValue = array[0];
                for (let i = 1; i < array.length; i++) {
                    if (array[i] > maxValue) {
                        maxValue = array[i];
                        maxIndex = i;
                    }
                }
                alert("Chỉ số của phần tử lớn nhất là:"+maxIndex);
                break;
            case 4: 
            let sum = 0;
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] > 0) {
                    sum += array[i]; 
                    count++; 
                }
            }
            
            if(count ===0){
                let average = sum / count;
                alert("Tổng các số dương: " + sum);
                alert("Trung bình cộng các số dương: " + average);
            }else{
                alert("Mảng không có số dương");
            }
            

                break;
            case 5:
               let arr = array.reverse();
               alert(`Chuỗi sau khi đảo ngược là ${arr}`);
                break;
            case 6:
                let flag = 0; 
                for (let i = 0; i < array.length / 2; i++) {
                    if (array[i] !== array[array.length - 1 - i]) {
                        flag++;
                    }
                }
                if(flag ===0){
                    alert("mảng là chuỗi đối xứng");
                }else{
                    alert("Mảng không phải là chuỗi đối xứng")
                }
                break;
            
            default:
                alert("Không hợp le")
                break;
        }
} while (menu !=7);