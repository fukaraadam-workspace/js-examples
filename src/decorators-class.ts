function decoratorLog(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("target", target);
  console.log("propertyKey", propertyKey);
  console.log("descriptor", descriptor);
}

class Person {
  name: string;
  age: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  @decoratorLog
  getBio() {
    return `${this.name} is ${this.age} years old`;
  }
}

// creates a new person
let man = new Person("Lawrence", 20);

console.log(man.getBio());
