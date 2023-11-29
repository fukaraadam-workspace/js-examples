function hocLog(fn) {
  return function () {
    console.log('Logged at: ' + new Date().toLocaleString());
    return fn();
  };
}

function decoratorLog(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  console.log('target', target);
  console.log('propertyKey', propertyKey);
  console.log('descriptor', descriptor);
}

class Person {
  name: string;
  age: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBioPure() {
    return `${this.name} is ${this.age} years old`;
  }

  @decoratorLog
  getBio() {
    return `${this.name} is ${this.age} years old`;
  }
}

// creates a new person
let man = new Person('Lawrence', 20);

// Hoc usage
console.log('---HOC Usage---');
let decoratedGetBio = hocLog(man.getBioPure.bind(man));
console.log(decoratedGetBio());

// Decorator usage
console.log('---Decorator Usage---');
console.log(man.getBio());
