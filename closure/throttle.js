/*
 * 防抖与节流函数是最常用的 高频触发优化方式
 * 节流 (throttle):
 *  每隔一段时间后执行一次，也就是降低频率，将高频操作优化成低频操作，
 *  通常使用场景: 滚动条事件 通常每隔 100~500 ms执行一次即可。
 */

function throttle(fn, wait, callNow) {
  let timer = null;

  return function() {
    let args = arguments;
    let _this = this;

    if (callNow) {
      fn.apply(_this, args);
      callNow = false;
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(_this, args);
        timer = null;
      }, wait);
    }
  };
}

function sayMyName() {
  console.log("Hi");
}
let say = throttle(sayMyName, 1000, false);

setInterval(sayMyName, 100);
