// take a function as input
// transform the function such that it can only be executed for three times

const sayHi = function () {
  console.log('hello!')
}

const threeTimes = function (fn) {
  let counter = 3;
  let newfn = () => {
    if (counter >= 1) {
      fn()
      counter--;
    }
  }
  return newfn;
}

const sayHi3 = threeTimes(sayHi);

sayHi3();
sayHi3();
sayHi3();
sayHi3();
sayHi3();
sayHi3();