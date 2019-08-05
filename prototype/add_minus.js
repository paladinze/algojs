// 实现 (5).add(3).minus(2) 功能

Number.prototype.add = function(x) {
  return this + x;
};

Number.prototype.minus = function(x) {
  return this - x;
};

console.log((5).add(2).minus(2));
