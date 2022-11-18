// Sixth

// Implement a pipe and a compose function
console.log('ex 6: Implement a pipe and a compose function');

// fns to pipe, compose.
function test1(a) {
  a.push(1);
  return a;
}
function test2(a) {
  a.push(2);
  return a;
}
function test3(a) {
  a.push(3);
  return a;
}

// implement a pipe function

/**
 * str.trim
 * str.reverse
 * str.toUpperCase
 *
 * pipe = trim().reverse().toUpperCase
 */
const pipe = (...fns) => {
  return (v) => fns.reduce((currentVal, currentFn) => currentFn(currentVal), v);
};

// implement a compose function

/**
 * str.trim
 * str.reverse
 * str.toUpperCase
 *
 * compose = trim(reverse(toUpperCase))
 */
const compose =
  (...fns) =>
  (v) =>
    fns.reduceRight((currentVal, currentFn) => currentFn(currentVal), v);

// let a1 = [0]
// let res = pipe2(test1(a1),test2(a1),test3(a1));

// console.log(res);

const test = () => {
  console.log('ex 6: pipe( test1, test2,test3)([0])');

  let a1 = [0];
  let res = pipe(test1, test2, test3)(a1);
  console.log(res);

  console.log('ex 6: compose( test1, test2,test3)([0])');
  let a2 = [0];
  let res2 = compose(test1, test2, test3)(a2);
  console.log(res2);
};

test();

export const SolutionSix = {
  pipe: pipe,
  compose: compose,
};
