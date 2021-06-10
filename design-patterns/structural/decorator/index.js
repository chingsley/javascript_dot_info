//decorator function
const allArgsValid = function (fn) {
  return function (...args) {
    // fn.length is the number of parameters passed into a the definition of fn e.g "fn(a,b,c) { return a+b+c} " means fn.length = 3
    if (args.length != fn.length) {
      throw new Error("Only submit required number of params");
    }
    const validArgs = args.filter((arg) => Number.isInteger(arg));
    if (validArgs.length < fn.length) {
      throw new TypeError("Argument cannot be a non-integer");
    }
    return fn(...args);
  };
};

//ordinary multiply function
let multiply = function (a, b) {
  return a * b;
};

//decorated multiply function that only accepts the required number of params and only integers
multiply = allArgsValid(multiply);

console.log(multiply(6, 8));
//48
try {
  console.log(multiply(6, 8, 7));
} catch (error) {
  console.log(error.message);
}
//Error: Only submit required number of params
try {
  console.log(multiply(3, null));
} catch (error) {
  console.log(error.message);
}
//TypeError: Argument cannot be a non-integer
try {
  console.log(multiply("", 4));
} catch (error) {
  console.log(error.message);
}
//TypeError: Argument cannot be a non-integer
