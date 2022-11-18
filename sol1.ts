/*

Here “platform code” means engine, environment, 
and promise implementation code. 

In practice, this requirement ensures that onFulfilled and onRejected execute asynchronously, after the event loop turn in which then is called, and with a fresh stack. 

This can be implemented with either a “macro-task” mechanism such as setTimeout or setImmediate, or with a “micro-task” mechanism such as MutationObserver or process.nextTick. 

Since the promise implementation is considered platform code, 
it may itself contain a task-scheduling queue or “trampoline” in which the handlers are called. 

*/


// first Block

//* MacroTask: Event Loop
setTimeout(() => {
  console.log(1);
});

//* MacroTask: Event Loop
setTimeout(() => {
  console.log(2);
}, 0);


//* MacroTask: Future Tick of the event loop. (first after syncrounous/exec stack)
Promise.resolve(true)
.then(() => {
  console.log(3);
});

//* MicroTask: First tick after sync, before EventLoop
queueMicrotask(() => {
  console.log(4);
});

// Task: Exec. Stack syncronous code, exec stack.
console.log(5);
console.log(6);


// second Block: find the error

// error is reference to variable i is being called from each called timeout.
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// third block
function* generator(number) {
  yield number;
  yield (number += 10);
  yield (number += 10);
}

const gen = generator(10);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// fourth block

const person = { name: 'Turing', age: 30, skills: [1, 2, '3'], isAdmin: true };

function returnA<Type>(arg: Type): Type {
  return arg.length;
}

// fifth block

const arr = [];
const user = arr.reduce((acc, curr) => {
  return {
    ...acc,
    [curr.id]: curr,
  };
}, {});

// Sixth

// Implement a pipe and a compose function

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
const pipe = () => {};
// implement a compose function
const compose = () => {};

// seventh

// 1. Sort this array
// sort this array based on name in alphabetical order
// sort this array based on age

let usersArray = [
  { name: 'Avi', age: 40 },
  { name: 'Yash', age: 20 },
  { name: 'Test', age: 35 },
  { name: 'RC' },
  { name: 'Jay', age: 10 },
];

// 2. Copy this array to another array and only copy odd numbers

let array = [1, 2, 3, 5, 7, 8, 9, 10];

// 3. Implement a Queue in javascript

// 4. Write a component in Reactjs which provides button-like functionality as well text shown by component is a counter which starts from 0 and every second incremented by one. Also when this component is clicked , the counter is incremented by one.

//  eighth

console.log('Turing'.printTuring(3)); // Turing, Turing, Turing.

// ex: 'Turing 2'.printTuring(4); // Turing 2, Turing 2, Turing 2, Turing 2.
