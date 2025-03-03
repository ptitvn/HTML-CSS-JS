let month = +prompt("Mời bạn nhập vào tháng");
switch (month) {
    case 1:
        console.log(`tháng ${month} có 31 ngày`);
        break;
    case 2:
        console.log(`tháng ${month} có 28 ngày hoặc 29 ngày năm nhuận`);
        break;
    case 3:
        console.log(`tháng ${month} có 31 ngày`);
        break;
    case 4:
        console.log(`tháng ${month} có 30 ngày`);
        break;
    case 5:
                console.log(`tháng ${month} có 31 ngày`);
        break;
    case 6:
        console.log(`tháng ${month} có 30 ngày`);
        break;
    case 7:
        console.log(`tháng ${month} có 31 ngày`);
        break;
    case 8:
        console.log(`tháng ${month} có 31 ngày`);
        break;
    case 9:
        console.log(`tháng ${month} có 30 ngày`);
        break;
    case 10:
        console.log(`tháng ${month} có 31 ngày`);
        break;
    case 11:
        console.log(`tháng ${month} có 30 ngày`);
        break;
    case 12:
        console.log(`tháng ${month} có 31 ngày`);
        break;
    default:
        console.log("tháng không hợp lệ");
        break;
}