
function mergeSort(arr) {
  if (!arr.length || arr.length === 1) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2)
  return merge(
    mergeSort(arr.slice(0, midIndex)),
    mergeSort(arr.slice(midIndex))
  );

}

function merge(left, right) {
  let result = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  result = [...result, ...left, ...right];
  return result;
}

module.exports = {mergeSort, merge}