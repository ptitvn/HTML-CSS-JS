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
                if(Number.isInteger(n)){
                    for(let i = 0;i<n;i++){
                        let numbers = +prompt("Mời bạn nhập vào số nguyên");
                        if(Number.isInteger(numbers)){arr.push(numbers);}
                        
                    }
                }
                
                
                break;
            case 2:
                let sum = arr.reduce((acc, num) => acc + num, 0);
                let average = sum / arr.length;
                console.log(`Trung bình các số: ${average}`);
                break;
            case 3:
                let maxEven = Math.max(...arr.filter(num => num % 2 === 0));
                if(maxEven === !-Infinity){
                    console.log(`Số chẵn lớn nhất: ${maxEven}`);
                }else{
                    console.log("Không có phần tử chẵn");
                }
                
                break;
            case 4:
                let minOdd = Math.min(...arr.filter(num => num % 2 !== 0));
                if(minOdd === !-Infinity){
                    console.log(`Số lẻ nhỏ nhất: ${minOdd}`); 
                }else{
                    console.log("Không có phần tử lẻ");
                    
                }
                      
                break;
                
        default:
            break;
    }
    } while (menu !==5);
}
main();