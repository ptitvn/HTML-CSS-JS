let array =[[],[]];
let menu = 0;
do {
    menu = +prompt(`
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
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
            let maxElement = -Infinity;
            let maxIndex = [-1, -1];
        
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j <array[i].length; j++) {
                    if (array[i][j] > maxElement) {
                        maxElement = array[i][j];
                        maxIndex = [i, j];
                    }
                }
            }
            alert(`Phần tử lớn nhất là ${maxElement} tại chỉ số [${maxIndex[0]}, ${maxIndex[1]}]`);
                break;
            case 5:
               let rowIndex = +prompt("Mời bạn nhập vào số hàng bạn muốn cộng");
               let sum = 0;
               for (let i = 0; i < array[rowIndex].length; i++) {
                sum += array[rowIndex][i];
            }
            let average = sum / array[rowIndex].length;
            alert("Trung bình cộng của hàng " + rowIndex + " là: " + average);

                break;
            case 6:
                let reversedArray = array.reverse();
                alert(`Chuỗi đảo ngược là [${reversedArray[0]}] [${reversedArray[1]}] `);
                break;
            case 7:
                break;
            default:
                alert("Không hợp le")
                break;
        }
} while (menu !==7);