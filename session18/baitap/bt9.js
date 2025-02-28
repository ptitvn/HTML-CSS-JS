let hour = +prompt("Mời bạn nhập vào giờ");
let minute = +prompt("Mời bạn nhập vào phút");
let second = +prompt("Mời bạn nhập vào giây");
let time = hour>12? "PM" : "AM";
hour = hour%12;
alert(`Giờ sau khi đổi là ${hour}:${minute}:${second} ${time}`); 