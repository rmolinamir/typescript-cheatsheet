// Simple Generic
function echo(data: any) {
  return data;
}
console.log(echo('Robert'));
console.log(echo(24).length); // Prints: undefined.
console.log(echo({ name: 'Robert', age: 24 }));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}
// Now I get types in the IDE, the compiler also knows what type is returned from betterEcho.
console.log(betterEcho('Robert').length);
// console.log(betterEcho(24).length); // Property 'length' does not exist on type `number`.
console.log(betterEcho<number>(24).toExponential(2));
console.log(betterEcho({ name: 'Robert', age: 24 }).age);

// Built-in Generics
const testResults: Array<number> = [1.94, 2,33];
testResults.push(-2.99);
// testResults.push('string'); // Not possible.

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll<string>(['Apple', 'Banana']);
printAll<number>([1, 3, 5]);
// printAll<number>([1, 'string', 5]); // Not possible.

// Generic Types
const echoStr: <T>(data: T) => T = betterEcho;
console.log(echoStr<string>('Hello world!').toLocaleUpperCase()); // Prints: "HELLO WORLD!"

const echoNum: <T>(data: T) => T = betterEcho;
console.log(echoNum<number>(312).toString()); // Prints: "312"

// Generic Class
class SimpleMath {
  constructor(public baseValue: any, public multiplyValue: any) {}
  calculate() {
    return this.baseValue * this.multiplyValue
  }
}
const simpleMath = new SimpleMath(10, 'string'); // Compiler won't catch it.
console.log(simpleMath.calculate());

class GenericMath<T extends number | string> {
  constructor(public baseValue: T, public multiplyValue: T) {}
  calculate(): number {
    return +this.baseValue * +this.multiplyValue
  }
}

// const genericMath = new GenericMath<number>(10, 'string'); // Not possible.
// const genericMathBoolean = new GenericMath<boolean>(10, '20'); // Not possible.
const genericMath = new GenericMath<number>(10, 20);
const genericMathString = new GenericMath<string>('10', '20');
const genericMathBoth = new GenericMath<number | string>(10, '20');

console.log(genericMath.calculate());
console.log(genericMathString.calculate());
console.log(genericMathBoth.calculate());

// Multiple Types
class MultipleTypesMath<T extends number, U extends number | string> {
  constructor(public baseValue: T, public multiplyValue: U) {}
  calculate(): number {
    return +this.baseValue * +this.multiplyValue
  }
}
const multipleTypesMath = new MultipleTypesMath<number, number | string>(5, '20');
console.log(multipleTypesMath.calculate());

// Exercise
// setItem(key: string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
type Value = string | number; // Defining value type
interface MyMapObject { // Defining interface for the object
  [key: string]: Value;
}
class MyMap<T extends Value> {
  private map: MyMapObject = {}; // Init map object
  setItem = (key: string, value: T) => {
    this.map = {
      ...this.map,
      [key]: value
    }
  };
  getItem = (key: string): Value => this.map[key];
  printMap = (): void => {
    console.log(this.map);
  };
  clear = () => {
    this.map = {};
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap(); // Prints: {apples: 5, bananas: 10}
console.log(numberMap.getItem('bananas')); // Prints: 10
numberMap.clear();
numberMap.printMap(); // Prints: {}

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'Robert');
stringMap.setItem('age', '24');
stringMap.printMap(); // Prints: {name: "Robert", age: "24"}
console.log(stringMap.getItem('age')); // Prints: 24
numberMap.clear();
numberMap.printMap(); // Prints: {}
