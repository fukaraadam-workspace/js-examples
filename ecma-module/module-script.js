// module-script.js
let counter = 0;

console.log('Module loaded, counter: ' + counter);

export function incrementCounter() {
  counter++;
}

export function getCounterValue() {
  return counter;
}