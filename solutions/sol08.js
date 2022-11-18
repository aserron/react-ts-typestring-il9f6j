String.prototype.printTuring = function (v) {
  let str = `${this}`;
  let arr = Array.from(new Array(v));
  return arr.map((v) => str).join(', ');
};

// implement so...
console.log('Turing'.printTuring(3)); // Turing, Turing, Turing.
console.log('Turing 2'.printTuring(4)); // Turing 2, Turing 2, Turing 2, Turing 2.


String.prototype.trim;
