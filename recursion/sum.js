function sum(n) {
  function helper(n) {
    if (n == 1) {
      return n;
    }
    return n + helper(n - 1);
  }
  return helper(n);
}

console.log(sum(5));
