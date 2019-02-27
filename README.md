# TypeScript Cheatsheet

A set of TypeScript related notes used for quick reference. The cheatsheet contains references to types, classes, decorators, and many other TypeScript related subjects.

# Table of contents
1. [Introduction](#introduction)
2. [Types](#types)
      1. [Basic Assign Types](#basicassigntypes)
          - [String](#string)
          - [Number](#number)
          - [Boolean](#boolean)
          - [Array](#array)
      2. [Tuples](#tuples)
      3. [Any](#any)
      3. [Enums](#enums)
      4. [Functions](#functions)
      5. [Argument Types](#argumenttypes)
      7. [Function Types](#functiontypes)
      6. [Void Function Type](#void)
      8. [Objects](#objects)
          - [Complex Objects](#complexobjects)
      9. [Alias](#alias)
      10. [Union](#union)
      11. [Check](#check)
      12. [Never](#never)
      13. [Nullable](#nullable)
      14. [Type Assertions](#typeassertions)
3. [ES6](#es6)
      1. [Template Liberals](#templateliberals)
      2. [Arrow Functions](#arrowfunctions)
      3. [Default Parameters](#defaultparameters)
      4. [Spread Operators](#spreadoperators)
      5. [Array Destructuring](#arraydestructuring)
      6. [Object Destructuring](#objectdestructuring)
4. [Classes](#classes)
      1. [Getters & Setters](#getterssetters)
      2. [Static Properties & Methods](#staticpropertiesmethods)
      3. [Abstract Classes](#abstractclasses)
      4. [Private Constructors & Singletons **(MVP)**](#privateconstructorsingletons)
5. [Namespaces](#namespaces)
6. [Modules](#modules)

---

## Introduction <a name="introduction"></a>
TypeScript is a very powerful addition to JavaScript. TypeScript is developed by Microsoft and is increasingly supported by the day  by technologies such as Angular, Vue.js 3, React.js, and many others.

As TypeScript code can be compiled to ES5, it includes all of the native JavaScript features such as spread arrow function, deconstructors, and introduces some **very** useful features such as decorators, generics and interfaces, enums, modules, among others which can be found in different programming languages. 

---

## Types <a name="types"></a>
> For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.

### Basic Assign Types <a name="basicassigntypes"></a>
> Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type `string` to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (`"`) or single quotes (`'`) to surround string data.
#### String <a name="string"></a>
```ts
  const myName: string = 'Robert';
```

#### Number <a name="number"></a>
> As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type `number`. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
```ts
  const myAge: number = 24;
```

#### Boolean <a name="boolean"></a>
> The most basic datatype is the simple `true`/`false` value, which JavaScript and TypeScript call a `boolean` value.
```ts
  const bHasHobbies: boolean = true;
```

#### Array <a name="array"></a>
> TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:
```ts
  const hobbies: string['Programming', 'Cooking'] = true;
```

If no types are declared, TypeScript will automatically assign a type depending on the types of the Array values.
```ts
  const numbers = [1, 3.22, 6, -1] // This variable will be automatically be assigned a number[] array type.
```

### Tuples <a name="tuples"></a>
> Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a `string` and a `number`:
```ts
  const address: [string, number] = ["Street", 99];
```

### Any <a name="any"></a>
> We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the `any` type:
```ts
  let myCar: any = 'BMW';
  console.log(myCar); // Prints: BMW
  myCar = { brand: 'BMW', series: 3 };
  console.log(myCar) // Prints: { brand: "BMW", series: 3 }
```

### Enums <a name="enums"></a>
> A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
By default, any `enum` will begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can modify the Green value to 100, the next will be 101, then set Yellow back to 2.
```ts
  enum Color {
    Gray, // 0
    Red, // 1
    Green = 100, // 100
    Blue, // 101
    Yellow = 2 // 2
  }

  const myColor: Color = Color.Green
  console.log(myColor); // Prints: 100
```

### Functions <a name="functions"></a>
Functions as you may expect work exactly the same as in JavaScript with a couple new features. In TypeScript, you may assign the function two things:
- Argument types.
- Function types.

```ts
  function returnMyName(myName): string {
    return myName;
  }
  console.log(returnMyName('Robert')) // Prints: Robert
```

### Argument Types <a name="argumenttypes"></a>
In TypeScript any argument of a function may be assigned a type no matter how complex, for example:
```ts
  // argument types
  function multiply(value1: number, value2: number) {
    return value1 * value2;
  }
  // console.log(multiply('Robert', 5)) // Not possible, both arguments must be of type number.
  console.log(multiply(10,5)) // Prints: 50
```

### Function Types <a name="functiontypes"></a>
Just like the argument, the **return value** of a function may be assigned a type. Consider the example above to be included into the example below:
```ts
  const myMultiply: (val1: number, val2: number) => number;
  // myMultiply = sayHello; // Not possible.
  // myMultiply(); // Not possible.
  myMultiply = multiply;
  console.log(myMultiply(5, 2));
```

### Void Function Type <a name="void"></a>
> The type `void` is a little like the opposite of `any`: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:
```ts
  function sayHello(): void {
    console.log('Hello!');
    // return myName; // Not possible because the function can't return anything due to the void assigned type (more on this below).
  }
```
> Declaring variables of type `void` is not useful because you can only assign `undefined` or `null` to them:
```ts
  let unusable: void = undefined;
```

### Objects <a name="objects"></a>
> The type `object` represents the non-primitive type, i.e. any thing that is not `number`, `string`, `boolean`, `symbol`, `null`, or `undefined`.

In JavaScript, so as in TypeScript, Objects are comprised of key-value pairs. We can assign types to the `object` key-value pairs, like so:
```ts
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
```

#### Complex Objects <a name="complexobjects"></a>
As you may expect, the assigned types to the `object` key-value pairs can reach high levels of complexity, for example: 
```ts
  let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3,99, 10],
    output: function(all: boolean): number[] {
      return this.data
    }
  };
  // complex = {}; // Not possible.
```

### Alias <a name="alias"></a>
Writing complex and long types can quickly become dull and impractical. For a DRY approach, it's possible to create aliases for types, essentially creating your own types. Here's an example using the complex object above:
```ts
  type Complex = { data: number[], output: (all: boolean) => number[] };
  let complex2: Complex  = {
    data: [100, 3,99, 10],
    output: function(all: boolean): number[] {
      return this.data
    }
  };
```

### Union <a name="union"></a>
Variables are not restricted to only one assigned type. This is where union types come in where we can assign two or more types (e.g. assign `number` and `string`) to a single variable. For example:
```ts
  let myRealRealAge: number | string = 24;
  myRealRealAge = '24';
  // myRealRealAge = true // Not possible since myRealRealAge only accepts a number or a string.
```

### Check <a name="check"></a>
Programmatically checking for types work eactly as it works in JavaScript:
```ts
  let finalValue = 'A string';
  if (typeof finalValue == 'string') {
    console.log('finalValue is a string');
  }
```

### Never <a name="never"></a>
> The `never` type represents the type of values that never occur. For instance, `never` is the return type for a function expression or an arrow function expression **that always throws an exception or one that never returns**; Variables also acquire the type `never` when narrowed by any type guards that can never be true.
```ts
  function neverReturns(): never {
    throw new Error('An error!');
  }
```

### Nullable <a name="nullable"></a>
> In TypeScript, both `undefined` and `null` actually have their own types named `undefined` and `null` respectively. Much like `void`, they’re not extremely useful on their own:
```ts
  let canBeNull: null | number = 12;
  canBeNull = null;
  let canAlsoBeNull;
  canAlsoBeNull = null;
  let canThisBeAny = null;
  canThisBeAny = 12;
```

### Type Assertions <a name="typeassertions"></a>
>Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

> Type assertions are a way to tell the compiler “trust me, I know what I’m doing”. A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms. One is the “angle-bracket” syntax:

```ts
  const someValue: any = "this is a string";
  const strLength: number = (<string>someValue).length;
```
And the other is the `as`-syntax:

```ts
  const someValue: any = "this is a string";
  const strLength: number = (someValue as string).length;
```
---

## ES6 <a name="es6"></a>
TypeScript natively supports the newer ES6 (A.K.A. ECMAScript 6 and ECMAScript 2015) JavaScript features. As you may have guessed, we can assign types to these new features (e.g. assigning types to an arrow function). Here are some examples:

### Template Liberals <a name="templateliberals"></a>
```ts
  const userName = 'Robert';
  const greeting = `Hello I'm ${userName}`;
  console.log(greeting)
```

### Arrow Functions <a name="arrowfunctions"></a>
Arrow function arguments can be assigned any type.
```ts
  const greet = (name: string = 'Robert') => console.log(`Hello, ${name}`);
  greet('Robert Molina');
```

### Default Parameters <a name="defaultparameters"></a>
Arrow functions may also be defined with default argument values in case no respective arguments were passed, these default parameters may also be of any assigned type.
```ts
  const greet = (name: string = 'Robert') => console.log(`Hello, ${name}`);
  greet(); // Prints: "Robert"
```

### Spread Operators <a name="spreadoperators"></a>
> Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
```ts
  const numbers: number[] = [-3, 33, 38, 5];
  console.log(Math.min(...numbers));

  const newArray: number[] = [55, 20, ...numbers];
  console.log(newArray);
```

### Array Destructuring <a name="arraydestructuring"></a>
Arrays may also be destructured in TypeScript, keep in mind that all the assigned types to the array values won't be lost when destructured.
```ts
  const testResults: number[] = [3.89, 2.99, 1.38];
  const [result1, result2, result3] = testResults;
  console.log(result1, result2, result3);
```

### Object Destructuring <a name="objectdestructuring"></a>
Just like arrays, the destructured object value pairs will keep their previously assigned types. Keep in mind that when destructuring an object, the declared variable name **must** match the object key to let the compiler know which variable to destructure.
```ts
  const scientist: { firstName: string, experience: number } = { firstName: 'Robert', experience: 9000 };
  const { firstName, experience } = scientist;
  console.log(firstName, experience);
```
---

## Classes <a name="classes"></a>
> Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components, but this may feel a bit awkward to programmers more comfortable with an object-oriented approach, where classes inherit functionality and objects are built from these classes. In TypeScript, we allow developers to use these techniques now, and compile them down to JavaScript that works across all major browsers and platforms, without having to wait for the next version of JavaScript.

TypeScript offers `public`, `private`, and protected modifiers to every class member variable. Unlike `C#` which requires that each member be explicitly labeled `public`, In TypeScript, each member is `public` by default.

**You may still mark a member public explicitly. For example:**
```ts
  class Person {
    private type: string | null = null;
    protected age: number = 23;

    constructor(public name: string, public userName: string, private email: string) {
      this.name = name;
      this.userName = userName;
      this.email = email;
    }

    public printAge = () => {
      console.log(this.age);
      this.setType('Young guy');
    }

    private setType = (type: string) => {
      this.type = type;
      console.log(this.type);
    } 
  }
```

When a member is marked `private`, it cannot be accessed from outside of its containing class.

```ts
  const person = new Person('Francisco', 'rmolinamir', 'example@email.com');
  person.printAge(); // Prints: 23
  // person.setType('Cool guy'); // Not possible, since setType is a private member of Person.
```

> TypeScript is a structural type system. When we compare two different types, regardless of where they came from, if the types of all members are compatible, then we say the types themselves are compatible.

Classes may also be extended. By extending a class, we can declare another class that **inherits** all of the parent class members, for example:

```ts
  class Robert extends Person {
    constructor(userName: string, email: string) {
      super('Robert Molina', userName, email);
      this.age = 25;
      this.printAge()
    }
  }
  const robert = new Robert('rmolinamir', 'example@email.com');
  console.log(robert);
```

The class Robert, would be able to access all of the Person members, and overwrite them if possible. **Note that `super` has to be called in the constructor of the Robert class, to execute any logic that may be stored inside the parent Person class' constructor. If not called, side effects may happen**.

## Getters & Setters <a name="getterssetters"></a>
```ts
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
```

## Static Properties & Methods <a name="staticpropertiesmethods"></a>
```ts
  class Helpers {
    static PI: number = 3.14;
    static calcCircunferance(diameter: number): number {
      return this.PI * diameter;
    }
  }
  console.log(Helpers.PI);
  console.log(2 * Helpers.PI);
  console.log(Helpers.calcCircunferance(10));
```

## Abstract Classes <a name="abstractclasses"></a>
> Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an `abstract class` may contain implementation details for its members. **The `abstract` keyword is used to define abstract classes as well as abstract methods within an abstract class.**

A great comparison and example for `abstract classes` is the React.js `Component` class, that we use to extend our own custom components, like the typical:

```jsx
  class App extends Component {
    ...
  }

```

The following is an example of a TypeScript abstract class definition:

```ts
  abstract class Project {
    projectName: string = 'Default';
    budget: number = 0;
    abstract changeName(name: string): void;
    calcBudget() {
      return this.budget * 2;
    }
  }
```

> Methods within an `abstract class` that are marked as `abstract` **do not contain an implementation and must be implemented in derived classes**. Abstract methods share a similar syntax to interface methods. Both define the signature of a method without including a method body. However, abstract methods must include the `abstract` keyword and may optionally include access modifiers.

Think of `abstract` methods as methods that **won't** be passed down to the inheritor classes.

```ts
  class ITProject extends Project {
    changeName = (name: string) => {
      this.projectName = name;
    }
  }
  const newProject = new ITProject();
  console.log(newProject) // Prints: { projectName: "Default", budget: 0, ...  }
  newProject.changeName('Super IT Project');
  console.log(newProject); // Prints: { projectName: "'Super IT Project", budget: 0, ...  }
  newProject.budget = 1000;
  console.log(newProject.budget); // Prints: 1000
  console.log(newProject.calcBudget()); // Prints: 2000
```

## Private Constructors & Singletons <a name="privateconstructorsingletons"></a>
**My absolute favorite TypeScript feature.** At first glance you may realize that private constructors sound strange, you might ask yourself, what's the point of making the constructor method private, resulting in the programmer not being able to call the new method, resulting creating new instances of the class being impossible? **Not at all.**

In TypeScript 2.0 and onwards, we can create a static class member method that I usually define as `getInstance`. Since `getInstance` is a member of the class, it can access the constructor. Meaning, it can execute the constructor, then save the instance **as a member of the same class**. It is also possible to improve this further, and only allow `getInstance` to be executed only **once**, and avoid multiple instances of this class. If it already exist, we can always return the previously created instance, here's an example with a class named `OnlyOne`:

```ts
  class OnlyOne {
    private static instance: OnlyOne; // Member variable that will store the OnlyOne instance.

    /**
     * Read only property that can not be modified nor accessed outside of the class.
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

  // const wrongWay = new OnlyOne('The Only One') // Not Possible
  const rightWay = OnlyOne.getInstance();
  const anotherWay = OnlyOne.getInstace(); // Works too.
```

In the above example, the variables `rightWay` and `anotherWay` would be pointers (think `C++`) to the same instance of `OnlyOne`. As you can see, to initiate `OnlyOne` we have to call `getInstance` instead of running the constructor from an outter scope of the `OnlyOne` class. Afterwards, it is possible to call any of the other public methods of the class (e.g. managing global toast messages inside an application, with a single instance managing every message).

---

## Namespaces <a name="namespaces"></a>

In TypeScript, a `namespace` is an **internal** module, while a `module` is an **external** module. Like modules, using namespaces is a way to organize the code inside an application.

> Anywhere the module keyword was used when declaring an internal module, the namespace keyword can and should be used instead. This avoids confusing new users by overloading them with similarly named terms.

To 'code split' the program, we must divide our code into different namespaces while keeping a certain organization scheme so that we can keep track of our types and not worry about name collisions with other objects. **Remember that the `export` keyword must still be used to let the compiler know which code can be imported into a different file**.

To `import` a namespace, we must make use of the TypeScript native reference tag, like so:

```ts
  /// <reference path="./src/myNamespace.ts" />
```

The triple forward dash `///` notation, **must to be included in order to help the compiler understand (think of Webpack's v^4.0 magic comments)**. The reference tags don't exist in JavaScript and will be compiled to ES5 JavaScript that can run in browsers.

In the following example we have 2 namespaces named `Circle` and `Rectangle` respectively, while at the same time both of the former being inside the same `MyMath` namespace. **This is to show that in TypeScript the variable names of the namespaces are global and unique**.

**Organization scheme:**

```js
TypeScript v^3.0
├── app.ts
├── src
│   ├── circleMath.ts
│   ├── rectangleMath.ts
```

```ts
  /// <reference path="./src/circleMath.ts" />
  /// <reference path="./src/rectangleMath.ts" />

  import Circle = MyMath.Circle;
  import calculateRectangle = MyMath.Rectangle.calculateRectangle;
```

**Note that to import a file using the `namespace` keyword we must use the triple forward dash `///` notation, as if it was a comment (think of Webpack's v^4.0 magic comments), and then use the `import` keyword to "extract" the data from the files**.

`circleMath.ts`
```ts
  namespace MyMath {
    export namespace Circle {
      export const PI = 3.14;
      export const calculateCircumference = (diameter: number) => {
        return diameter * PI;
      }
    }
  }
```

`rectangleMath.ts`
```ts
  namespace MyMath {
    export namespace Rectangle {
      export const calculateRectangle = (width: number, length: number) => {
        return width * length;
      }
    }
  }
```
In this example, we've code splitted all our worker math-related functions into a namespace called `MyMath`. `MyMath` has also been code splitted into two different namespaces called `Circle` and `Rectangle`, which belong to the `circleMath.ts` and `rectangleMath.ts` files respectively.

Running the following code in `app.ts` will result in:

```ts
  /// <reference path="./src/circleMath.ts" />
  /// <reference path="./src/rectangleMath.ts" />

  import Circle = MyMath.Circle;
  import calculateRectangle = MyMath.Rectangle.calculateRectangle;

  console.log(Circle.PI); // Prints: 3.14
  console.log(Circle.calculateCircumference(10)); // Prints 31.42
  console.log(calculateRectangle(25, 25)); // Prints: 50
```

---

## Modules <a name="modules"></a>
