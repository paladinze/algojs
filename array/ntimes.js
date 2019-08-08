// 给所有的数组添加一个function, 入参为n, 返回数组中只出现了n次数的值

Array.prototype.ntimes = function(n) {
  let map = {};
  for (let i of arr) {
    if (map[i]) {
      map[i]++;
    } else {
      map[i] = 1;
    }
  }
  console.log(map);
  for (let i in map) {
    if (map[i] == n) {
      return i;
    }
  }
};

let arr = [1, 2, 5, 5, 3];
console.log(arr.ntimes(2));
