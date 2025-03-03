let number = +prompt("Mời bạn nhập vào số năm 1-12");
switch (number) {
    case 1,2,3:
        console.log(`mùa xuân`);
        break;
    case 4,5,6:
        console.log(`mùa hạ`);
        break;
    case 7,8,9:
        console.log(`mùa thu`);
        break;
    case 10,11,12:
        console.log(`Mùa đông`);
        break;
    default:
        console.log(`tháng không hợp lệ`);
        break;
}