// string
let myName = 'Robert';

// number
let myAge = 24;

// boolean
let bHasHobbies = true;

// assign types
let myRealAge: number;
myRealAge = 24

// array
let hobbies: any[] = ['Cooking', 'Sports'];
console.log(hobbies[0]) // Prints: Cooking

hobbies = [100];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enums
enum Color {
  Gray, // 0
  Red, // 1
  Green = 100, // 100
  Blue, // 101
  Yellow = 2 // 2
}

let myColor: Color = Color.Green
console.log(myColor); // Prints: 100

// any
let myCar: any = 'BMW';
console.log(myCar); // Prints: BMW
myCar = { brand: 'BMW', series: 3 };
console.log(myCar) // Prints: [Object object]

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName()) // Prints: Robert

// void
function sayHello(): void {
  console.log('Hello!');
  // return myName; // Not possible.
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply('Robert', 5)) // Not possible.
console.log(multiply(10,5)) // Prints: 50

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; // Not possible.
// myMultiply(); // Not possible.
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
  name: 'Max',
  age: 27
};
// userData = { // Not valid
//   name: 2,
//   age: 'Age'
// };
// userData = { // Not valid
//   a: 'Robert',
//   b: 24
// };
userData = {
  name: 'Robert',
  age: 24
};

// complex object
let complex: Complex = {
  data: [100, 3,99, 10],
  output: function(all: boolean): number[] {
    return this.data
  }
};
// complex = {}; // Not possible.

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex  = {
  data: [100, 3,99, 10],
  output: function(all: boolean): number[] {
    return this.data
  }
};

// interceptor types
interface Loggable {
  log(name: string, age: number): void
}

interface Person {
  name: string
  age: number
  isStark?: boolean // May be undefined.
}

type LoggablePerson = Loggable & Person;

const logPerson:(name: string, age: number) => void = (name, age) => {
  console.log(`I am ${name}, and I am ${age} years old.`)
}

const jonSnow: LoggablePerson = {
  name: "Jon Snow",
  age: 23,
  log: logPerson
}

console.log('jonSnow.name ->', jonSnow.name); // Prints: "Jon Snow"
console.log('jonSnow.age ->', jonSnow.age); // Prints: 23
console.log('jonSnow.isStark ->', jonSnow.isStark); // Prints: undefined
console.log(
  'jonSnow.log(jonSnow.name, jonSnow.age) ->',
  jonSnow.log(jonSnow.name, jonSnow.age)
); // Prints: I am Jon Snow, and I am 23 years old.

// union types
let myRealRealAge: number | string = 24;
myRealRealAge = '24';
// myRealRealAge = true // Not possible.

// check types
let finalValue = 'A string';
if (typeof finalValue == 'string') {
  console.log('finalValue is a string');
}

// never type
function neverReturns(): never {
  throw new Error('An error!');
}

// nullable types
let canBeNull: null | number = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;

// Exercise
type BankAccount = { money: number, deposit: (value: number) => void }

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
      this.money += value;
  }
};

let myself : { name: string, bankAccount: BankAccount, hobbies: string[] }= {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);