// short version
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// verbose version
const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok!");
    }, time);
  });
};

(async () => {
  console.log("hello");
  await sleep(2000); // 等待两秒
  console.log("world");
})();
