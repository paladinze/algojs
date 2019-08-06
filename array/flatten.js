// 数组扁平化
// 并去除其中重复部分数据
// 最终得到一个升序且不重复的数组

function flatten(arr) {
  let flatten = arr.toString().split(","); // flatten
  flatten = Array.from(new Set(flatten)); // make unqiue
  flatten = flatten.sort((a, b) => {
    a - b;
  }); // sort the array
  return flatten;
}

let arr1 = [1, 2, [1, 3, 4]];
console.log(flatten(arr1));

// 递归方法，支持数组包含object
let result = [];
function flatten(arr) {
  for (const i of arr) {
    if (i instanceof Array) {
      flatten(i);
    } else {
      result.push(i);
    }
  }
}

let arr2 = [1, 2, 3, [4, 5, 6], [{ a: 1 }]];
flatten(arr2);
console.log(result);
