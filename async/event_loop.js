async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  //async2做出如下更改：
  new Promise(function(resolve) {
    console.log("promise1");
    resolve();
  }).then(function() {
    console.log("promise2");
  });
}
console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);
async1();

new Promise(function(resolve) {
  console.log("promise3");
  resolve();
}).then(function() {
  console.log("promise4");
});

console.log("script end");

/*
console.log('script start');
console.log('async1 start');
console.log('promise1');
console.log('promise3');
console.log('promise2');
console.log('async1 end');
console.log('promise4');
console.log('setTimeout');
*/