let number = +prompt("Mời bạn nhập số từ 0 ->9");
switch (number) {
    case 0:
        alert(`số không`);
        break;
    case 1:
        alert(`số một`);
        break;
    case 2:
        alert(`số hai`);
        break;
    case 3:
        alert(`số ba`);
        break; 
    case 4:
        alert(`số bốn`);
        break;
    case 5:
        alert(`số năm`);
        break;
    case 6:
        alert(`số sáu`);
        break;
    case 7:
        alert(`số bảy`);
        break;
    case 8:
        alert(`số tám`);
        break;
    case 9:
        alert(`số chín`);
        break;

    default:
        alert(`số bạn vừa nhập không phải số từ 0->9`);
        break;
}