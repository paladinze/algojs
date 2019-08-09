function binarySearch(arr, x, start, end) {
  if (start > end) {
    return false;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) {
    return mid;
  }
  if (arr[mid] > x) {
    return binarySearch(arr, x, start, mid - 1);
  }
  if (arr[mid] < x) {
    return binarySearch(arr, x, mid + 1, end);
  }
}

let arr = [1, 2, 3, 5, 10];

let res = binarySearch(arr, 2, 0, arr.length - 1);
console.log(res);
