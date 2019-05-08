function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {
    let lowest = arr[i];

    // check if the curr one is lowest
    // swap if not lowest
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] < lowest) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        lowest = arr[i]
      }
    }
  }

  return arr
}

module.exports = selectionSort;