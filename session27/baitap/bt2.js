let danhSachSinhVien = [];
function danhSach(){
    let menu = 0;
   
    do {
         menu = +prompt(`
            1.Nhập danh sách sinh viên
            2.Hiển thị danh sách sinh viên
            3.Tìm sinh viên theo tên
            4.Xóa sinh viên khỏi danh sách
            5.Thoát`);
        
        switch (menu) {
            case 1:
                let soLuongSinhVien = +prompt("Nhập số lượng sinh viên:");
               
                for (let i = 0; i < soLuongSinhVien; i++) {
                    let tenSinhVien = prompt(`Nhập tên đầy đủ của sinh viên thứ ${i + 1}:`);
                    danhSachSinhVien.push(tenSinhVien);
                }
                break;
            case 2:
                console.log("Danh sách sinh viên:");
                danhSachSinhVien.forEach((ten, index) => {
                console.log(`${index + 1}. ${ten}`);
                });
                break;
            case 3:
                timSinhVienTheoTen();
                break;
            case 4:
                deleteStudent();
                break;
                
        default:
            break;
    }
    } while (menu !==5);
}
function timSinhVienTheoTen() {
    let tenCanTim = prompt("Nhập tên sinh viên cần tìm kiếm:");
    let sinhVienTimThay = danhSachSinhVien.find(sinhVien => sinhVien.toLowerCase() === tenCanTim.toLowerCase());

    if (sinhVienTimThay) {
        alert(`Sinh viên tìm thấy: ${sinhVienTimThay}`);
    } else {
        alert("Sinh viên không có trong danh sách.");
    }
}
function deleteStudent() {
    let deleteName = prompt("Nhập tên sinh viên cần xóa:");
    let index = danhSachSinhVien.indexOf(deleteName);
    if (index !== -1) {
        danhSachSinhVien.splice(index, 1);
        console.log(`Đã xóa sinh viên: ${deleteName}`);
    } else {
        console.log("Sinh viên không có trong danh sách.");
    }
}
danhSach();