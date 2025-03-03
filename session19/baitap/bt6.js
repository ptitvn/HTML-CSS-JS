let a = +prompt("mời bạn nhập vào số thứ 1");
let b = +prompt("mời bạn nhập vào số thứ 2");
let c = +prompt("mời bạn nhập vào số thứ 3");
let delta = b**2-4*a*c;
if (delta < 0) {
    console.log('Phương trình vô nghiệm');
} else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`Phương trình có nghiệm kép: x1 = x2 = ${x}`);
} else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log( `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
}
