// 两个数组合并成一个数组

const a = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
const b = ["A", "B", "C", "D"];

const c = [...a, ...b];

console.log(c);

// 将两个有序数组合成一个有序数组 不能用 concat sort

const merge = (arr1, arr2) => {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      result.push(arr2.shift());
    } else {
      result.push(arr1.shift());
    }
  }
  return [...result, ...arr1, ...arr2];
};

let arr1 = [1, 3, 4, 5];
let arr2 = [0, 2, 4, 5, 9];

console.log(merge(arr1, arr2));
