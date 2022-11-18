/**
 * - Addressing problems 04, 06, 08
 * - Implementing challenge goal, not required by interviewer.
 */

namespace problems {




  // first Block

  /**
   * setTimeout default to 0.
   */
  setTimeout(() => {
    console.log(1);
  });

  setTimeout(() => {
    console.log(2);
  }, 0);

  /**
   * Resolved then create a microtask
   */
  Promise.resolve(true).then(() => {
    console.log(3);
  });

  queueMicrotask(() => {
    console.log(4);
  });

  console.log(5);
  console.log(6);

  //* RESULT  js stack, micro, macro
  //* 5, 6, 3, 4, 1, 2

  // second Block

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
  //* Solution at: sol04.ts

  const person = {
    name: 'Turing',
    age: 30,
    skills: [1, 2, '3'],
    isAdmin: true,
  };

  // function returnA<Type>(arg: Type): Type {
  //   return arg.length;
  // }

  function returnA<Type>(...arg: []Type): number {
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

// ???? whats the challenge here?


  // Sixth
  //* !!! Solution at: sol06.js

  // Implement a pipe and a compose function

        // function test1(a) {
        //   a.push(1);
        //   return a;
        // }
        // function test2(a) {
        //   a.push(2);
        //   return a;
        // }
        // function test3(a) {
        //   a.push(3);
        //   return a;
        // }

        // // implement a pipe function
        // const pipe = () => {};
        // // implement a compose function
        // const compose = () => {};

// !!! Solution at: sol06.js



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

  //* Solution at: sol08.js

  console.log('Turing'.printTuring(3)); // Turing, Turing, Turing.
  console.log('Turing 2'.printTuring(4)); // Turing, Turing, Turing.

  // ex: 'Turing 2'.printTuring(4); // Turing 2, Turing 2, Turing 2, Turing 2.
}
