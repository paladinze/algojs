// 返回数组最大差值
function maxDiff(arr) {
  if (!arr.length) return false;
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  console.log(max, min);
}

myArr = [112, 343, 5, 2, 1, 34];
maxDiff(myArr);
