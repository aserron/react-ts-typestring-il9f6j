// fourth block

(function fourth() {
  const person = {
    name: 'Turing',
    age: 30,
    skills: [1, 2, '3'],
    isAdmin: true,
  };

  // fixed
  function returnA<Type>(...arg: Type[]): number {
    return arg.length;
  }

  // more on this
  function returnPersonArr<Type>(...arg: Type[]): Type[] {
    return arg;
  }

  const parr = returnPersonArr<typeof person>(person);

  console.log();
  console.log(arr.length);
  console.log([0]);
})();
