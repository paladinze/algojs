// 实现 add 函数,让 add(a)(b)和 add(a,b)两种调用结果相同

function add(a, b) {
  if (b === undefined) {
    return x => {
      return a + x;
    };
  }
  return a + b;
}
