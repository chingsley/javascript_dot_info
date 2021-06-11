{
  // COUNTER
  function createCounter() {
    let count = 0;
    return function () {
      return ++count;
    };
  }

  const counter = createCounter();
  console.log(counter());
  console.log(counter());
  console.log(counter());
}

{
  // COUNTER (REFACTORED)
  // we  used an immediately invoked function expression
  // to create a private variable, counter
  const counterIncrementer = (function () {
    let counter = 0;

    return function () {
      return ++counter;
    };
  })();

  console.log(counterIncrementer()); // prints out 1
  console.log(counterIncrementer()); // prints out 2
  console.log(counterIncrementer()); // prints out 3
}
