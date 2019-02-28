// Basic Decorator
function logged(constructorFn: Function) {
  console.log(constructorFn); // Will log the class Person constructor.
}

@logged
class Person {
  constructor() {
    console.log('Hi!');
  }
}

// Factory
/**
 * Factory functions return decorators.
 */
function logging(value: boolean) {
  return value ? logged : () => {};
}

@logging(true)
class Car {
}

// Advanced Decorator
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
    this.name = 'Red Plant'
  }
}

@logging(false)
@printable
class Plant {
  private name = 'Green Plant';
}

const plant = new Plant();
(<any>plant).print();
console.log('After print()', plant);

// Method and Property Decorators
// Method
function editable(value: boolean) {
  return function(target:any, propName: string, descriptor: PropertyDescriptor = {}) {
    descriptor.writable = value;
    Object.defineProperty(target, propName, descriptor);
  }
}

// Property
function overwritable(value: boolean): any {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  }
}

class Project {
  @overwritable(true)
  private projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project('Super Project');
project.calcBudget(); // Prints: 1000
// project.calcBudget = () => { // Throws error in console IF editable is false, cannot assign new property to this.
//   console.log(2000);
// };
// project.calcBudget(); // Prints: 2000 // No longer possible with editable(true).
console.log(project) // IF overwritable is false, then it equal to undefined.
// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('Method name: ', methodName);
  console.log('Param index: ', paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('TypeScript');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);