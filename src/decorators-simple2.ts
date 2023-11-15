/**
 * Example of a simple decorator
 * Also known as a higher order function
 *
 * Credit: https://blog.logrocket.com/understanding-javascript-decorators/
 */

//ordinary multiply function
let Multiply = (...args) => {
  return args.reduce((a, b) => a * b);
};

// validated integers
const Validator = (fn) => {
  return function (...args) {
    const validArgs = args.every((arg) => Number.isInteger(arg));
    if (!validArgs) {
      throw new TypeError("Argument cannot be a non-integer");
    }
    return fn(...args);
  };
};

//decorated multiply function that only multiplies integers
const MultiplyValidArgs = Validator(Multiply);
const res = Multiply(6, 8, 2, 10);

console.log(res);
