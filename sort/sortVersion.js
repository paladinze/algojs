// var versions= ['1.45.0','1.5','6','3.3.3.3.3.3.3']

var arr = ["5.5.1", "4.21.0", "4.22.0", "6.1.0", "5.1.0", "4.5.0"];
arr = arr
  .map(a =>
    a
      .split(".")
      .map(n => +n + 100000)
      .join(".")
  )
  .sort();

console.log(arr);



var arr = ['5.5.1', '4.21.0', '4.22.0', '6.1.0', '5.1.0', '4.5.0'];
arr = arr.map( a => a.replace(/\d+/g, n => +n+100000 ) ).sort()
         .map( a => a.replace(/\d+/g, n => +n-100000 ) );

console.log(arr)