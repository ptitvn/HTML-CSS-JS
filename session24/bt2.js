let array =[];
let menu = 0;
do {
    menu = +prompt(`
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
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
                let b = [];
                let a = [];

                for(let i= 0; i<array.length ; i++){
                    if(array[i]%2===0){
                        a.push(array[i]);  
                    }else{
                        b.push(array[i]);
                    }
                }
                alert(`số phần tử chẵn có trong mảng là: ${a}`);
                alert(`số phần tử lẻ có trong mảng là: ${b}`);
                break;
            case 4: 
                let sum = 0;
                for (let i = 0; i < array.length; i++) {
                    sum += array[i];
                }
                let average = sum / array.length;
                alert("Số trung bình cộng của mảng là"+average);

                break;
            case 5:
                let number = +prompt("Mời bạn nhập số muốn xóa");
                array.splice(number - 1,1);
                break;
            case 6:
                let max1 = -Infinity;
                let max2 = -Infinity;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] > max1) {
                        max2 = max1;
                        max1 = array[i];
                    } else if (array[i] > max2 && array[i] < max1) {
                        max2 = array[i];
                    }
                }
                if (max2 === -Infinity) {
                    alert("Không có số lớn thứ hai trong mảng.");
                } else {
                    alert("Số lớn thứ hai trong mảng là: " + max2);
                }
                break;
            default:
                break;
        }
} while (menu !=7);