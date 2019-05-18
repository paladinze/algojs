function throttle(fn, wait, immediate) {
  let timer = null
  let callNow = immediate

  return function () {
    let context = this,
      args = arguments

    if (callNow) {
      fn.apply(context, args)
      callNow = false
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, wait)
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function sayMyName() {
  console.log('Hi')
}
let say = throttle(sayMyName, 1000, false)

setInterval(sayMyName, 100)