function sayMyName() {
  console.log('Hi')
}

function debounce(fn, wait, immediate) {
  let timer = null

  return function () {
    let args = arguments
    let context = this

    if (immediate && !timer) {
      fn.apply(context, args)
    }

    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

let say = debounce(sayMyName, 3000, false)
say()
say()
say()