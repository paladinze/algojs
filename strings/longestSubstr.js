/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length;

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let substr = "";
    for (let j = i; j < s.length; j++) {
      if (substr.indexOf(s[j]) == -1) {
        substr += s[j];
      } else {
        arr.push(substr);
        substr = "";
        break;
      }
    }
    if (substr.length) arr.push(substr);
  }
  return arr.reduce((prev, curr) => {
    return Math.max(prev, curr.length);
  }, 0);
};

lengthOfLongestSubstring("ab");
