// 一只青蛙一次可以跳上1级台阶
// 也可以跳上2级
// 求该青蛙跳上一个n级的台阶总共有多少种跳法
// （先后次序不同算不同的结果）
// 直接考虑n阶时的情况。第n阶台阶可以从第n-1台阶跳1级到达，也可以从n-2阶跳2级到达。可以得到公式
// f(n) = f(n-1) + f(n-2) 这其实就是斐波那契数列的表达

function jumpFloor(n) {
  if (n <= 0) return -1;
  if (n == 1) return 1;
  if (n == 2) return 2;
  return jumpFloor(n - 1) + jumpFloor(n - 2);
}

console.log(jumpFloor(3));

// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

function jumpFloorII(n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return 1;
  }
  return 2 * jumpFloorII(n - 1);
}
