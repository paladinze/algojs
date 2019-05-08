function bubbleSort(arr) {

  for (let i=0; i<arr.length; i++) {

    // ensure the last element is max by swapping
    // then shrink the arr for swapping
    for (let j=0; j<arr.length - i - 1; j++) {
      let curr = arr[j];
      let next = arr[j+1];
      if (curr > next) {
        arr[j] = next;
        arr[j+1] = curr;
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;