

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

function palindrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length -1 -i]
  })
}


module.exports = palindrome2;