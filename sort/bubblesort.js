function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // ensure the last element is max by swapping
    // then shrink the arr for swapping
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (curr > next) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;
