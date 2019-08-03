/*
 * 防抖与节流函数是最常用的 高频触发优化方式
 * 防抖 (debounce):
 * 将多次高频操作优化为只在最后一次执行，通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。
 * 例子：搜索框预览搜索结果
 */

function debounce(fn, wait, callNow) {
  let timer = null;

  return function() {
    let args = arguments;
    let _this = this;

    if (callNow) {
      fn.apply(_this, args);
      callNow = false;
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, wait);
  };
}

function sayMyName() {
  console.log("Hi");
}

let say = debounce(sayMyName, 3000, false);
say();
say();
say();
