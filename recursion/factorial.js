function factor(k) {
  if (k == 1) {
    return 1;
  }
  return k * factor(k - 1);
}

console.log(factor(5));
