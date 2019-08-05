// for in loop
let ze = {
  fname: "Ze",
  lname: "Cheng"
};

for (const key in ze) {
  if (ze.hasOwnProperty(key)) {
    console.log(ze[key]);
  }
}

// for of loop
let duo = ["a", "b", "c"];
for (const item of duo) {
  console.log(item);
}

// regular loop
for (let i = 0; i < duo.length; i++) {
  console.log(duo[i]);
}
