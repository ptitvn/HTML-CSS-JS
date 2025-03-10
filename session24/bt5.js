let array =[[],[]];
let menu = 0;
do {
    menu = +prompt(`
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
        7. Thoát chương trình`);
        switch (menu) {
            case 1:
                let row = +prompt("Mời bạn nhập vào hàng");
                let col = +prompt("Mời bạn nhập vào số cột");
                for (let i = 0; i < row; i++) {
                    array[i] = [];
                    for (let j = 0; j < col; j++) {
                        let arr = prompt(`Nhập giá trị cho phần tử [${i}][${j}]:`);
                        array[i][j] = Number(arr); 
                    }
                }
                
                break;
            case 2:
                
                alert(`Mảng vừa nhập là [${array[0]}] [${array[1]}]`);
                break;
            case 3:
                let total = 0;
                for (let i = 0; i < array.length; i++) {
                    for (let j = 0; j < array[i].length; j++) {
                        total += array[i][j];
                    }
                }
                alert("Tổng ="+total);
                break;
            case 4: 
                let sum = 0;
                for (let i = 0; i < array.length; i++) {
                    sum += array[i][i];
                }
                alert("tổng đường chéo chính là "+sum);
                break;
            case 5:
                let sum2 = 0;

                for (let i = 0; i < array.length; i++) {
                    sum2 += array[i][array.length - 1 - i];
                }
                alert("tổng đường chéo chính là "+sum2);
                break;
            case 6:
                let sum3 = 0;
                let count = 0;
                let type = prompt("Mời bạn chọn row hoặc column");
                let index = +prompt("Mời bạn nhập cột bạn muốn cộng");
                if (type === 'row') {
                    for (let i = 0; i < array[index].length; i++) {
                        sum3 += array[index][i];
                        count++;
                    }
                } else if (type === 'column') {
                    for (let i = 0; i < array.length; i++) {
                        if (array[i][index] !== undefined) {
                            sum3 += array[i][index];
                            count++;
                        }
                    }
                }else{
                    alert("Bạn phải nhập đúng row hoặc column")
                }
                let sum4 = sum3 / count;
                alert(sum4);
                break;
            case 7:
                break;
            default:
                alert("Không hợp le")
                break;
        }
} while (menu !==0);