function tinhDienTichHinhChuNhat(chieuDai, chieuRong) {
    return chieuDai * chieuRong;
}
function tinhChuViHinhChuNhat(chieuDai, chieuRong) {
    return 2 * (chieuDai + chieuRong);
}
function tinhDienTichHinhTron(banKinh) {
    return Math.PI * Math.pow(banKinh, 2);
}
function tinhChuViHinhTron(banKinh) {
    return 2 * Math.PI * banKinh;
}
function main(){
    let choice=0;
    
    do{
        let radius = 0;
        let length = 0;
        let wide = 0;
        let choice = +prompt(`
            1.Tính diện tích hình tròn.
            2.Tính chu vi hình tròn.
            3.Tính diện tích hình chữ nhật.
            4.Tính chu vi hình chữ nhật.
            5.Thoát.`);
        switch(choice){
            case 1:
                radius = +prompt("Mời bạn nhập vào bán kính");
                console.log(tinhChuViHinhTron(radius));
                break;
            case 2:
                radius = +prompt("Mời bạn nhập vào bán kính");
                console.log(tinhChuViHinhTron(radius));
                break;
            case 3:
                length = +prompt("Mời bạn nhập vào chiều dài");
                wide = +prompt("Mời bạn nhập vào chiều rộng");
                console.log(tinhDienTichHinhChuNhat(length,wide));
                break;
            case 4:
                length = prompt("Mời bạn nhập vào chiều dài");
                wide = +prompt("Mời bạn nhập vào chiều rộng");
                console.log(tinhChuViHinhChuNhat(length,wide));
                break;
            case 5:
                
                break;
            default :

                break;

        }

    }while(choice!=5);
}
main();