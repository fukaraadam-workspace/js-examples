// script1.js
import { incrementCounter, getCounterValue } from './module-script.js';

incrementCounter();

console.log('Script1 incremented counter: ', getCounterValue()); // Output: 1
console.log('Script1 this: ', this); // Output: undefined
console.log('Script1 window: ', window); // Output: window object
