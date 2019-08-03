let myArr = [1, 2, 2, 3];

// method 1: spread + set
const arr1 = [...new Set(myArr)];
console.log(arr1);

// method 2: Array.from + set
const arr2 = Array.from(new Set(myArr));
console.log(arr2);

// method 3: for loop
let arr3 = [];
myArr.forEach(item => {
  if (arr3.indexOf(item) === -1) {
    arr3.push(item);
  }
});
console.log(arr3);

// method 4: for loop variant (mutate original arr)
for (let i = myArr.length; i > 0; i--) {
  if (i !== myArr.indexOf(myArr[i])) {
    myArr.splice(i, 1);
  }
}

console.log(myArr);
