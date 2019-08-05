function insertsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];

    // compare the curr one with everything before
    // check from right to left
    // move everything bigger than the current one to the right
    j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }

    // insert the curr one to the stopped location
    arr[j + 1] = curr;
  }

  return arr;
}

module.exports = insertsort;
