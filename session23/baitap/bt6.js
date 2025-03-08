let arr = [0, 1, false, 2, '', 3, null, 'a', undefined, 'b', NaN, 'c'];

let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    result.push(arr[i]);
  }
}
console.log(result); 