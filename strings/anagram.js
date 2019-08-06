// One string is an anagram of another if it uses the same characters

function cleanStr(str) {
  str = str.toLowerCase();
  str.replace(/[^\w]/g, "");
  return str;
}

function getCharmap(str) {
  let charmap = {};
  str.split("").forEach(char => {
    if (charmap[char]) {
      charmap[char]++;
    } else {
      charmap[char] = 1;
    }
  });
  return charmap;
}

function anagram(strA, strB) {
  strA = cleanStr(strA);
  strB = cleanStr(strB);

  const charmapA = getCharmap(strA);
  const charmapB = getCharmap(strB);

  // checking if charmaps are the same size
  if (Object.keys(strA).length !== Object.keys(strB).length) {
    return false;
  }

  // check if char count is the same
  for (let char in charmapA) {
    if (charmapA[char] !== charmapB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagram;
