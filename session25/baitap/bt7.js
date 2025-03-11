function capitalizeWords(str) {
    let result = '';
    let capitalizeNext = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += str[i];
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += str[i].toUpperCase();
            capitalizeNext = false;
        } else {
            result += str[i].toLowerCase();
        }
    }

    return result;
}

let string = prompt("MỜi bạn nhập vào chuỗi ký tự");
let str = capitalizeWords(string);
console.log(str);