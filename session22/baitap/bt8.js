let arr = [1, 2, 3, 2, 4, 2, 5, 3, 6, 2];
let counts = {};
let maxCount = 0;
let mostFrequent = arr[0];
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (counts[num] === undefined) {
    counts[num] = 1;
  } else {
    counts[num]++;
  }
}
for (let num in counts) {
  if (counts[num] > maxCount) {
    maxCount = counts[num];
    mostFrequent = Number(num); 
  } else if (counts[num] === maxCount) {
    if (Number(num) < mostFrequent) {
      mostFrequent = Number(num); 
    }
  }
}
console.log("Phần tử xuất hiện nhiều nhất:", mostFrequent);