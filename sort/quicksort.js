// general algo
// Step 1 − Make the right-most index value pivot
// Step 2 − partition the array using pivot value
// Step 3 − quicksort left partition recursively
// Step 4 − quicksort right partition recursively

// procedure quickSort(left, right)
//    if right-left <= 0
//       return
//    else     
//       pivot = A[right]
//       partition = partitionFunc(left, right, pivot)
//       quickSort(left,partition-1)
//       quickSort(partition+1,right)    
//    end if		

// partition algo
// Step 1 − Choose the highest index value as pivot
// Step 2 − Take two variables to point left and right of the list excluding pivot
// Step 3 − left points to the low index
// Step 4 − right points to the high
// Step 5 − while value at left is less than pivot move right
// Step 6 − while value at right is greater than pivot move left
// Step 7 − if both step 5 and step 6 does not match swap left and right
// Step 8 − if left ≥ right, the point where they met is new pivot


// end procedure


function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(arr, left, right) {
  var pivot = arr[Math.floor((right + left) / 2)]

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function quickSort(arr, left, right) {
  if (arr.length > 1) {
    let newPivot = partition(arr, left, right);
    if (left < newPivot - 1) {
      quickSort(arr, left, newPivot - 1);
    }
    if (newPivot < right) {
      quickSort(arr, newPivot, right);
    }
  }
  return arr;
}

function sort(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

module.exports = sort;