for (let i = 0; i < 10; i++) {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log('%c màu sắc đã được thay đổi', `color: ${color};`);
}