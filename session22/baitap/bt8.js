let arr = [1, 2, 3, 2, 4, 2, 5, 3, 6, 2];
let counts = {};
let maxCount = 0;
let mostFrequent = arr[0];
for (let i = 0; i < arr.length; i++) {
  let n = arr[i];
  if (counts[n] === undefined) {
    counts[n] = 1;
  } else {
    counts[n]++;
  }
}
for (let n in counts) {
  if (counts[n] > maxCount) {
    maxCount = counts[n];
    mostFrequent = Number(n); 
  } else if (counts[n] === maxCount) {
    if (Number(n) < mostFrequent) {
      mostFrequent = Number(num); 
    }
  }
}
console.log("Phần tử xuất hiện nhiều nhất:", mostFrequent);
