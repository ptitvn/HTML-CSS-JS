let rectangle = {
    width: 10,
    height: 5,
    getArea: "một phương thức trả về diện tích hình chữ nhật (width * height)"
}
rectangle.getArea = rectangle.width * rectangle.height;
console.log(rectangle.getArea);