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

let arr2 = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10
];
console.log(flatten(arr2));
