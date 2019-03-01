<p align="center">
  <img src="https://raw.githubusercontent.com/rmolinamir/typescript-cheatsheet/master/TypeScript.png" alt="TypeScript"/>
</p>

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
      1. [Template Literals](#templatelilerals)
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
5. [Modules](#modules)
      1. [Export](#export)
      2. [Default Exports](#defaultexports)
      3. [Import](#import)
      4. [Advanced Module Loading](#advancedmoduleloading)
6. [Namespaces](#namespaces)
7. [Ambient Modules](#ambientmodules)
      1. [Using a `d.ts` file that will put the jQuery `$` variable in the global scope of the application](#jquery.d.ts)
      2. [Using @types/jquery NPM package: @types/jquery](#@types/jquery)
      3. [Shorthand for Ambient Modules](#shorthandambientmodules)
      4. [Wildcard Module Declarations](#wildcardmoduledeclarations)
      5. [UMD modules](#umdmodules)
8. [Interfaces](#interfaces)
      1. [Implements Keyword](#implementskeyword)
          - [Implementing an `interface` to a `Class`](#implementinginterfacetoclass)
          - [Implementing an `interface` to a `function`](#implementinginterfacetofunction)
      2. [Extends Keyword (Interface Inheritance)](#extendskeyword)
9. [Generics](#generators)
      1. [Simple Generics](#simplegenerics)
      2. [Better Generics](#bettergenerics)
      3. [Built-in Generics](#builtingenerics)
      4. [Generic Types](#generictypes)
      5. [Generic Class](#genericclass)
10. [Decorators](#decorators)
      1. [Prologue](#decoratorsprologue)
      2. [Introduction](#decoratorsintroduction)
      3. [Basic Decorator](#basicdecorator)
      4. [Factory](#factory)
      5. [Advanced Decorator](#advanceddecorator)
      6. [Method Decorator](#methoddecorator)
      7. [Property Decorator](#propertydecorator)
      8. [Parameter Decorator](#parameterdecorator)
11. [Webpack Workflow (v^4.X)](#workflows)
12. [TypeScript with React.js](#typescriptreactjs)
13. [Feedback](#feedback)
14. [Contribute](#contribute)

---

## Introduction <a name="introduction"></a>

TypeScript is a very powerful addition to JavaScript. TypeScript is developed by Microsoft and is increasingly supported by the day  by technologies such as Angular, Vue.js 3, React.js, and many others.

As TypeScript code can be compiled to ES5, it includes all of the native JavaScript features such as spread arrow function, deconstructors, and introduces some **very** useful features such as decorators, generics and interfaces, enums, modules, among others which can be found in different programming languages. 

---

## Types <a name="types"></a>

> For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.

### Basic Assign Types <a name="basicassigntypes"></a>

#### String <a name="string"></a>

> Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

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
  const hobbies: string[] = ['Programming', 'Cooking'];
```

If no types are declared, TypeScript will automatically assign a type depending on the types of the Array values.

```ts
  const numbers = [1, 3.22, 6, -1] // This variable will automatically be assigned a number[] array type.
```

**Note that declaring types is encouraged**.

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

### Template Literals <a name="templatelilerals"></a>

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

  const person = new Person('Francisco', 'rmolinamir', 'example@email.com');
  person.printAge(); // Prints: 23
  // person.setType('Cool guy'); // Not possible, since setType is a private member of Person.
```

When a member is marked `private`, it cannot be accessed from outside of its containing class. **However, should a class `X` inherit properties from `Person`, class `A` will be able to access all private properties from `Person` (e.g. `type and setType`) due to being inside (or having access to) the protected scope**. Here's an example;

```ts
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
   * /
```

If you want to prevent some properties or classes for being inherited, there is currently a proposal for the `final` keyword to be added.

Links:
  - [Suggestion: Final keyword for classes and methods](https://github.com/Microsoft/TypeScript/issues/9264)
  - [Support final classes (non-subclassable)](https://github.com/Microsoft/TypeScript/issues/8306)

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

TypeScript offers two great features for classes: `get`, and `set`. These are keywords that can be used to create a getter or setter function that can share the same name, and run whatever logic the programmer decides to pass into. Here's an example:

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

To `set` *species*, we would do an expression such as `plant.species = 'AB';`, and to `get` *species*, we would simply refer to the *species* property of the `plant` object.

## Static Properties & Methods <a name="staticpropertiesmethods"></a>

Static properties and methods are class members that can be accessed from an outer scope scope of the `class`, **and** without having to instantiate the class either. Here's an example:

```ts
  class Helpers {
    static PI: number = 3.14;
    static calcCircunferance(diameter: number): number {
      return this.PI * diameter;
    }
  }

  console.log(Helpers.PI); // Prints: 3.14
  console.log(2 * Helpers.PI); // Prints: 6.28
  console.log(Helpers.calcCircunferance(10)); // Prints: 31.42
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
**My absolute favorite TypeScript feature.** At first glance you may realize that private constructors sound strange, you might ask yourself, what's the point of making the constructor method private, resulting in the programmer not being able to call the new method, which then makes creating new instances of the class impossible? **Quite the contrary.** 

As the name of this section implies, a singleton is class that can only be instantiated **once**, or in other words, a class that can only have **one** object, single(ton).

In TypeScript 2.0 and onwards, we can create a static class member method that I usually define as `getInstance`. Since `getInstance` is a member of the class, it can access the constructor. Meaning, it can execute the constructor, then save the instance **as a member of the same class**. It is also possible to improve this further, and only allow `getInstance` to be executed only **once**, and avoid multiple instances of this class. 

If it already exists, we can always return the previously created instance, here's an example with a class named `OnlyOne`:

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

## Modules <a name="modules"></a>

> Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

The module code generation may be specified in the `tsconfig.json` file. **The compiler will generate appropriate code for Node.js (CommonJS), requirejs (AMD), UMD, SystemJS, or ECMAScript 2015 native modules (ES6) module-loading systems** depending on what the `tsconfig.json` `module` option is set on. For example, the React.js `tsconfig.json` file generated when using `create-react-app` module code generation option is `esnext`, targeted to `es5`. 

> In TypeScript, any file containing a top-level import or export is considered a module. Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

1. [Export](#export)
2. [Default Exports](#defaultexports)
3. [Import](#import)
4. [Advanced Module Loading](#advancedmoduleloading)

### Export <a name="export"></a>

> Any declaration (such as a `variable`, `function`, `class`, type alias, `enum` or `interface`) can be exported by adding the export keyword.

Exporting a `variable` and a `function`:
```ts
  export const PI = 3.14;

  export const calculateCircumference = (diameter: number) => {
    return diameter * PI;
  }
```

Exporting an `interface` for a react.js `class` component's state:
```tsx
  export interface IAppState {
    counterValue: number;
  }

  class App extends React.Component<{} /* IAppProps */, IAppState> {
    public state = { counterValue: 0 }; // State is required to be public.
    // ...
  }
```

Exporting an `interface` for a react.js `functional` component `onClick` handlers:
```tsx
  export enum ECounterHandlers {
    Inc,
    Dec
  }
  interface ICounterOutputProps {
    counter: number;
    onClick: (mode: ECounterHandlers) => void;
  }
  const counterOutput = (props: ICounterOutputProps) => {
    return (
      /// ...
        <button onClick={() => props.onClick(ECounterHandlers.Dec)}>Decrement</button>
        <button onClick={() => props.onClick(ECounterHandlers.Inc)}>Increment</button>
      /// ...
    );
  }
```

### Default Exports <a name="defaultexports"></a>

> Each module can optionally export a default export. Default exports are marked with the keyword default; and there can only be one default export per module. default exports are imported using a different import form.

The `default` exports are really handy. For instance, a library like React.js might have a default export of `React`, commonly imported under the name `React`. Each file may only have **one** default export, for example:

```ts
  const calculateRectangle = (width: number, length: number) => {
    return width * length;
  }

  export default calculateRectangle
```

### Import <a name="import"></a>

> Importing is just about as easy as exporting from a module. 

Importing an exported declaration is done through using the `import` keyword. For example, considering the `PI`, `calculateCircumference`, and `calculateRectangle` export examples shown above, this is how we would import them into our `app.ts` file with the following folder structure:

**Organization scheme:**

```js
TypeScript v^3.0
├── app.ts
├── src
│   ├── circle.ts
│   ├── rectangle.ts
```

```ts
  import { PI, calculateCircumference } from './src/circle'
  import calculateRectangle from './src/rectangle'

  console.log(PI); // Prints: 3.14
  console.log(calculateCircumference(10)); // Prints: 31.42
  console.log(calculateRectangle(5, 10)); // Prints: 50
```

### Advanced Module Loading <a name="advancedmoduleloading"></a>

> In some cases, you may want to only load a module under some conditions. In TypeScript, we can use the pattern shown below to implement this and other advanced loading scenarios to directly invoke the module loaders without losing type safety.

Sometimes we might be in a situation where we only want to load certain parts of our application dynamically. This may be to reduce the initial load time or to improve performance.

This is commonly known as dynamic imports. The idea is to use the following pattern: `import id = require('...')` which will give us access to the types exxposed by the module thanks to the compiler. The module will be loaded dynamically, which means it can be preceded by something like an `if` statement. 

> **This leverages the reference-elision optimization so that the module is only loaded when needed**. For this pattern to work, it’s important that the symbol defined via an import is only used in type positions (i.e. never in a position that would be emitted into the JavaScript).

> **To maintain type safety, we can use the typeof keyword. The typeof keyword, when used in a type position, produces the type of a value, in this case the type of the module**.

We may use the `declare` keyword to literally declare a function. For exmaple, to declare a require function we would use the following code:

```ts
  declare function require(moduleName: string): any;
```

While keeping that in mind, here are some examples as shown in the [TypeScript official documentation about modules](https://www.typescriptlang.org/docs/handbook/modules.html):

***Dynamic Module Loading in Node.js:***
```ts
  declare function require(moduleName: string): any;
  
  import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

  if (needZipValidation) {
    let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
    let validator = new ZipCodeValidator();
    if (validator.isAcceptable("...")) { /* ... */ }
  }
```

***Sample: Dynamic Module Loading in requirejs, pay attention to the `onLoad` argument:***
```ts
  declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

  import * as Zip from "./ZipCodeValidator";

  if (needZipValidation) {
    require(["./ZipCodeValidator"], (ZipCodeValidator: typeof Zip) => {
      let validator = new ZipCodeValidator.ZipCodeValidator();
      if (validator.isAcceptable("...")) { /* ... */ }
    });
  }
```

***Sample: Dynamic Module Loading in System.js. Using the imported `System` object from the library:***
```ts
  declare const System: any;

  import { ZipCodeValidator as Zip } from "./ZipCodeValidator";

  if (needZipValidation) {
      System.import("./ZipCodeValidator").then((ZipCodeValidator: typeof Zip) => {
          var x = new ZipCodeValidator();
          if (x.isAcceptable("...")) { /* ... */ }
      });
  }
```

To descripe the types of libraries not written within TypeScript, basically third party libraries like `jQuery`, we need to declare the API that the library exposes (e.g. We would declare the `$` symbol for `jQuery`, to be able to access its functionalities).

> We call declarations that don’t define an implementation “ambient”. ***Typically, these are defined in `.d.ts` files. If you’re familiar with C/C++, you can think of these as `.h` files***. More on this below.

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
  console.log(calculateRectangle(25, 25)); // Prints: 625
```

---

## Ambient Modules <a name="ambientmodules"></a>

> In Node.js, most tasks are accomplished by loading one or more modules. We could define each module in its own .d.ts file with top-level export declarations, but it’s more convenient to write them as one larger .d.ts file. To do so, we use a construct similar to ambient namespaces, but we use the module keyword and the quoted name of the module which will be available to a later import.

Here is an example as shown in the [TypeScript official documentation about modules](https://www.typescriptlang.org/docs/handbook/modules.html):

***node.d.ts (simplified excerpt)***
```ts
  declare module "url" {
    export interface Url {
      protocol?: string;
      hostname?: string;
      pathname?: string;
    }
    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
  }

  declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
  }
```

Afterwards we are able to `/// <reference>` the node.d.ts as shown in the `namespace` section, and then load the modules using `import url = require("url");` or `import * as URL from "url"` using ES6.

```ts
  /// <reference path="node.d.ts"/>
  import * as URL from "url";
  let myUrl = URL.parse("http://www.typescriptlang.org");
```

Sounds a bit complicated but it's actually really easy to import a third library. Here the simplest two alternatives: 

### Using a `d.ts` file that will put the jQuery `$` variable in the global scope of the application: <a name="jquery.d.ts"></a>

Here is how we could import jQuery into a simple application using `requirejs`, consider the following organization scheme:

**Organization scheme:**

```js
TypeScript v^3.0
├── package.json
├── jquery.d.ts
├── app.ts
├── index.html
```

***package.json***
```json
  "dependencies": {
    "requirejs": "^2.3.6",
  }
```

***jquery.d.ts***
```ts
  declare var $: any;
```
With jQuery declared in a `.d.ts` file, it will now be available inside the global scope thanks to the compiler.

***app.ts:***
```ts
  $('button').click(function() {
    alert('Button was clicked!');
  });
```

***index.html using requirejs to import the modules:***
```html
  <!-- ...  -->
  <button>Click me to trigger an alert with jQuery</button>
  <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script data-main="app.js" src="node_modules/requirejs/requirejs"></script>
  <!-- ...  -->
```

However, one disadvantage of this alternative is that the IDE will not have access to the jQuery `$` variable object, making it a little difficult to write code. This disadvantage is fortunately overcome using the second alternative.

### Using @types/jquery NPM package: <a name="@types/jquery"></a>

The problem with the first alternative, is that by declaring jQuery's `$` as type `any` (`declare var $: any;`), we are basically telling the compiler to *assume* that it will have access to jQuery in runtime. But that's not practical. 

To avoid this we can use `@types` packages. These packages basically contain type definitions for their respective JS libraries counterparts. For example, using [@types/jquery](https://www.npmjs.com/package/@types/jquery) or [`@types/react`](https://www.npmjs.com/package/@types/react) will enable the programmer to use their respective types all over the application without having to declare them. This is because both of these libraries have `.d.ts` files includes and the compiler will pick them up inside the `node_modules` library.

Here's an example using [`@types/jquery`](https://www.npmjs.com/package/@types/jquery) and `requirejs`:

**Organization scheme:**

```js
TypeScript v^3.0
├── package.json
├── app.ts
├── index.html
```

***package.json***
```json
  "devDependencies": {
    "@types/jquery": "^3.3.29",
  },
  "dependencies": {
    "requirejs": "^2.3.6",
  }
```

***app.ts:***
```ts
  $('button').click(function() {
    alert('Button was clicked!');
  });
```

***index.html using requirejs to import the modules:***
```html
  <!-- ...  -->
  <button>Click me to trigger an alert with jQuery</button>
  <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script data-main="app.js" src="node_modules/requirejs/requirejs"></script>
  <!-- ...  -->
```

Notice the difference? We don't need to have the declare `.d.ts` file anymore, because the compiler will pick up on the `.d.ts` files inside the `@types/jquery` library.

### Shorthand ambient modules <a name="shorthandambientmodules"></a>

> If you don’t want to take the time to write out declarations before using a new module, you can use a shorthand declaration to get started quickly.

*declarations.d.ts*
```ts
  declare module "hot-new-module";
```

### Wildcard module declarations <a name="wildcardmoduledeclarations"></a>

> Some module loaders such as SystemJS and AMD allow non-JavaScript content to be imported. These typically use a prefix or suffix to indicate the special loading semantics. Wildcard module declarations can be used to cover these cases.

```ts
  declare module "*!text" {
      const content: string;
      export default content;
  }

  // Some do it the other way around.
  declare module "json!*" {
      const value: any;
      export default value;
  }
```
### UMD modules <a name="umdmodules"></a>

> Some libraries are designed to be used in many module loaders, or with no module loading (global variables). These are known as UMD modules. These libraries can be accessed through either an import or a global variable. For example:

*math-lib.d.ts*
```ts
  export function isPrime(x: number): boolean;
  export as namespace mathLib;
```

---

## Interfaces <a name='interfaces'></a>
> One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

We can think of **interfaces** as a way to assign types to the structure of a variable. This variable may be an `argument`, a `class`, an `object`, you name it, think of it as making a **contract** with the `interface`. Here's how we can define a very simple `interface` and use it on a `variable` and on a `function`:

```ts
  interface SimplePerson {
    firstName: string;
  }

  const simplePerson: SimplePerson = { firstName: 'Robert' };

  const simpleGreet = (simplePerson: SimplePerson) => console.log(`Hello ${simplePerson}!`);

  simpleGreet(simplePerson); // Prints: "Hello Robert!"
```

You might think this would make interfaces not scallable because of very restrictive properties, but fortunately **properties can be optional**. To define an interface property as optional, we must place a `?` character in front of the key name of the property when defining it. Here's an example:

```ts
  interface SimplePerson {
    firstName: string;
    lastName?: number;
    age?: number;
  }

  // const wrong: SimplePerson = { lastName: 'Molina', age: 24 }; // Not possible because the firstName key value pair is missing.
  const right: SimplePerson = { firstName: 'Robert', age: 24 };
```

We may also define the interface with *index signatures*, think of them like dynamic key value pairs. Here's an example:

```ts
  interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
  }

  const person: NamedPerson = {
    firstName: 'Robert',
    lastName: 'Molina',
    age: 24,
    hobbies: ['Programming', 'Cooking'],
    greet(lastName: string) {
      console.log(`Hi, I am ${this.firstName} ${lastName}!`);
    }
  }
```

Notice how we can add very different properties now? This is a way of telling the compiler the following when declaring and defining `person`:

1. `person` **must** have a *`firstName`* property type `string`.
2. `person` **may** have an *`age`* property. It **must** be of type `string` if it exists, anything else will result in an error when compiling.
3. `person` **may** then have any type of properties because of the **index signature**: `[propName: string]: any;`.

### Implements Keyword <a name="implementskeyword"></a>

> One of the most common uses of interfaces in languages like `C#` and `Java`, that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.

Here are two more advanced examples, we can use an `interface` to define the subtypes of a `class`, or a `function`:

#### *1.* Implementing an `interface` to a `Class`: <a name="implementinginterfacetoclass"></a>

```ts
  interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
  }

  class Person implements NamedPerson {
    constructor(public firstName: string, public lastName: string) {}
    greet(lastName: string) {
      console.log(`Hi, I am ${this.firstName} ${lastName}!`);
    }
  }

  const myPerson = new Person('Robert', 'Molina');
  greet(myPerson); // Prints: "Hi, I am Robert Moina"
```

> Interfaces describe the **`public` side of the class**, rather than both the `public` and `private` side. This prohibits you from using them to check that a class also has particular types for the private side of the class instance.

**Note that classes may be extended to another `class` and tied to an `interface` by using the `implements` keyword**. 

Here is an example as shown in the [TypeScript official documentation about interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html):

```ts
  class Control {
      private state: any;
  }

  interface SelectableControl extends Control {
      select(): void;
  }

  class Button extends Control implements SelectableControl {
      select() { }
  }
```

#### *2.* Implementing an `interface` to a `function`: <a name="implementinginterfacetofunction"></a>

> As we mentioned earlier, interfaces can describe the rich types present in real world JavaScript. Because of JavaScript’s dynamic and flexible nature, you may occasionally encounter an object that works as a combination of some of the types described above.

One such example is an object that acts as both a function and an object, with additional properties:

```ts
  interface DoubleValueFunc {
    (number1: number, number2: number): number;
  }

  let myDoubleFunction: DoubleValueFunc;
  myDoubleFunction = (num1: number, num2: number) => {
    return (num1 + num2) * 2;
  }

  console.log(myDoubleFunction(10,50)); // Prints: 120
```

### Extends Keyword (Interface Inheritance) <a name="extendskeyword"></a>

Just like how a `class` may extend its properties by inheriting `class` or `abstract class` properties, **interfaces may also inherit properties to extend its own properties**. It's done exactly as you'd expect, here's an example using the `NamedPerson` interface shown in the examples above to extend a new interface defined as `AgedPerson`:

```ts
  interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
  }

  interface AgedPerson extends NamedPerson {
    age: number;
  }

  const oldPerson: AgedPerson = {
    age: 74,
    firstName: 'An Old Guy',
    greet(lastName: string) {
      console.log(`Hello Sr. ${lastName}.`);
    }
  }
```
As you can see, the `oldPerson` will be restricted to the `AgePerson` type structure, which inherits all of `NamedPerson` properties.

---

## Generics <a name='generators'></a>

> A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

> In languages like `C#` and `Java`, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

Generics are a way to help us write dynamic, flexible code. To explain what generics are, let's take a look at the example below:

```ts
  function echo(data: string) {
    return data;
  }
```

That is **not** a generic function. Generics are reusable components (be it a `function`, an `object`, a `class`) that can be used multiple times for multiple variable types, like a `string`, a `number`, `boolean`, etc. Next we'll see how to properly write Generics in TypeScript and different types of Generics.

### Simple Generics <a name="simplegenerics"></a>

To write a generic, let's take the example above and turn it into a simple generic function. Here's how the original `echo` function would be rewritten into a simple generic:

```ts
  function echo(data: any) {
    return data;
  }

  console.log(echo('Robert')); // Prints: "Robert"
  console.log(echo(24).length); // Prints: undefined.
  console.log(echo({ name: 'Robert', age: 24 })); // Prints: { name: "Robert", age: 24 }
```
Our function is now a generic function, it can accept `any` type of argument and returns a value of equal type. But this function is not really practical for two reasons:

1. The compiler doesn't know what the **type** of the return value will be.
2. Because of the above, the IDE won't know what value **type** will be returned from the function, resulting in higher difficulty to access its properties, we would have to be sure beforehand. The program could also crash if an undefined variable is used later on.

Now how in the example above, we can't access the `length` property of a string, because `echo` returns a `number`, but neither the compiler nor the IDE knows this **because we are losing information about said type**. We can fortunately fix this however, by using **better generics**.

### Better Generics <a name="bettergenerics"></a>

While the example above is technically a generic function, let's now improve by making use of a TypeScript it so that we can know what type will be returned from `echo`. Here is an example:

```ts
  function betterEcho<T>(data: T) {
    return data;
  }
```

> We’ve now added a type variable `T` to the function. This `T` allows us to capture the type the user provides (e.g. `number`), so that we can use that information later. Here, we use `T` again as the return type.

By using the angle brackets right beside `betterEcho`, it's a way of saying to the compiler and the IDE the following: *"hey, `betterEcho` must return a value **type** *equal* to the **type** of the `data` argument"*. Here is an example of using `betterEcho` and how the compiler would behave:

```ts
  // Now I get types in the IDE, the compiler also knows what type is returned from betterEcho.
  console.log(betterEcho('Robert').length);
// console.log(betterEcho(24).length); // Compiler & IDE warning: Property 'length' does not exist on type `number`.
  console.log(betterEcho<number>(24).toExponential(2)); // I would get IDE support.
  console.log(betterEcho({ name: 'Robert', age: 24 }).age); // I would also get IDE support.
```

This way both the compiler **and** the IDE will know what type will be returned from `betterEcho`. **The compiler won't even run if `noEmitOnError` is true inside the `tsconfig.json` file. [More info about this here] (https://www.typescriptlang.org/docs/handbook/compiler-options.html)**

### Built-in Generics <a name="builtingenerics"></a>

Some types though, have *built-in generics*. I've even used some as examples before without having touched yet on generics. Here is a very simple examples:

```ts
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
```

Arrays have built-in generics. The constant `testResults` is an array that will accept any value that is of type `number`. The function `printAll` will also accept any `array` of `T` type as an argument, turning `printAll` into a generic function.


### Generic Types <a name="generictypes"></a>

The `Generic Types` are **exactly** what the name says. It's a way of declaring any kind of variable with a generic type. Let's see how to create generic functions and generic interfaces. For example:

**Functions:**

```ts
  function betterEcho<T>(data: T) {
    return data;
  }

  const echoStr: <T>(data: T) => T = betterEcho;
  console.log(echoStr<string>('Hello world!').toLocaleUpperCase()); // Prints: "HELLO WORLD!"

  const echoNum: <T>(data: T) => T = betterEcho;
  console.log(echoNum<number>(312).toString()); // Prints: "312"
```

> The type of generic functions is just like those of non-generic functions, with the type parameters listed first, similarly to function declarations.

**Interfaces:**

Here is an example as shown in the [TypeScript official documentation about generic types](https://www.typescriptlang.org/docs/handbook/generics.html):

```ts
  interface GenericIdentityFn<T> {
      (arg: T): T;
  }

  function identity<T>(arg: T): T {
      return arg;
  }

  let myIdentity: GenericIdentityFn<number> = identity;
```

> Notice that our example has changed to be something slightly different. Instead of describing a generic function, we now have a non-generic function signature that is a part of a generic type. When we use `GenericIdentityFn`, we now will also need to specify the corresponding type argument (here: number), effectively locking in what the underlying call signature will use. Understanding when to put the type parameter directly on the call signature and when to put it on the interface itself will be helpful in describing what aspects of a type are generic.

### Generic Class <a name="genericclass"></a>

> A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

Here is a simple example for starters using **`constraints`**. The generic types may be constrained by **extending** them to certain types. For example, we may **constrain** (with the `extends` keyword) a type `T` to type `number`, or type `string` **only**. Here is an example:

```ts
  class GenericMath<T extends number | string> {
    constructor(public baseValue: T, public multiplyValue: T) {}
    calculate(): number {
      return +this.baseValue * +this.multiplyValue
    }
  }

  // const genericMath = new GenericMath<number>(10, 'string'); // Not possible because 'string' can't be converted to a number.
  // const genericMathBoolean = new GenericMath<boolean>(10, '20'); // Not possible because T only extends to number and string only.
  const onlyNumbers = new GenericMath<number>(10, 20);
  const onlyStrings = new GenericMath<string>('10', '20');
  const bothTypes = new GenericMath<number | string>(10, '20');

  console.log(onlyNumbers.calculate()); // Prints: 200
  console.log(onlyStrings.calculate()); // Prints: 200
  console.log(bothTypes.calculate()); // Prints: 200
```

Notice how `T` type is defined. **`T` extends to the `number` type, `or` to the `string` type only**. This means that everything referring to `T` inside the generic class `GenericMath`, can be of type `number` or type `string` (e.g. the constructor arguments), depending on how its set when calling the constructor.

Here is a more advanced example where we use **multiple tipes** when defining the generic class types:

```ts
  class MultipleTypesMath<T extends number, U extends number | string> {
    constructor(public baseValue: T, public multiplyValue: U) {}
    calculate(): number {
      return +this.baseValue * +this.multiplyValue;
    }
  }

  const multipleTypesMath = new MultipleTypesMath<number, number | string>(5, '20');

  console.log(multipleTypesMath.calculate()); // Prints: 100
```

Now we have **two** types, `T` and `U` and both are constrained, but to different types. The constructor argument `baseValue` is defined as type `T`, and `T` only extends to type `number`, which results in `baseValue` only accepting values of type `number` when calling the constructor.

`U` only accepts values of type `number` or `string`, and it's assigned to the `multiplyValue` argument of the constructor.

---

## Decorators <a name='decorators'></a>

### Prologue <a name='decoratorsprologue'></a>

Before getting into what decorators are, here is some important information taken from the [TypeScript official documentation about decorators](https://www.typescriptlang.org/docs/handbook/decorators.html):

> With the introduction of Classes in TypeScript and ES6, there now exist certain scenarios that require additional features to support annotating or modifying classes and class members. Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members. Decorators are a stage 2 proposal for JavaScript and are available as an experimental feature of TypeScript.

> **NOTE:  Decorators are an experimental feature that may change in future releases.**

> To enable experimental support for decorators, you must enable the `experimentalDecorators` compiler option either on the command line or in your `tsconfig.json`:

***Command Line:***

```cli
tsc --target ES5 --experimentalDecorators
```

***tsconfig.json:***

```json
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

### Introduction <a name='decoratorsintroduction'></a>

> A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form `@expression`, where **`expression`** must evaluate to a function that will be called at runtime with information about the decorated declaration.

### Basic Decorator <a name="#basicdecorator"></a>

Another way to explain a decorator would be to say that they are a way to enhance the functionality of a `class`. We can use decorators to add properties to a decorated class when its constructor is executed, for example. This is of course among many other things that are possible, more of this below.

```ts
  function logged(constructorFn: Function) {
    console.log(constructorFn); // Will log the class Person constructor.
  }

  @logged
  class Person {
    constructor() {
      console.log('Hi!');
    }
  }
```

Every time a new instance of `Person` is built, the **constructor function** will be logged into the console.

### Factory <a name="#factory"></a>

> If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.

In other words, a factory is a functions that returns a decorator.

```ts
  function logged(constructorFn: Function) {
    console.log(constructorFn); // Will log the class Person constructor.
  }

  // Factory
  function logging(value: boolean) {
    return value ? logged : () => {};
  }

  @logging(true) // If true, it will return the `logged` decorator, if false, it will execute an empty function.
  class Car {

  }
```

### Advanced Decorator <a name="#advanceddecorator"></a>

Since decorators have access to a class constructor function, through the decorators we can access the class `prototype` and add properties to said class. In the example below we will add the `print` method to any `class` decorated by `printable` (to `Plant` in this case). Also notice in the next example how the argument passed to `logging` (same `factory` function as above) is `false`. This means the constructor won't be printed to the console through the `logged` decorator **(because the `factory` won't return it)**.

```ts
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
  (<any>plant).print(); // Would print the constructed Plant object: { name: "Green Plant" }, then change the name property.
  console.log('After print() is executed', plant); // Prints: the constructed Plant object: { name: "Red Plant" }.
```

### Method Decorator <a name="#methoddecorator"></a>

> A Method Decorator is declared just before a method declaration. The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition. A method decorator cannot be used in a declaration file, on an overload, or in any other ambient context (such as in a declare class).

Besides adding a decorator to the class, we can also add decorators to a class member method (and properties, parameters - more on this below). It is done in the exact same way.

```ts
  function editable(value: boolean) {
    return function(target:any, propName: string, descriptor: PropertyDescriptor = {}) {
      descriptor.writable = value;
      Object.defineProperty(target, propName, descriptor);
    }
  }
  
  class Project {
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
  // project.calcBudget = () => { // Throws warning in the console IF editable is false. Property won't ever be changed.
  //   console.log(2000);
  // };
```

In the above example, we are modifying the `calcBudget` object's writable property to avoid it from being changed in the future. If changed then a warning will be thrown in the console. [More information about PropertyDescriptors can be found here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).

### Property Decorator <a name="#propertydecorator"></a>

The good thing about decorators is that they are exactly as their name imply. With the property decorator, we can also change its property during runtime, among other things. Here's what the official documentation have to say about **property decorators**:

> A Property Decorator is declared just before a property declaration. A property decorator cannot be used in a declaration file, or in any other ambient context (such as in a declare class). 

The expression for the property decorator will be called as a function at runtime, with the following two arguments:

1. Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
2. The name of the member.

> **NOTE  A Property Descriptor is not provided as an argument to a property decorator due to how property decorators are initialized in TypeScript. This is because there is currently no mechanism to describe an instance property when defining members of a prototype, and no way to observe or modify the initializer for a property. The return value is ignored too. As such, a property decorator can only be used to observe that a property of a specific name has been declared for a class.**

**That is not to say that a property's PropertyDescriptor object cannot  be modified.** We may define a new object descriptor and return it, here's an example of how to make a property with `writable` false:

```ts
  // Method Decorator
  function editable(value: boolean) {
    return function(target:any, propName: string, descriptor: PropertyDescriptor = {}) {
      descriptor.writable = value;
      Object.defineProperty(target, propName, descriptor);
    }
  }

  // Property Decorator
  function overwritable(value: boolean): any {
    return function(target: any, propName: string): any {
      const newDescriptor: PropertyDescriptor = { // New PropertyDescriptor object.
        writable: value
      };
      return newDescriptor;
    }
  }

  class Project {
    @overwritable(false)
    private projectName: string;

    constructor(name: string) {
      this.projectName = name;
    }

    @editable(true)
    calcBudget() {
      console.log(1000);
    }
  }
  
  const project = new Project('Super Project'); // The name won't be modified because the @overwritable decorator's argument is false.
  project.calcBudget(); // Prints: 1000
  project.calcBudget = () => { // Throws error in console IF the @editable decorator's argument is false, cannot assign new property to this.
    console.log(2000);
  };
  project.calcBudget(); // Prints: 2000
  console.log(project) // IF overwritable is false, then projectName will be equal to undefined.
```

### Parameter Decorator <a name="#parameterdecorator"></a>

Let's quote the official documentation again:

> A Parameter Decorator is declared just before a parameter declaration. The parameter decorator is applied to the function for a class constructor or method declaration. A parameter decorator cannot be used in a declaration file, an overload, or in any other ambient context (such as in a declare class).

The expression for the parameter decorator will be called as a function at runtime, with the following three arguments:

Either the constructor function of the class for a static member, or the prototype of the class for an instance member.

1. The name of the member.
2. The ordinal index of the parameter in the function’s parameter list.

> **NOTE  A parameter decorator can only be used to observe that a parameter has been declared on a method.**

Here is an example of how we can put that into practice:

```ts
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

    // @printInfo behind printAll
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

```

So, `@printInfo` will only be called at runtime whenever `printStudentNumbers` is executed. Here is what `@printInfo` would print for both instances:

```js
  Target: > Object {}
  methodName: printStudentNumbers
  paramIndex: 1 // Starts counting at 0. It's 1 because `printAll` is the second argument of `printStudentNumbers`.
```

---

## Webpack Workflow (v^4.X) <a name='workflows'></a>

[Here is the official documentation about TypeScript made by the folks at Webpack](https://webpack.js.org/guides/typescript/).

Here's the TLDR:

1. Install the TypeScript compiler with `npm install --save-dev typescript ts-loader`.

> We use ts-loader in this guide as it makes enabling additional webpack features, such as importing other web assets, a bit easier.

2. Run `tsc --init`, then modify the `tsconfig.json` file to look like this or similar:

```ts
  {
    "compilerOptions": {
      "outDir": "./dist/",
      "noImplicitAny": true,
      "module": "es6",
      "target": "es5",
      "jsx": "react",
      "allowJs": true
    }
  }
```

This will make sure the compiler can parse TypeScript down to ES5.

3. Webpack `webpack.config.js` file configuration to handle TypeScript:
```js
  const path = require('path');

  module.exports = {
    entry:"./src/app.ts",
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool:"source-map",
    resolve: {
      extensions: ["*",".ts",".tsx",".js"]
    },
    module:{
      rules: [
        { test:/\.tsx?$/, loader:"ts-loader" }
      ]
    }
  };
```
> This will direct webpack to enter through ./index.ts, load all .ts and .tsx files through the ts-loader, and output a bundle.js file in our current directory.

---

## TypeScript with React.js <a name='typescriptreactjs'></a>

[Here is the official documentation about using TypeScript along with React.js](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).

In this section though, I'll focus on how to use TypeScript while using `create-react-app`.

1. Create the React.js application by running `npx create-react-app project-name --scripts-version=react-scripts-ts`.

This will now also create the react app with all the configuration already set up and ready to go.

[Here is an exmaple React.js app created by running the previous command.](https://github.com/rmolinamir/typescript-cheatsheet/tree/master/lib/react.js)

When using an interface to declare the PropTypes, by convention we must write a capital I when defining an interface. Let's see an example about how we can use PropTypes together with interfaces, enums, and how to apply them: 

***App.tsx***
```tsx
  // ...

  interface IAppProps {[propName]: any}
  interface IAppState {
    counterValue: number;
  }

  class App extends React.Component<IAppProps, IAppState> {
    public state = { counterValue: 0 }; // State is required to be public.

    public render() {
      return (
        <div>
          <p>
            <CounterOutput 
              counter={this.state.counterValue}
              onClick={this.counterHandler} />
          </p>
        </div>
      );
    }

    private counterHandler = (mode: ECounterHandlers) => {
      this.setState(prevState => {
        switch(mode) {
          case ECounterHandlers.Dec:
            return { counterValue: prevState.counterValue - 1 }
          case ECounterHandlers.Inc:
            return { counterValue: prevState.counterValue + 1 }
        }
      });
    }
  }

  export default App;
```
***CounterOutput.tsx***
```tsx
  export enum ECounterHandlers {
    Inc,
    Dec
  }

  interface ICounterOutputProps {
    counter: number;
    onClick: (mode: ECounterHandlers) => void;
  }
  const counterOutput = (props: ICounterOutputProps) => {
    return (
      <div>
        <p>{props.counter}</p>
        <button onClick={() => props.onClick(ECounterHandlers.Dec)}>Decrement</button>
        <button onClick={() => props.onClick(ECounterHandlers.Inc)}>Increment</button>
      </div>
    );
  }
```

Notice the following:

1. There's a capital E when defining the enum. That is a personal thing I picked up while using the Unreal Engine software that is based in `c++` which is similar in many ways to TypeScript, and it also makes sense since it's inline with the interface naming convention.
2. Passing variables, defining and declaring components and everything else is exactly as you'd expect - with the extra features of TypeScript added on top of it.
3. Remember that class members are `public` by default while using TypeScript, **but, a the state of a class component must always be public**.

It is also possible to modify the `tsconfig.json` or the `tslint.json` to handle highlights in your IDE:

```json
  {
    "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
    "linterOptions": {
      "exclude": [
        "config/**/*.js",
        "node_modules/**/*.ts",
        "coverage/lcov-report/*.js"
      ]
    },
    "rules": {
      "jsx-no-lambda": false
    }
  }
```

TypeScript by default doesn't like when lambda functions are used and the IDE will hightlight them as an error. To disable this, add the following rule into your `tslint.json` file: `"jsx-no-lambda": false`.

---

## Feedback <a name='feedback'></a>

This repository. Submit a PR with any change or addition you'd like to see!

And thank you very much for taking the time to do so 💖

---

## Contribute <a name='contribute'></a>

Contributions are always welcome! Just like before, submit a PR and let me know at:

- [u/rmolinamir](https://www.reddit.com/user/rmolinamir)
- [rmolinamir@gmail.com](mailto:rmolinamir@gmail.com)

Here's a small list of awesome people that have contributed in some way or another, thank you guys!

  - [KevinKelbie](https://www.reddit.com/user/KevinKelbie)
  - [Ical89](https://www.reddit.com/user/Ical89)
