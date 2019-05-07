
let arr = [-400, 12, 43, 29, 19]

function mergesort(arr) {
  if (!arr.length || arr.length === 1) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2)
  return merge(
    mergesort(arr.slice(0, midIndex)),
    mergesort(arr.slice(midIndex))
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
console.log(mergesort(arr))
