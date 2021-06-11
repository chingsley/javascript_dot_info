// // create a function and immediately call it with new
// let user = new (function () {
//   this.name = "John";
//   this.isAdmin = false;

//   // ...other code for user creation
//   // maybe complex logic and statements
//   // local variables etc
// })();

function Calculator() {
  this.read = function () {
    this.a = 2;
    this.b = 3;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
