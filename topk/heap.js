// Store the first k elements in a temporary array
// Find the smallest element in temp
// For each element x in arr[k] to arr[n-1]. O(n-k)
// If x is greater than the min then remove min from temp[] and insert x.
// Then, determine the new min from temp[]. O(k)
// Print final k elements of temp[]
// Time Complexity: O((n-k)*k). If we want the output sorted then O((n-k)*k + klogk)

function topk(arr, k) {
  let topk = [arr.slice(0, k)];

  for (let i = k; i < arr.length; i++) {
    

  }
  return topk;
}

myArr = [125, 10, 10000, 345, 8, 600, 6];
console.log(topk(myArr, myArr.length));
