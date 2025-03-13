let arr = [];
function main(){
    let menu = 0;
   
    do {
         menu = +prompt(`
            1.Nhập danh sách số nguyên.
            2.Tính trung bình các số.
            3.Tìm số chẵn lớn nhất.
            4.Tìm số lẻ nhỏ nhất.
            5.Thoát.`);
        
        switch (menu) {
            case 1:
                let n = +prompt("Mời bạn nhập vào số lượng số nguyên muốn nhập vào");
                for(let i = 0;i<n;i++){
                    let numbers = +prompt("Mời bạn nhập vào số nguyên");
                    arr.push(numbers);
                }
                
                break;
            case 2:
                let sum = arr.reduce((acc, num) => acc + num, 0);
                let average = sum / arr.length;
                console.log(`Trung bình các số: ${average}`);
                break;
            case 3:
                let maxEven = Math.max(...arr.filter(num => num % 2 === 0));
                console.log(`Số chẵn lớn nhất: ${maxEven}`);
                break;
            case 4:
                let minOdd = Math.min(...arr.filter(num => num % 2 !== 0));
                console.log(`Số lẻ nhỏ nhất: ${minOdd}`);       
                break;
                
        default:
            break;
    }
    } while (menu !==5);
}
main();