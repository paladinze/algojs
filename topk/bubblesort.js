// Use Bubble k times
// 1) Modify Bubble Sort to run the outer loop at most k times.
// 2) Print the last k elements of the array obtained in step 1.
// Time Complexity: O(nk)

function topk(arr, k) {
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.slice(arr.length - k);
}

myArr = [125, 10, 10000, 345, 8, 600, 6];
console.log(topk(myArr, myArr.length));
