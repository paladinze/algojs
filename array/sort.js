// 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果

let arr = [3, 15, 8, 29, 102, 22];
arr.sort((a, b) => {
  return a - b;
});

console.log(arr);
