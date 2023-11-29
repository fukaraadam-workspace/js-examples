let counter = 0;

export function incrementCounter() {
  counter++;
}

export function getCounterValue() {
  return counter;
}

console.log("Module loaded, counter: " + counter);
console.log("Module this: ", this); // Output: undefined
console.log("Module global: ", window); // Output: window object
