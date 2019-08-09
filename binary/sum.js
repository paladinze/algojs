function Add(num1, num2) {
  let xor = num1 ^ num2;
  let carry = (num1 & num2) << 1;
  return xor + carry;
}

console.log(Add(1, 2));
