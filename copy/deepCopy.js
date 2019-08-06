function deepCopy(obj) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      result[key] = deepCopy(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
