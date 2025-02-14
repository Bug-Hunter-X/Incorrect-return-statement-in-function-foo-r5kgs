function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect return statement
  }
  return a + b;
}

console.log(foo(0, 1)); //outputs 0
console.log(foo(1, 0)); //outputs 0
console.log(foo(2, 3)); //outputs 5