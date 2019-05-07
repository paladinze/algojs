function reverseString(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function reverseString2(str) {
  return str.split('').reverse().join('')
}

function reverseString3(str) {
  return str.split('').reduce((res, curr) => curr + res, '')
}

module.exports = reverseString3;