// Private members and class inheritance
class Type {
  private type: string | null = null;

  setType = (type: string) => {
    this.type = type;
    console.log(this.type);
  } 
}

class Person extends Type {
  protected age: number = 23;

  constructor(public name: string, public userName: string, private email: string) {
    super()
    this.name = name;
    this.userName = userName;
    this.email = email;
  }

  public printAge = () => {
    console.log(this.age);
    this.setType('Young guy');
  }
}

const person = new Person('Rob', 'rm', 'email');
person.setType('Cool guy'); // Prints: Cool guy

console.log(person); // Prints:
/**
* Person
* 
* age: 23 
* email: "email" 
* name: "Rob" 
* printAge: ƒ () 
* setType: ƒ (type) 
* type: "Cool guy" 
* userName: "rm"
* 
*/

person.printAge();
// person.setType('Cool guy'); // Not possible

console.log(person);

class Robert extends Person {
  constructor(userName: string, email: string) {
    super('Robert Molina', userName, email);
    this.age = 25;
    this.printAge()
  }
}

const robert = new Robert('rmolinamir', 'example@email.com');
console.log(robert);

// Getters & Setters
class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }

  public getSpecies = () => this._species
}

const plant = new Plant();
console.log(plant.species); // Prints Default
plant.species = 'AB';
console.log(plant.species); // Prints Default
plant.species = 'Green Plant';
console.log(plant.species); // Prints Green Plant

// Static Propertiers & Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircunferance(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(Helpers.PI);
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunferance(10));

// Abstract Classes
abstract class Project {
  projectName: string = 'Default';
  budget: number = 0;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName = (name: string) => {
    this.projectName = name;
  }
}

const newProject = new ITProject();
console.log(newProject)
newProject.changeName('Super IT project')
console.log(newProject)
newProject.budget = 1000;
console.log(newProject.budget)
console.log(newProject.calcBudget())

// Private Constructors & Singletons (added with TypeScript 2.0)
class OnlyOne {
  private static instance: OnlyOne;

  /**
   * Read only property that can not be modified.
   */
  private constructor(public readonly name: string) {}

  /**
   * If get instance has not been initialized then it will construct a new OnlyOne class object,
   * then store it into the instance property. If it has already been created then it will simply
   * return the instance property.
   * This assures that there will only ever be one instance.
   */
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

// const wrong = new OnlyOne('The Only One') // Not Possible
const right = OnlyOne.getInstance();
// right.name = 'OnlyTwice'; // Not possible.

/**
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);

class Car {
  constructor(public name: string, public acceleration: number = 0) {}
  public honk = () => console.log('Toooooooooooooot!');
  public accelerate = (speed: number) => this.acceleration + speed;
}
const car = new Car("BMW");
car.honk();
console.log(car);
car.accelerate(10);
console.log(car);

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };

class BaseObject {
  constructor(public width: number = 0, public length: number = 0) {}
}
class Rectangle extends BaseObject {
  calcSize = () => this.width * this.length;
}

const rectangle = new Rectangle(5, 5)
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class PersonExercise {
  private _firstName: string = '';

  get firstName() {
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length > 3) {
        this._firstName = name;
    } else {
      this._firstName = '';
    }
    console.log(this._firstName);
  }
}
const personExercise = new PersonExercise();
console.log(personExercise);
personExercise.firstName = 'Rob';
personExercise.firstName = 'Robert';