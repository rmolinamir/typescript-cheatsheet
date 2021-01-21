<p align="center">
  <img src="https://raw.githubusercontent.com/rmolinamir/typescript-cheatsheet/master/TypeScript.png" alt="TypeScript"/>
</p>

# TypeScript Cheatsheet

A set of TypeScript related notes used for quick reference. The cheatsheet contains references to types, classes, decorators, and many other TypeScript related subjects.

# Table of contents

- [TypeScript Cheatsheet](#typescript-cheatsheet)
- [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Types](#types)
    - [Basic Assign Types](#basic-assign-types)
      - [String](#string)
      - [Number](#number)
      - [Boolean](#boolean)
      - [Array](#array)
    - [Tuples](#tuples)
    - [Any](#any)
    - [Enums](#enums)
    - [Functions](#functions)
    - [Argument Types](#argument-types)
    - [Function Types](#function-types)
    - [Void Function Type](#void-function-type)
    - [Objects](#objects)
      - [Complex Objects](#complex-objects)
      - [Optional object properties](#optional-object-properties)
    - [Alias](#alias)
    - [Union](#union)
    - [Intersection](#intersection)
    - [Check](#check)
    - [Never](#never)
    - [Nullable](#nullable)
    - [Type Assertions](#type-assertions)
  - [ES6](#es6)
    - [Template Literals](#template-literals)
    - [Arrow Functions](#arrow-functions)
    - [Default Parameters](#default-parameters)
    - [Spread Operators](#spread-operators)
    - [Array Destructuring](#array-destructuring)
    - [Object Destructuring](#object-destructuring)
  - [Classes](#classes)
  - [Private Members](#private-members)
  - [Class Inheritance](#class-inheritance)
  - [Getters & Setters](#getters--setters)
  - [Static Properties & Methods](#static-properties--methods)
  - [Abstract Classes](#abstract-classes)
  - [Private Constructors & Singletons](#private-constructors--singletons)
  - [Modules](#modules)
    - [Export](#export)
    - [Default Exports](#default-exports)
    - [Import](#import)
    - [Advanced Module Loading](#advanced-module-loading)
  - [Namespaces](#namespaces)
  - [Ambient Modules](#ambient-modules)
    - [Manually declaring a third party library](#manually-declaring-a-third-party-library)
    - [Using @types/[third-party-library] NPM packages](#using-typesthird-party-library-npm-packages)
    - [Shorthand for Ambient Modules](#shorthand-for-ambient-modules)
    - [Wildcard module declarations](#wildcard-module-declarations)
    - [UMD modules](#umd-modules)
  - [Interfaces](#interfaces)
    - [Optional Properties](#optional-properties)
    - [Index Signatures (Dynamic Property Names)](#index-signatures-dynamic-property-names)
    - [Implements Keyword](#implements-keyword)
      - [*1.* Implementing an `interface` to a `Class`](#1-implementing-an-interface-to-a-class)
      - [*2.* Implementing an `interface` to a `function`](#2-implementing-an-interface-to-a-function)
    - [Extends Keyword (Interface Inheritance)](#extends-keyword-interface-inheritance)
  - [`Omit` type when extending an interface](#omit-type-when-extending-an-interface)
  - [Omitting specific properties when extending an interface](#omitting-specific-properties-when-extending-an-interface)
  - [Type checking for interfaces](#type-checking-for-interfaces)
  - [Generics](#generics)
    - [Simple Generics](#simple-generics)
    - [Better Generics](#better-generics)
    - [Built-in Generics](#built-in-generics)
    - [Generic Types](#generic-types)
    - [Generic Class](#generic-class)
  - [Decorators](#decorators)
    - [Prologue](#prologue)
    - [Decorators Introduction](#decorators-introduction)
    - [Basic Decorator](#basic-decorator)
    - [Factory](#factory)
    - [Advanced Decorator](#advanced-decorator)
    - [Method Decorator](#method-decorator)
    - [Property Decorator](#property-decorator)
    - [Parameter Decorator](#parameter-decorator)
  - [Webpack Workflow (v^4.X)](#webpack-workflow-v4x)
  - [TypeScript with React.js](#typescript-with-reactjs)
    - [TypeScript while using `create-react-app`](#typescript-while-using-create-react-app)
  - [Setting up general React prop types](#setting-up-general-react-prop-types)
    - [References (`React.createRef()` or `useRef` API)](#references-reactcreateref-or-useref-api)
    - [React Children](#react-children)
    - [CSS Properties and Classes Prop Types](#css-properties-and-classes-prop-types)
    - [General Prop Types (e.g. HTML 5 props, event listeners etc.)](#general-prop-types-eg-html-5-props-event-listeners-etc)
  - [Setting up React References (React.createRef() or useRef API)](#setting-up-react-references-reactcreateref-or-useref-api)
    - [TypeScript & useRef](#typescript--useref)
    - [TypeScript & React.createRef](#typescript--reactcreateref)
  - [Setting up Event Handlers](#setting-up-event-handlers)
  - [TypeScript and React Hooks](#typescript-and-react-hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
    - [useContext](#usecontext)
    - [useReducer](#usereducer)
    - [useCallback](#usecallback)
    - [useMemo](#usememo)
    - [useRef](#useref)
    - [useImperativeHandle](#useimperativehandle)
    - [useLayoutEffect](#uselayouteffect)
    - [useDebugValue](#usedebugvalue)
    - [Custom Hooks](#custom-hooks)
  - [Feedback](#feedback)
  - [Collaborators](#collaborators)
  - [Contribute](#contribute)

---

## Introduction

TypeScript is a very powerful addition to JavaScript. TypeScript is developed by Microsoft and is increasingly supported by the day  by technologies such as Angular, Vue.js 3, React.js, and many others.

As TypeScript code can be compiled to ES5, it includes all of the native JavaScript features such as spread arrow function, deconstructors, and introduces some **very** useful features such as decorators, generics and interfaces, enums, modules, among others which can be found in different programming languages.

[⬆️ Back to top](#table-of-contents)<br>

---

## Types

> For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.

[⬆️ Back to top](#table-of-contents)<br>

### Basic Assign Types

#### String

> Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

```ts
  const myName: string = 'Robert';
```

[⬆️ Back to top](#table-of-contents)<br>

#### Number

> As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type `number`. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```ts
  const myAge: number = 24;
```

[⬆️ Back to top](#table-of-contents)<br>

#### Boolean

> The most basic datatype is the simple `true`/`false` value, which JavaScript and TypeScript call a `boolean` value.

```ts
  const bHasHobbies: boolean = true;
```

[⬆️ Back to top](#table-of-contents)<br>

#### Array

> TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

```ts
  const hobbies: string[] = ['Programming', 'Cooking'];
```

If no types are declared, TypeScript will automatically assign a type depending on the types of the Array values.

```ts
  const numbers = [1, 3.22, 6, -1] // This variable will automatically be assigned a number[] array type.
```

**Note that declaring types is encouraged**.

[⬆️ Back to top](#table-of-contents)<br>

### Tuples

> Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a `string` and a `number`:

```ts
  const address: [string, number] = ["Street", 99];
```

[⬆️ Back to top](#table-of-contents)<br>

### Any

> We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the `any` type:

```ts
  let myCar: any = 'BMW';

  console.log(myCar); // Prints: BMW

  myCar = { brand: 'BMW', series: 3 };

  console.log(myCar) // Prints: { brand: "BMW", series: 3 }
```

[⬆️ Back to top](#table-of-contents)<br>

### Enums

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

[⬆️ Back to top](#table-of-contents)<br>

### Functions

Functions as you may expect work exactly the same as in JavaScript with a couple new features. In TypeScript, you may assign the function two things:

- Argument types.
- Function types.

```ts
  function returnMyName(myName): string {
    return myName;
  }

  console.log(returnMyName('Robert')) // Prints: Robert
```

[⬆️ Back to top](#table-of-contents)<br>

### Argument Types

In TypeScript any argument of a function may be assigned a type no matter how complex, for example:

```ts
  // argument types
  function multiply(value1: number, value2: number) {
    return value1 * value2;
  }

  // console.log(multiply('Robert', 5)) // Not possible, both arguments must be of type number.
  console.log(multiply(10,5)) // Prints: 50
```

[⬆️ Back to top](#table-of-contents)<br>

### Function Types

Just like the argument, the **return value** of a function may be assigned a type. Consider the example above to be included into the example below:

```ts
  const myMultiply: (val1: number, val2: number) => number;
  // myMultiply = sayHello; // Not possible.
  // myMultiply(); // Not possible.
  myMultiply = multiply;

  console.log(myMultiply(5, 2));
```

[⬆️ Back to top](#table-of-contents)<br>

### Void Function Type

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

[⬆️ Back to top](#table-of-contents)<br>

### Objects

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

[⬆️ Back to top](#table-of-contents)<br>

#### Complex Objects

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

[⬆️ Back to top](#table-of-contents)<br>

#### Optional object properties

In TypeScript, all newly declared **object properties** (including both **function parameters**, and **interface properties**) may be declared as *optional*. To do so, we must place a `?` character after the key (or name) of the property when declaring it (a postfix notation). Here's an example:

```ts
  const right: { name: string, age?: number } = {
    name: 'Robert'
  };

  const alsoRight: { name: string, age?: number } = {
    name: 'Robert',
    age: 24
  };

  // This is not possible because the name key-value pair is missing.
  // const wrong: { name: string, age?: number } = {
  //   age: 24
  // };
```

[⬆️ Back to top](#table-of-contents)<br>

### Alias

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

[⬆️ Back to top](#table-of-contents)<br>

### Union

Variables are not restricted to only one assigned type. This is where union types come in where we can assign two or more types (e.g. assign `number` and `string`) to a single variable. For example:

```ts
  let myRealRealAge: number | string = 24;
  myRealRealAge = '24';
  // myRealRealAge = true // Not possible since myRealRealAge only accepts a number or a string.
```

### Intersection

Intersection types are similar to union types (and similar to the `extend` keyword pattern, which is explained further down), but arguably less common (yet, at least equally useful). Before we get into what an intersection type is, I must mention that in the [TypeScript official documentation about the intersection types](https://www.typescriptlang.org/docs/handbook/advanced-types.html), they are showcased first and *before* the union types, however in this guide I will mention them *after* the union types because they have a bit of a more abstract definition.

Since it's a rather abstract concept, to give you an idea of what an intersection type is, think of the famous `React.js` package, `react-redux`, and its [`compose` function](https://redux.js.org/api/compose). A [brief look of the code snippet](https://github.com/reduxjs/redux/blob/c43fc3a7c7048c0dba614bc6fbea1b22740d5176/src/compose.ts) will show us how all of the arguments of the `compose` function are *mixed* into one single `function`. This is essentially what the the intersection types do, they *mix* an N number of types to create a new one, so long as they are compatible.

In TypeScript, an intersection type is simply a mix (more commonly referred to as a ***mixin***) between two or more types.

**Note however, that this does not mean that you can freely use intersection types anywhere**. For example, this simple declaration will make the compiler throw an error:

```ts
let stringAndNumber: string & number = 5;
```

The reason is because `5` is not assignable to type `string`. And that is because `5` is of type `number`, the types `number` and `string` are structuraly **incompatible**.

Without getting too much into it, the way TypeScript compares types is based on their members. Since at least 1 of the members between the types `string` and `number` clash, the intersection of these types is not possible.

**That** is the limitation of the intersection types. The intersected types *must* be compatible, by this, I mean that **their properties must not overlap each other**. If this condition is met, **the resulting type will have access to all properties**.

Because of the previously mentioned limitation, intersection types are less common than union types, they would be *very* hard to use on variables with "basic" levels of types. Fortunately for us, by using `interfaces` ([explained here](#interfaces)) (and other advanced types), intersection types become ***very*** useful. Let's take a look at a more advanced example (which assumes the reader has at least basic knowledge of interfaces):

```ts
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
```

**NOTE:** If you want to mix **members** (not types) of a `class`, you should use the `extend` keyword instead, [explained here](#extends-keyword-interface-inheritance).

[⬆️ Back to top](#table-of-contents)<br>

### Check

Programmatically checking for types work exactly as it works in JavaScript:

```ts
  let finalValue = 'A string';
  if (typeof finalValue == 'string') {
    console.log('finalValue is a string');
  }
```

[⬆️ Back to top](#table-of-contents)<br>

### Never

> The `never` type represents the type of values that never occur. For instance, `never` is the return type for a function expression or an arrow function expression **that always throws an exception or one that never returns**; Variables also acquire the type `never` when narrowed by any type guards that can never be true.

```ts
  function neverReturns(): never {
    throw new Error('An error!');
  }
```

[⬆️ Back to top](#table-of-contents)<br>

### Nullable

> In TypeScript, both `undefined` and `null` actually have their own types named `undefined` and `null` respectively. Much like `void`, they’re not extremely useful on their own:

```ts
  let canBeNull: null | number = 12;

  canBeNull = null;
  let canAlsoBeNull;
  canAlsoBeNull = null;
  let canThisBeAny = null;
  canThisBeAny = 12;
```

[⬆️ Back to top](#table-of-contents)<br>

### Type Assertions

> Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.
> Type assertions are a way to tell the compiler “trust me, I know what I’m doing”. A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms. One is the “angle-bracket” syntax, which is fine, except for JSX (read React) code because JSX works with angle-bracket syntax itself:

```ts
  const someValue: any = "this is a string";
  const strLength: number = (<string>someValue).length;
```

And the other is the one used with JSX, namely the `as`-syntax:

```ts
  const someValue: any = "this is a string";
  const strLength: number = (someValue as string).length;
```

[⬆️ Back to top](#table-of-contents)<br>

---

## ES6

TypeScript natively supports the newer ES6 (A.K.A. ECMAScript 6 and ECMAScript 2015) JavaScript features. As you may have guessed, we can assign types to these new features (e.g. assigning types to an arrow function). Here are some examples:

### Template Literals

```ts
  const userName = 'Robert';
  const greeting = `Hello I'm ${userName}`;

  console.log(greeting)
```

[⬆️ Back to top](#table-of-contents)<br>

### Arrow Functions

Arrow function arguments can be assigned any type.

```ts
  const greet = (name: string = 'Robert') => console.log(`Hello, ${name}`);

  greet('Robert Molina');
```

[⬆️ Back to top](#table-of-contents)<br>

### Default Parameters

Arrow functions may also be defined with default argument values in case no respective arguments were passed, these default parameters may also be of any assigned type.

```ts
  const greet = (name: string = 'Robert') => console.log(`Hello, ${name}`);

  greet(); // Prints: "Robert"
```

[⬆️ Back to top](#table-of-contents)<br>

### Spread Operators

> Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```ts
  const numbers: number[] = [-3, 33, 38, 5];

  console.log(Math.min(...numbers));

  const newArray: number[] = [55, 20, ...numbers];

  console.log(newArray);
```

[⬆️ Back to top](#table-of-contents)<br>

### Array Destructuring

Arrays may also be destructured in TypeScript, keep in mind that all the assigned types to the array values won't be lost when destructured.

```ts
  const testResults: number[] = [3.89, 2.99, 1.38];
  const [result1, result2, result3] = testResults;

  console.log(result1, result2, result3);
```

[⬆️ Back to top](#table-of-contents)<br>

### Object Destructuring

Just like arrays, the destructured object value pairs will keep their previously assigned types. Keep in mind that when destructuring an object, the declared variable name **must** match the object key to let the compiler know which variable to destructure.

```ts
  const scientist: { firstName: string, experience: number } = { firstName: 'Robert', experience: 9000 };
  const { firstName, experience } = scientist;

  console.log(firstName, experience);
```

[⬆️ Back to top](#table-of-contents)<br>

---

## Classes

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

[⬆️ Back to top](#table-of-contents)<br>

## Private Members

When a member is marked `private`, it cannot be accessed from outside of its containing class. **However, should a class `X` inherit properties from `Person`, class `A` will be able to access all private properties from `Person` (e.g. `type and setType`) due to being inside (or having access to) the protected scope**. More on what class inheritance is all about just below, but here's an example;

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
   *
   */
```

If you want to prevent some properties or classes for being inherited, there is currently a proposal for the `final` keyword to be added.

Links:

- [Suggestion: Final keyword for classes and methods](https://github.com/Microsoft/TypeScript/issues/9264)
- [Support final classes (non-subclassable)](https://github.com/Microsoft/TypeScript/issues/8306)

[⬆️ Back to top](#table-of-contents)<br>

## Class Inheritance

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

[⬆️ Back to top](#table-of-contents)<br>

## Getters & Setters

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

[⬆️ Back to top](#table-of-contents)<br>

## Static Properties & Methods

Static properties and methods are class members that can be accessed from an outer scope of the `class`, **and** without having to instantiate the class either. Here's an example:

```ts
  class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
      return this.PI * diameter;
    }
  }

  console.log(Helpers.PI); // Prints: 3.14
  console.log(2 * Helpers.PI); // Prints: 6.28
  console.log(Helpers.calcCircumference(10)); // Prints: 31.42
```

[⬆️ Back to top](#table-of-contents)<br>

## Abstract Classes

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

[⬆️ Back to top](#table-of-contents)<br>

<a id="private-constructors-singletons"></a>

## Private Constructors & Singletons

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

In the above example, the variables `rightWay` and `anotherWay` would be pointers (think `C++`) to the same instance of `OnlyOne`. As you can see, to initiate `OnlyOne` we have to call `getInstance` instead of running the constructor from an outter scope of the `OnlyOne` class.

Afterwards, it is possible to call any of the other public methods of the class. You'd use this for things like managing global toast messages inside an application, with a single class instance managing every message. Another common use case is when front-end code (e.g. React/Vue/Angular) speaks to a backend such as Amazon's AWS or Google's Firebase platforms. In that case you'd use the AWS or Firebase SDK inside the frontent to create a singleton class instance inside the client device. That singleton class instance would provide the frontend code with all kinds of utility methods, such as, for example, backend specific methods to store data from the frontend into some backend storage e.g. Firebase's firestore database or Amazon's S3 storage bucket.

[⬆️ Back to top](#table-of-contents)<br>

---

## Modules

> Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.

The module code generation may be specified in the `tsconfig.json` file. **The compiler will generate appropriate code for Node.js (CommonJS), requirejs (AMD), UMD, SystemJS, or ECMAScript 2015 native modules (ES6) module-loading systems** depending on what the `tsconfig.json` `module` option is set on. For example, the React.js `tsconfig.json` file generated when using `create-react-app` module code generation option is `esnext`, targeted to `es5`.

> In TypeScript, any file containing a top-level import or export is considered a module. Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

1. [Export](#export)
2. [Default Exports](#default-exports)
3. [Import](#import)
4. [Advanced Module Loading](#advanced-module-loading)

[⬆️ Back to top](#table-of-contents)<br>

### Export

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

[⬆️ Back to top](#table-of-contents)<br>

### Default Exports

> Each module can optionally export a default export. Default exports are marked with the keyword default; and there can only be one default export per module. default exports are imported using a different import form.

The `default` exports are really handy. For instance, a library like React.js might have a default export of `React`, commonly imported under the name `React`. Each file may only have **one** default export, for example:

```ts
  const calculateRectangle = (width: number, length: number) => {
    return width * length;
  }

  export default calculateRectangle
```

[⬆️ Back to top](#table-of-contents)<br>

### Import

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

[⬆️ Back to top](#table-of-contents)<br>

### Advanced Module Loading

> In some cases, you may want to only load a module under some conditions. In TypeScript, we can use the pattern shown below to implement this and other advanced loading scenarios to directly invoke the module loaders without losing type safety.

Sometimes we might be in a situation where we only want to load certain parts of our application dynamically. This may be to reduce the initial load time or to improve performance.

This is commonly known as dynamic imports. The idea is to use the following pattern: `import id = require('...')` which will give us access to the types exposed by the module thanks to the compiler. The module will be loaded dynamically, which means it can be preceded by something like an `if` statement.

> **This leverages the reference-elision optimization so that the module is only loaded when needed**. For this pattern to work, it’s important that the symbol defined via an import is only used in type positions (i.e. never in a position that would be emitted into the JavaScript).
> **To maintain type safety, we can use the typeof keyword. The typeof keyword, when used in a type position, produces the type of a value, in this case the type of the module**.

We may use the `declare` keyword to literally declare a function. For example, to declare a require function we would use the following code:

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

[⬆️ Back to top](#table-of-contents)<br>

---

## Namespaces

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

[⬆️ Back to top](#table-of-contents)<br>

---

## Ambient Modules

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

Sounds a bit complicated but it's actually really easy to import a third library.

[⬆️ Back to top](#table-of-contents)<br>

Here the simplest two alternatives:

### Manually declaring a third party library

We will create a `d.ts` file that will put the jQuery `$` variable in the global scope of the application. This alternative is viable for any third party library, but it is not the most practical.

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

[⬆️ Back to top](#table-of-contents)<br>

<a id="types-npm-packages"></a>

### Using @types/[third-party-library] NPM packages

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

[⬆️ Back to top](#table-of-contents)<br>

### Shorthand for Ambient Modules

> If you don’t want to take the time to write out declarations before using a new module, you can use a shorthand declaration to get started quickly.

***declarations.d.ts***

```ts
  declare module "hot-new-module";
```

[⬆️ Back to top](#table-of-contents)<br>

### Wildcard module declarations

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

[⬆️ Back to top](#table-of-contents)<br>

### UMD modules

> Some libraries are designed to be used in many module loaders, or with no module loading (global variables). These are known as UMD modules. These libraries can be accessed through either an import or a global variable. For example:

***math-lib.d.ts***

```ts
  export function isPrime(x: number): boolean;
  export as namespace mathLib;
```

[⬆️ Back to top](#table-of-contents)<br>

---

## Interfaces

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

You might think this would make interfaces not scallable because of very restrictive properties, but fortunately **properties can be optional**. More on this below!

[⬆️ Back to top](#table-of-contents)<br>

### Optional Properties

[Very similar to the optional object properties](#optional-object-properties), to define an interface property as optional, we must place a `?` character after the key name of the property when defining it (a postfix notation). Here's an example:

```ts
  interface SimplePerson {
    firstName: string;
    lastName?: string;
    age?: number;
  }

  // Not possible because the firstName key-value pair is missing.
  // const wrong: SimplePerson = { lastName: 'Molina', age: 24 };
  const right: SimplePerson = { firstName: 'Robert', age: 24 };
```

[⬆️ Back to top](#table-of-contents)<br>

<a id="index-signatures"></a>

### Index Signatures (Dynamic Property Names)

We may also define the interface with *index signatures*, think of them like dynamic key-value pairs. Here's an example:

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

1. `person` **must** have a *`firstName`* property of type `string`.
2. `person` **may** have an *`age`* property. It **must** be of type `number` if it exists, anything else will result in an error when compiling.
3. `person` **may** then have any number of properties of type `string`, each with a value of type `any`, all made possible by the **index signature** of: `[propName: string]: any;`.

[⬆️ Back to top](#table-of-contents)<br>

### Implements Keyword

> One of the most common uses of interfaces in languages like `C#` and `Java`, that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.

[⬆️ Back to top](#table-of-contents)<br>

Here are two more advanced examples, we can use an `interface` to define the subtypes of a `class`, or a `function`:

<a id="implementing-interface-to-class"></a>

#### *1.* Implementing an `interface` to a `Class`

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

[⬆️ Back to top](#table-of-contents)<br>

<a id="implementing-interface-to-function"></a>

#### *2.* Implementing an `interface` to a `function`

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

[⬆️ Back to top](#table-of-contents)<br>

### Extends Keyword (Interface Inheritance)

Similar to how a `class` can extend its properties by inheriting another `class` or `abstract class` properties, **interfaces may also inherit properties to extend its own properties**. Here's a simple example similar to the one as shown in the [TypeScript official documentation about extending interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html):

```ts
  interface Shape {
    color: string;
  }

  interface Square extends Shape {
    sideLength: number;
  }

  const square: Square = {
    color: "blue",
    sideLength: 10
  };
```

By extending an interface, we are essentially mixing the "old" interface into a new interface, with newly added properties. To quote the official documentation:

> This allows us to copy the members of one interface into another, which gives you more flexibility in how you separate your interfaces into reusable components.

It is also possible to combine any number of interfaces into one, this a concept known as **composition** in programming, and it is possible to *compose* multiple interfaces into one, we will use this to serve as an example of *composition* **by extending multiple interfaces into a single interface**. Here's another example similar to the one as shown in the [TypeScript official documentation about extending interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html):

```ts
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  const square: Square = {
    color: "magenta",
    penWidth: 2.5,
    sideLength: 0.5
  }
```

Notice, how both `Shape` and `PenStroke` were mixed to create `Square` while also declaring an additional property named `sideLength`. Bear in mind that **all** of the extended interfaces must be **structurally compatible** or else the compiler will throw an error. As a final note, we can also omit (by either picking or excluding) properties, more on this directly below.

[⬆️ Back to top](#table-of-contents)<br>

<a id="omit-type-interfaces"></a>

## `Omit` type when extending an interface

Sometimes, we might want to omit certain types from an extended interface. One of the most common reasons is to **overwrite** a property. Let's first define the `Omit` special type that we will be using to exclude properties, and then we'll do a scenario exercise:

```ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
```

The angle brackets and the content inside them are part of what is known as `Generics`. They are a way to declare, basically, generic typing similarly to how an array of strings may be declared as `string[]`. More information about Generics on its section down below after the Interfaces!

Here's a breakdown of how the `Omit` type works. It's essentially doing the opposite of what the special `Pick` utility type does. In TypeScript 2.1, the `Pick` **utility** type was introduced, `Pick` allows us to **only pick certain properties of an object, to create a new object**, here's an example as shown in the [TypeScript official documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html):

```ts
// From T pick a set of properties K
declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

const nameAndAgeOnly = pick(person, "name", "age");  // { name: string, age: number }
```

In TypeScript 2.8, the `Exclude` type was added to the standard library, which allows an omission type to be written as shown directly below:

```ts
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
```

You can read the above as "exclude `"a"`, `"c"`, and `"f"` from `("a" | "b" | "c" | "d")`, which results in `"b"` or `"d"`.

Having said this, **`Omit` picks every property of an object `T`, excluding the specified `K` properties (or keys) of `T`**.

[⬆️ Back to top](#table-of-contents)<br>

<a id="exclude-interface-properties"></a>

## Omitting specific properties when extending an interface

Let's say we are creating a React component that is based on a common HTML `<input>` element. We want our component to receive all of the HTML attributes as props that a regular `<input>` element may receive, but we want to overwrite some to improve or enhance functionalities! So, for this example let's say that we want to overwrite the `onChange` attribute.

To overwrite the `onChange` attribute, we must omit it from the extended base interface, then declare it on the props interface. Our new `onChange` callback will return a variable of type `value` defined below, instead of an event. Here's an example:

```ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type value = string | number | string[];

/**
 * Base interface.
 */
type InputElementAttributes = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IInputProps extends IInputState, Omit<InputElementAttributes, 'onChange'> {
  onChange: (value?: value) => void
}

```

[⬆️ Back to top](#table-of-contents)<br>

<a id="type-chkecking-interfaces"></a>

## Type checking for interfaces

**Hard** checking for interface is not yet available, but there are ways to achieve the same results. I will explain two commonly used methods to check for interfaces. These methods are:

1. Use **type-guards** to check for instances of specifc objects.

[The TypeScript official documentation defines a **type guard** as](https://www.typescriptlang.org/docs/handbook/advanced-types.html) some expression that performs a runtime check that guarantees the type in some scope. To define a type guard, we simply need to define a function whose return type is a type predicate:

```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
```

Let's go back to our React scenario. Let's say our input values are programmatically managed, and could either be of type `value`, or objects with an `IValue` interface depening on some props and prior setup.

Let's assume we have an `onChangeHandler` that listens for any changes made to the input value and returns a data of ***type* value**. But the problem is that the **value *variable*** might not always be of ***type* value**, so we need to check if it's an object of **"type" IValue**. Let's define the typings and `onChangeHandler`:

```ts
type value = string | number | string[];

interface IValue {
  value: value;
  [propName: string]: any;
}

/**
 * `ISelectValue` interface type checker.
 */
const instanceOfIValue = (object: any): object is ISelectValue => {
  if (object && object.inputData) {
    return 'inputData' in object; // true
  }
  return false;
}

const onChangeHandler = (inputData: value | IValue): value => {
  // Checking for IValue object.
  if (instanceOfIValue(inputData)) {
    return inputData.value;
  }
  // Otherwise, simply return the inputData which will be of type value.
  return inputData;
}
```

The above code snippet might seem overkill, but keep in mind that `instanceOfIValue` can be used in multiple places, and it's scallable to a certain extent. Further properties might be added, and guarded for. If there are too many properties to guard though, using **distriminators** to check for instances might be better.

2. Use **discriminators** to check for instances of specific objects.

If you find yourself needing to check for many object properties to determine if an object matches your interface, you can use a **discriminator**. Here is a basic example, based on the example above except now we add a new property to `IValue` declared `displayValue`, and `value` might be `undefined`:

```ts
type value = string | number | string[];

interface IValue {
  value?: value;
  displayValue: string;
  discriminator: 'IValue';
  [propName: string]: any;
}

/**
 * `ISelectValue` interface type checker.
 */
const instanceOfIValue = (object: any): object is ISelectValue => {
  if (object && object.discriminator) {
    return object.discriminator === 'IValue';
  }
  return false;
}

const onChangeHandler = (inputData: value | IValue): value => {
  // Checking for IValue object.
  if (instanceOfIValue(inputData)) {
    return inputData.value || inputData.displayValue;
  }
  // Otherwise, simply return the inputData which will be of type value.
  return inputData;
}
```

By using a **discriminator**, we don't have to check if the `value` or `displayValue` properties exist, instead we check for a `discriminator` property which will let us know if the object is of "type" `IValue`.

[⬆️ Back to top](#table-of-contents)<br>

---

## Generics

> A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.
> In languages like `C#` and `Java`, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

Generics are a way to help us write dynamic, flexible code. To explain what generics are, let's take a look at the example below:

```ts
  function echo(data: string) {
    return data;
  }
```

That is **not** a generic function. Generics are reusable components (be it a `function`, an `object`, a `class`) that can be used multiple times for multiple variable types, like a `string`, a `number`, `boolean`, etc. Next we'll see how to properly write Generics in TypeScript and different types of Generics.

[⬆️ Back to top](#table-of-contents)<br>

### Simple Generics

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

Note how in the example above, we can't access the `length` property of a string, because `echo` returns a `number`, but neither the compiler nor the IDE knows this **because we are losing information about said type**. We can fortunately fix this however, by using **better generics**.

[⬆️ Back to top](#table-of-contents)<br>

### Better Generics

While the example above is technically a generic function, let's now improve it by making use of TypeScript so that we can know what type will be returned from `echo`. Here is an example:

```ts
  function betterEcho<T>(data: T) {
    return data;
  }
```

> We’ve now added a type variable `T` to the function. This `T` allows us to capture the type the user provides (e.g. `number`), so that we can use that information later. Here, we use `T` again as the return type.

By using the angle brackets right beside `betterEcho`, it's a way of saying to the compiler and the IDE the following: *"hey, `betterEcho` must return a value **type** equal to the **type** of the `data` argument"*. Here is an example of using `betterEcho` and how the compiler would behave:

```ts
  // Now I get types in the IDE, the compiler also knows what type is returned from betterEcho.
  console.log(betterEcho('Robert').length);
// console.log(betterEcho(24).length); // Compiler & IDE warning: Property 'length' does not exist on type `number`.
  console.log(betterEcho<number>(24).toExponential(2)); // I would get IDE support.
  console.log(betterEcho({ name: 'Robert', age: 24 }).age); // I would also get IDE support.
```

This way both the compiler **and** the IDE will know what type will be returned from `betterEcho`. **The compiler won't even run if `noEmitOnError` is true inside the `tsconfig.json` file. [More info about this here](https://www.typescriptlang.org/docs/handbook/compiler-options.html).**

[⬆️ Back to top](#table-of-contents)<br>

### Built-in Generics

Some types though, have *built-in generics*. I've even used some as examples before without having touched yet on generics. Here are some very simple examples:

```ts
  const testResults: Array<number> = [1.94, 2.33];
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

[⬆️ Back to top](#table-of-contents)<br>

### Generic Types

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

[⬆️ Back to top](#table-of-contents)<br>

### Generic Class

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

Notice how the `T` type is defined. **`T` extends to the `number` type, `or` to the `string` type only**. This means that everything referring to `T` inside the generic class `GenericMath`, can be of type `number` or type `string` (e.g. the constructor arguments), depending on how its set when calling the constructor.

Here is a more advanced example where we use **multiple types** when defining the generic class types:

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

`U` is a union type. It accepts values of type `number` or `string`, and it's assigned to the `multiplyValue` argument of the constructor.

[⬆️ Back to top](#table-of-contents)<br>

---

## Decorators

### Prologue

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

[⬆️ Back to top](#table-of-contents)<br>

<a id="decorators-introduction"></a>

### Decorators Introduction

> A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form `@expression`, where **`expression`** must evaluate to a function that will be called at runtime with information about the decorated declaration.

[⬆️ Back to top](#table-of-contents)<br>

### Basic Decorator

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

[⬆️ Back to top](#table-of-contents)<br>

### Factory

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

[⬆️ Back to top](#table-of-contents)<br>

### Advanced Decorator

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

[⬆️ Back to top](#table-of-contents)<br>

### Method Decorator

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

[⬆️ Back to top](#table-of-contents)<br>

### Property Decorator

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

[⬆️ Back to top](#table-of-contents)<br>

### Parameter Decorator

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

[⬆️ Back to top](#table-of-contents)<br>

---

<a id="webpack-workflow"></a>

## Webpack Workflow (v^4.X)

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

[⬆️ Back to top](#table-of-contents)<br>

---

## TypeScript with React.js

[Here is the official documentation about using TypeScript along with React.js](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).

In this section though, I'll focus on how to use TypeScript while using `create-react-app`, and how to set general Prop types like `className`, `ref`, `style`, among others.

[⬆️ Back to top](#table-of-contents)<br>

### TypeScript while using `create-react-app`

1. Create the React.js application by running `npx create-react-app project-name --scripts-version=react-scripts-ts`.

This will now also create the react app with all the configuration already set up and ready to go.

[Here is an example React.js app created by running the previous command.](https://github.com/rmolinamir/typescript-cheatsheet/tree/master/lib/react.js)

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

[⬆️ Back to top](#table-of-contents)<br>

<a id="setting-up-prop-types"></a>

## Setting up general React prop types

Like shown above, prop types are very encouraged in React.js. Some prop types however, may not be as obvious as others, so here's a small list of the most common prop types you might end up defining while programming your application:

[⬆️ Back to top](#table-of-contents)<br>

<a id="reference-prop-types"></a>

### References (`React.createRef()` or `useRef` API)

Passing down references is a bit tricky, because it **depends on which HTML element type you are referring to**.

React provides the reference objects types out of the box, imported from the **React** default export, from the `react` package (or as a named export as well). The name of the object type is `RefObject`, and it is essentially a [generic interface](#generic-types). Here's the definition:

```ts
interface React.RefObject<T>
```

As I said earlier, the **RefObject** must be accompanied by a **generic type declaration** (remember the angle brackets typing in the Generics section? e.g. `<T>`), that specifies **which type of HTML element tag the reference belongs to**.

The methodology is the same for every HTML element, but the generic type is respective to which HTML element we are referencing. Here's an example on how to apply the prop type to an SVG and to a button:

***SVG Element:***

```tsx
  interface ISVGProps {
    reference?: React.RefObject<SVGSVGElement>
    ...
  }

  const SVG = (props: ISVGProps) => {
    return (
      <svg
        ref={props.reference}
        className={classes.Triangle}
        {...props} />
        <path d='M0,0 10,10 20,0' />
      </svg>
    )
  }

  // ...

  <SVG reference={myReference} />
```

***Button Element:***

```tsx
  interface IButtonProps {
    reference?: React.RefObject<HTMLButtonElement>
  }

  const button = (props: IButtonProps) => {
    return (
      <button ref={props.reference} />
    )
  }

  // ...

  <Button reference={props.reference} />
```

[⬆️ Back to top](#table-of-contents)<br>

<a id="children-prop-types"></a>

### React Children

Declaring the children prop types might be a bit confusing as well. The children could be a JSX element, a string, numbers, etc. Fortunately and just like with references, the **React default export object** includes the children prop type declaration. It's called **`ReactNode`**. The `ReactNode` is [a type alias](#alias), defined as:

```ts
type React.ReactNode = string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | ... | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<...>)> | React.ReactNodeArray | React.ReactPortal | null | undefined
```

Pretty long, right? Good thing it exists. Here is an example of how we can use it, along with the reference prop type:

```tsx
  interface IButtonProps {
    reference?: React.RefObject<HTMLButtonElement>
    children?: React.ReactNode
  }

  const button = (props: IButtonProps) => {
    return (
      <button ref={props.reference}>{props.children}</button>
    )
  }

  // ...

  <Button reference={props.reference}>
    {props.children}
  </Button>
```

[⬆️ Back to top](#table-of-contents)<br>

<a id="css-prop-types"></a>

### CSS Properties and Classes Prop Types

Now, let's say we want to pass CSS classes and CSS style properties as React props down to our button component. We know that CSS classes, classNames in react, are of type `string`. However, CSS style properties are made of an entirely different type definition.

The type definition can be imported from the **React default export object** just like the previous type declarations. It's called **`CSSProperties`**, and it is defined as:

```ts
  interface CSSProperties extends CSS.Properties<string | number>
```

Here's how we can pass CSS classes and style properties down to our component:

```tsx
  interface IButtonProps {
    reference?: React.RefObject<HTMLButtonElement>
    children?: React.ReactNode
    // CSS
    style?: React.CSSProperties
    className?: string
  }

  const button = (props: IButtonProps) => {
    return (
      <button
        style={props.style}
        className={props.className}
        ref={props.reference}>
        {props.children}
      </button>
    )
  }

  // ...

  <Button
      className={classes.Button}
      style={{ backgroundColor: 'gold', color: '#FFF' }}
      reference={props.reference}>
    {props.children}
  </Button>
```

[⬆️ Back to top](#table-of-contents)<br>

<a id="general-prop-types"></a>

### General Prop Types (e.g. HTML 5 props, event listeners etc.)

Let's finish our button. We'll now create an interface declaring most of the possible HTML-5 properties a button can accept, such as mouse in and out and click event listeners, CSS classes, CSS styles, form properties (form, formaction, formenctype, etc.), value, among others.

***Button.tsx***

```tsx
  interface IButtonProps {
    reference?: React.RefObject<HTMLButtonElement>
    children?: React.ReactNode
    data: IButtonData
  }

  interface IButtonData {
    // HTML Props
    type?: string
    name?: string
    value?: string | number | string[] | undefined
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
    onMouseEnter?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    onMouseLeave?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    tabIndex?: number | undefined
    disabled?: boolean
    // HTML 5 Props
    autoFocus?: boolean
    form?: string
    formAction?: string
    formEncType?: string
    formMethod?: string
    formNoValidate?: boolean
    formTarget?: string
    // CSS
    style?: React.CSSProperties
    className?: string
  }

  const data: IButtonData = {...props.data}

  export const button = (props: IButtonProps) => {
    return (
      <button ref={props.reference} {...data}>
        {props.children}
      </button>
    )
  }
```

Let's now call our button component inside an **App.js** file then pass some props:

***App.js***

```js
  /// ...

  <Button reference={myButton}
    data={
      type: 'submit',
      className: classes.Button,
      style: { backgroundColor: 'gold', color: '#FFF' },
      tabIndex: -1,
      autoFocus,
      formEncType: 'multipart/form-data',
      onClick: onSubmitHandler
      // ...
    }>
    {props.children}
  </Button>
```

For more information about button HTML properties, [give this a read](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).

The methodology is essentially the same for other components. When in doubt about other HTML properties for any kind of element, you can always consult the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/).

[⬆️ Back to top](#table-of-contents)<br>

<a id="setting-up-react-references"></a>

## Setting up React References (React.createRef() or useRef API)

Setting up a React reference is similar to how we pass down references as props. Let's set up the reference using the `useRef` hook and the old `React.createRef()`.

[⬆️ Back to top](#table-of-contents)<br>

Let's start with the `useRef` API first:

<a id="typescript-useref"></a>

### TypeScript & useRef

The general idea is to define the reference with a generic HTML type while initializing them as `null`. This is to let TypeScript know what kind of variable will be stored. Here's an example using an input element:

```tsx
  const input = () => {
    // Initialize the reference as null while letting TypeScript know it's an input element.
    const myInput = useRef<HTMLInputElement>(null)

    return (
      <input ref={myInput} type='text' />
    );
  }
```

[⬆️ Back to top](#table-of-contents)<br>

<a id="typescript-reactcreateref"></a>

### TypeScript & React.createRef

Similarly to how we just created a reference using the `useRef` API, let's now use the `React.createRef` API to set up a reference by initializing it as null and declaring the HTML type:

```tsx
  /// ...

  class Input extends Component {
    constructor() {
      super()
      // Initialize the reference as null while letting TypeScript know it's an input element.
      this.myInput = React.createRef<HTMLInputElement>(null)
    }

    render() {
      return (
        <input ref={this.myInput} type='text' />
      )
    }
  }
```

[⬆️ Back to top](#table-of-contents)<br>

<a id="setting-up-event-references"></a>

## Setting up Event Handlers

> There are many types of events, some of which use other interfaces based on the main Event interface. Event itself contains the properties and methods which are common to all events.

There are many types of events. Because of this, when accessing an event, we must let TypeScript know what kind of event we are referring to. [Here is a list of all the possible events according to the official MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event#Introduction).

Let's create two event handlers, a `MouseEvent` handler that will prevent the default event, trigger an alert displaying our value, then reset our input's value on upon clicking a button, and finally, an `InputEvent` handler that will listen to our input element value changes. Let's expand our previous example:

```tsx
  /// ...
  
  const input = () => {
    const [inputValue, setInputValue] = React.useState('')

    // Initialize the reference as null while letting TypeScript know it's an input element.
    const myInput = useRef<HTMLInputElement>(null)

    /**
     * Our InputEvent listener.
     */
    const onChangeHandler = (event: React.InputEvent) => {
      const value = event.target.value
      console.log(myInput.current.value)
      setInputValue(value)
    }

    /**
     * Our MouseEvent listener.
     */
    const onClickHandler = (event: React.MouseEvent) => {
      event.preventDefault()
      alert(inputValue)
      setInputValue('')
    }

    return (
      <form>
        <input
          ref={myInput}
          value={inputValue}
          onChange={onChangeHandler}
          type='text' />
        <button onClick={onClickHandler}>
          Click me to reset the input field!
        </button>
      </form>
    );
  }
```

[⬆️ Back to top](#table-of-contents)<br>

## TypeScript and React Hooks

In this section, we wil cover how to use the React Hooks implemented in v16.8 in TypeScript. It will be assumed that the reader has at least basic knowledge of Hooks and generics. Generics are **heavily** used alongside Hooks, mostly to set the type(s) of the variables that will be returned from the hooks, e.g., a state variable returned from `useState`. In general, it is only necessary to type a hook if it returns a value, here' an example with `useState`:

Given `useState` , we can specify the type of the returning value by declaring it in TypeScript as follows:

```tsx
  const [state, setState] = useHook<T>;
```

The variable `state`, will be of type `T`. If we defined `T` as:

```tsx
  type T = number | null;
```

Then `state` and `setState` will be defined as:

```tsx
  const state: number | null;
  const setState: (value: number | null) => void;
```

Or, as the React does it by applying generics for scalability:

```tsx
  type Dispatch<A> = (value: A) => void;
  type SetStateAction<S> = S | ((prevState: S) => S);

  const state: number | null;
  const setState: Dispatch<SetStateAction<number | null>>;
```

If the above seems too complicated, don't worry about it too much. The reason they declare type aliases such as `Dispatch` is because they are used in *many* places, and as we have covered already, generics are great for that reason.

If your variable **does not** returns a hook, chances are you will still need to type its parameters, e.g. `useEffect`, or even *custom hooks*. We will talk about custom hooks at the end of this section since it is the most complicated topic due to the literal infinite hooks anyone could make, nevertheless, we will try to showcase the typing of custom hooks similar to how React types their own "default" hooks by taking a look at some of their own hooks as examples, with the intention of making them as general and broad as possible.

[⬆️ Back to top](#table-of-contents)<br>

### useState

Arguably the most basic hook. Because of this, let's discuss one more point about the basics of TypeScript and React Hooks. There are two ways to type a hook function that returns a value, assuming the hook is similar to `useState` where it accepts generic types:

1. By typing the returned value.
2. By typing the hook.

As shown above, `useState` will return an array with two values. The first value of the array will be our  that can be defined as:

By typing the returned value:

```tsx
const [state, setState]: [S: Dispatch<SetStateAction<S>>] = useState(initialState);
```

By typing the hook:

```tsx
const [state, setState] = useState<S>(initialState);
```

Both:

```tsx
const [state, setState]: [S: Dispatch<SetStateAction<S>>] = useState<S>(initialState);
```

Obviously, option number 3 is borderline overkill. Option number 2 is easily the most readable of the three and will be the most commonly typed expression you might come across. Let's have a look a more practical example of a hero slider component by building up its initial settings:

```tsx
  interface ISettings {
    slidingDuration: number
    isSmartSliding: boolean
    shouldAutoplay: boolean
    width: WidthProperty<string | number>
    height: HeightProperty<string | number>
  }

  /**
   * Initial settings for the slider.
   */
  const initialSettings: ISettings = {
    slidingDuration: 500,
    isSmartSliding: true,
    shouldAutoplay: true,
    autoplayDuration: 8000,
    width: '100%',
    height: '100%',
    ...props.settings
  }

  const [settings, setSettings] = React.useState<ISettings>(initialSettings)

  
  /**
   * Subscribes to any changes made to the settings, then re-sets them through `setSettings`.
   */
  React.useEffect(() => {
    setSettings({
      ...settings,
      ...props.settings as ISettings
    })
  }, [props.settings])
```

The example above is a snippet of [this component](https://github.com/rmolinamir/hero-slider/blob/master/src/Slider/HeroSlider.tsx). The slider is being configured with its initial default settings, or any other settings the developer may have passed down to it. Then, by setting up a subscription to any changes made to the `settings` property, we use the `useEffects` hook that will re-set the settings by executing the dispatched returned from `useState`.

Finally, as you may have already been able to tell; `useState` is defined by the React team as:

```tsx
  function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
```

[⬆️ Back to top](#table-of-contents)<br>

### useEffect

As stated above, the `useEffects` hook will execute whenever any changes are made to any variable(s) we subscribe to. Although are no typings in `useEffect`, it is worth nothing that TypeScript will function normally from within the scope of an `useEffect` hook, as regular. It is also worth noting that [there is quite a discussion going on about `useEffects` and how actions and dispatchers are handled, I recommend giving it a read, especially the linked comment](https://github.com/facebook/create-react-app/issues/6880#issuecomment-488158024).

In any case, let's take a look at how `useEffect` is defined:

```tsx
  function useEffect(effect: EffectCallback, deps?: DependencyList): void;

  type EffectCallback = () => (void | (() => void | undefined));
  type DependencyList = ReadonlyArray<any>;

  interface ReadonlyArray<T> {
    readonly length: number;
    toString(): string;
    toLocaleString(): string;
    indexOf(searchElement: T, fromIndex?: number): number;
    ...
  }
```

The point of showcasing how the React team defines their official hooks, is to give the reader an idea of how should custom hooks be typed and defined, and to be aware of the best coding practices of today.

It's worth nothing that `ReadonlyArray<T>` is actually defined by TypeScript, [and to quote the official documentation about this type definition](https://www.typescriptlang.org/docs/handbook/interfaces.html), **TypeScript comes with a `ReadonlyArray<T>` type that is the same as `Array<T>` with all mutating methods removed**.

[⬆️ Back to top](#table-of-contents)<br>

### useContext

Probably the most powerful hook when it comes to practicality alongside `useReducer`, `useContext` accepts a context returned from `React.createContext` and then returns the current value of that context. Having said that, you might already have guessed how `useContext` is defined, but let's give it a go anyways:

```tsx
  ...

  type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
  type Consumer<T> = ExoticComponent<ConsumerProps<T>>;

  interface Context<T> {
      Provider: Provider<T>;
      Consumer: Consumer<T>;
      displayName?: string;
  }

  function useContext<T>(context: Context<T>): T;
```

Generics all over the place! They provide us with a way to build any number of reusable, consistent, and well defined API.

Here is a basic example of `useContext`, which provides CSS styling to buttons that are within the context:

Let's start by defining the context created by React:

```tsx
  interface IContextProps {
    // CSS Classes
    className?: string
    classNames: IClassNamesByButton
    setGlobalClassName?: (className: string) => void
    setCustomClassname?: (classNameKey:string, className: string) => void
    // CSS Properties
    style?: React.CSSProperties
    setStyle?: (CSSstyles: React.CSSProperties) => void
    // React Children
    children?: React.ReactNode
  }

  /**
   * Button functionality and context.
   */
  const initialContext: IContextProps = {
    className: [classes.Button, classes.Disabled].join(' '),
    classNames: classNamesByButton,
    style: undefined,
  }

  const Context: React.Context<IContextProps> = React.createContext(initialContext)
```

Imported the context and other necessary dependencies, then using `useContext`:

```tsx
// ...
const useContext = { React }
import { Context, capitalizeString } from './context'
import classes from './Button.css'

interface IButtonProps extends IButtonData {
  button: string,
  reference?: React.RefObject<HTMLButtonElement>
  children?: React.ReactNode
  blockButton?: boolean
}

const ButtonComponent = (props: IButtonProps) => {
  const context = useContext(Context)
  const { className, classNames } = context

  const buttonClasses: (string | undefined)[] = [className]

  // Classes are picked depending on the `button` prop of type string
  const button: string | undefined = props.button ? capitalizeString(props.button) : undefined

  // Boolean to keep track of matched CSS classes, sort of like a hash.
  let bIsMatch = false

  // Selects a className from the imported context.
  if (button) {
    if (classNames[button]) {
      bIsMatch = true
      buttonClasses.push(classNames[button])
    }
  }

  // In case there were no matches, then set the button class equal to the Default class.
  if (!bIsMatch) {
    buttonClasses.push(classes.Default)
  }

  /**
   * We are omitting the blockButton, children, and reference
   * props from the data button properties.
   */
  const { blockButton, reference, children, ...data } = props

  /**
   * If blockButton is true, then apply the BlockButton class.
   */
  if (blockButton) {
    buttonClasses.push(classes.BlockButton)
  }

  /**
   * Build the button data object that will be passed down to the Button component.
   */
  const buttonData: IButtonData = ButtonData.setData( { ...data }, buttonClasses)

  /**
   * CSS Properties.
   */
  buttonData.style = context.style || props.style

  return (
    <Button
      reference={reference}
      data={buttonData}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent

```

Lets have a look at a more advanced example of `useContext` typing, that composes the multiple contexts argument of a higher-order component, which then passes down the composed contexts as prop to the wrapped component:

```tsx
  interface IContexts {
    [propName: string]: React.Context<any>
  }

  const withContexts = (
      WrappedComponent: React.JSXElementConstructor<any>,
      Contexts: IContexts,
    ) => {
    return (props: any) => {
      const contextKeys: string[] = Object.keys(Contexts)

      /**
       * Reducing the array of context keys, based on the `Contexts`
       * object, into another object with the returned context values
       * from `useContext`.
       */
      const usedContexts = contextKeys.reduce(
        (
          contexts: { [propName: string]: any },
          key: string
        ) => {
          return Object.assign(
            contexts,
            { [key]: useContext<any>(Contexts[key]) }
          )
        },
        {} // Initial value
      )

      const newProps: { [propName: string]: any } = {
        usedContexts,
        ...props
      }

      return (
        <WrappedComponent {...newProps} />
      );
    }
  }
```

[⬆️ Back to top](#table-of-contents)<br>

### useReducer

Perhaps the "primordial" hook, many hooks are based on how `useReducer` works, including some of the oficial React hooks such as `useState`. This, of course, thanks to Redux and its popularity. As you might know, `useReducer` is used mainly whenever you need to tackle at least one of the two following scenarios:

1. You're handling complex state logic, meaning multiple state values for example.
2. You find yourself in need of multiple action creators for a single state.

Or both! Whatever may be the case, using TypeScript with `useReducer` is not too hard, but it's certainly a bit tedious because there are many variables involved, assuming that at least the basics of `useReducer` are known. The good news is that every reducer will follow the same steps whenever typing it. Before going into details about how to define types for the reducer, let's have a look at how the React team defined `useReducer`:

```ts
  function useReducer<R extends Reducer<any, any>>(
    reducer: R,
    initialState: ReducerState<R>,
    initializer?: undefined
  ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
```

The first thing you might notice, is that it is very similar to `useState`. As mentioned above, `useState` is actually a very simplified version of `useReducer`, where you have a dispatcher and a state variable. The types `ReducerState` and `ReducerAction` are also defined as:

```ts
  type Reducer<S, A> = (prevState: S, action: A) => S;
  type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
  type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
```

The main take of this, is that reducers are functions that take a previous state as a first argument, and an action **(which includes the payload)** as a second argument. This action will let the programmer decide what to do in the reducer. Let's now compare how your typical `useReducer` looks like in JavaScript to a typical `useReducer` in TypeScript:

**JavaScript**:

```jsx
  const [state, dispatch] = React.useReducer(reducer, initialState)
```

**TypeScript**:

```tsx
  const [state, dispatch] = React.useReducer<React.Reducer<IInputState, IReducerAction>>(reducer, initialState)
```

That's it! That's all there is to typing an `useReducer`. However, let's have a look at a real `useReducer` example that handles an input's value, validity, and a touched state that becomes `true` when interacted with. This example will cover:

1. TypeScript `interface` definitions for the `state` (and `initialState`), `dispatch` (actions), and `reducer`.
2. A TypeScript `enum` definition to handle a switch statement and its cases inside the `reducer`, similar to reducer stores that are commonly used in Redux and their action types.

Having said all that, to sum up, any and every `useReducer` can be built by following these steps:

1. Define and declare all of the necessary `interface` and `enum` types for our reducer and its variables.
2. Define a reducer, and apply our defined types to it, the reducer will typically look like this:

```tsx
  const reducer = (state: IState, action: IReducerAction) => {
    const { handler, ...newState } = action
    switch (handler) {
      case EActionHandler.TYPE: // Enum member
        return {
          ...state,
          ...newState
        }
      default:
        throw new Error()
    }
  }
```

3. Lastly, define a `initialState` variable if needed, and a `useReducer` hook inside the React component, then it's good to go. The `useReducer` declaration will almost always look like this:

```tsx
  const [state, dispatch] = React.useReducer<React.Reducer<IState, IReducerAction>>(reducer, initialState)
```

Let's apply these steps to our example. Let's begin by typing the necessary `interface` structures for the following variables, and the reducer `enum` for the action types:

```tsx
  /**
   * REDUCER TYPE DEFINITIONS:
   */

  // `reducer` action types.
  enum EOnChangeHandler {
    VALUE,
    VALID,
    TOUCHED,
    STATE
  }

  // `state` and `initialState`.
  interface IInputState {
    identifier?: string
    value?: value
    validationMessage: string
    className?: string
    valueType?: string
    validation?: IInputValidation
    style?: React.CSSProperties
    placeholder?: string
    elementConfig?: IInputConfig
    required?: boolean
    valid?: boolean
    shouldValidate?: boolean
    touched?: boolean
  }

  // Interface for the `validation` property of `IInputState`.
  interface IInputValidation {
    customRules?: ICustomRulesValidation
    required?: boolean
    email?: boolean
    number?: boolean
    minLength?: number
    maxLength?: number
  }

  // For the `dispatch` actions/arguments.
  interface IReducerAction extends IInputState {
    handler: EOnChangeHandler
    valid: boolean
  }
```

Next, let's apply define a `reducer` function and apply typing. Here's where the `interface` and `enum` types come in:

```tsx
  const reducer = (state: IInputState, action: IReducerAction) => {
    const { handler, ...newState } = action
    switch (handler) {
      case EOnChangeHandler.STATE:
        return {
          ...state,
          ...newState
        }
      case EOnChangeHandler.TOUCHED:
        state.touched = newState.touched
        return state
      case EOnChangeHandler.VALID:
        state.valid = newState.valid
        return state
      case EOnChangeHandler.VALUE:
        state.value = newState.value
        return state
      default:
        throw new Error()
    }
  }
```

Let's now define our `initialState` variable, and our `useReducer` hook inside our input component, and then we'll plug everything up:

```tsx
  const MyInput = withContext(React.memo((props: IInputProps) => {
    /**
     * Input initial state, which dictates how it will behave (validation, validity, required, etc.).
     */
    const initialState: IInputState = {
      identifier: props.identifier || (`${displayName}_${props.placeholder || props.type || 'default'}`),
      value: props.value || '',
      validationMessage: '',
      valueType: props.valueType || props.placeholder && props.placeholder.toLowerCase(),
      placeholder: props.placeholder,
      validation: {
        required: props.required || false,
        email: props.type === 'email' && true,
        ...props.validation
      },
      required: props.required || false,
      shouldValidate: Boolean(props.validation) || false,
      valid: props.valid || false,
      touched: props.touched || false
    }
    const [state, dispatch] = React.useReducer<React.Reducer<IInputState, IReducerAction>>(reducer, initialState)
  }
```

Finally, let's plug everything up and see our reducer in action:

```tsx
  /**
   * REDUCER TYPE DEFINITIONS:
   */
  interface IInputState {
    identifier?: string
    value?: value
    validationMessage: string
    className?: string
    valueType?: string
    validation?: IInputValidation
    style?: React.CSSProperties
    placeholder?: string
    elementConfig?: IInputConfig
    required?: boolean
    valid?: boolean
    shouldValidate?: boolean
    touched?: boolean
  }

  // Interface for the `validation` property of `IInputState`
  interface IInputValidation {
    customRules?: ICustomRulesValidation
    required?: boolean
    email?: boolean
    number?: boolean
    minLength?: number
    maxLength?: number
  }

  interface IReducerAction extends IInputState {
    handler: EOnChangeHandler
    valid: boolean
  }

  enum EOnChangeHandler {
    VALUE,
    VALID,
    TOUCHED,
    STATE
  }

  const reducer = (state: IInputState, action: IReducerAction) => {
    const { handler, ...newState } = action
    switch (handler) {
      case EOnChangeHandler.STATE:
        return {
          ...state,
          ...newState
        }
      case EOnChangeHandler.TOUCHED:
        state.touched = newState.touched
        return state
      case EOnChangeHandler.VALID:
        state.valid = newState.valid
        return state
      case EOnChangeHandler.VALUE:
        state.value = newState.value
        return state
      default:
        throw new Error()
    }
  }

  const MyInput = React.memo((props: IInputProps) => {
    /**
     * Input initial state.
     */
    const initialState: IInputState = {
      identifier: props.identifier,
      value: props.value || '',
      validationMessage: '',
      valueType: props.valueType,
      placeholder: props.placeholder,
      validation: {
        required: props.required || false,
        email: props.type === 'email' && true,
        ...props.validation
      },
      required: props.required || false,
      shouldValidate: Boolean(props.validation) || false,
      valid: props.valid || false,
      touched: props.touched || false
    }

    const [state, dispatch] = React.useReducer<React.Reducer<IInputState, IReducerAction>>(reducer, initialState)
  
    /**
     * -------------------------------------
     * ----------REDUCER DISPATCHERS--------
     * -------------------------------------
     * `onChangeHandler` handles the input `onChange` event.
     * Evaluates the validity of the value respective to how it's set up through `checkValidity`.
     * Executes the `props.onChange` callback if it exists after evaluating the value and saving it in the state.
     */
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      const validation = checkValidity(value, state.validation, state.valueType)
      const action: IReducerAction = {
        valid: validation.status,
        validationMessage: validation.message || state.validationMessage,
        handler: EOnChangeHandler.STATE,
        value: value,
        touched: value && value !== '' ? true : false
      }
      dispatch({ ...action })
    }

    /**
     * Subscribe to any changes to the `state.value` and `state.valid` properties.
     * Execute `onChange` if any of them change, which will be handled
     * by the `reducer`.
     */
    React.useEffect(() => {
      if (props.onChange) {
        props.onChange(state.identifier, state.value, state.valid)
      }
    }, [state.value, state.valid])

    /**
     * The input element configuration props.
     */
    const inputProps: IInputElementProps = {
      ...
      className: inputClasses.join(' '),
      elementConfig: props.elementConfig,
      required: props.required || false,
      value: state.value,
      valid: state.valid,
      touched: state.touched,
      shouldValidate: state.shouldValidate,
      onChangeHandler: onChangeHandler,
      style: props.disabled ? { opacity: 0.5, pointerEvents: 'none' } : undefined
    }

    // A lot more code needed, but let's focus on the reducer.

    return (
      <Password {...inputProps} />
    )
  })
```

[⬆️ Back to top](#table-of-contents)<br>

### useCallback

Both `useCallback` and `useMemo` are commonly compared to `shouldComponentUpdate`. This is because both of the previously mentioned hooks return [*memoized*](https://en.wikipedia.org/wiki/Memoization) callbacks and values respectively. Memoization is basically caching the results of expensive functions in case they are executed again, and if so, then the cached values will be returned instead of executing the functions, which in turn will increase performance.

To summarize, they are commonly used to increase performance, which is the reason they're compared to `shouldComponentUpdate`, and, `useCallback` will be used for functions whereas `useMemo` will be used for values.

`useCallback` is defined as:

```ts
  function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T;
```

As you can see, it's very simply. Notice the following:

1. It is defined by `T`, which extends to a function that accepts any number of arguments of `any` type, and can return values of `any` types. Basically, any function.
2. As a second argument, it accepts a dependency list. This dependency list is nothing more than a read only array that the hook will subscribe to. If any of them change, the hook will execute. `DependencyList` is defined as:

```ts
  type DependencyList = ReadonlyArray<any>;
```

Remember that `ReadonlyArray` is a native TypeScript type. Moving on, using `useCallback` in TypeScript is very easy since it's configured to accept `any` types. Here's a simple yet shallow example of a real-life application of `useCallback`.

The following `useCallback` application will return a function that will be *throttled* in a later hook (which is actually featured in the custom hooks section). This function will execute whenever the user scrolls through the page, and will mix two colors depending on where the user is and depending on which RBG channels colors should be mixed. Finally, the new mixed color is set through the `setBackgroundColor` dispatcher.

```ts
  const onThrottledScrollHandler = useCallback(() => {
    const currentScrollHeight = window.pageYOffset;
    const [colorOne, colorTwo] = colors;
    const mixRatio = currentScrollHeight / scrollHeight;
    const mixedColor = mixColors(
      [colorOne, colorTwo],
      mixRatioNumberToTriple(mixRatio, mixRatioChannels)
    );
    setBackgroundColor(mixedColor);
  }, [backgroundColor, colors, scrollHeigh, mixRatioChannels]);

  const throttled = useThrottle(onThrottledScrollHandler, throttleLimit);
  ...
```

[⬆️ Back to top](#table-of-contents)<br>

### useMemo

Very similar to `useCallback`. As mentioned previously, `useMemo` is commonly compared to `shouldComponentUpdate`.

> This is because both of the previously mentioned hook return [*memoized*](https://en.wikipedia.org/wiki/Memoization) callbacks and values respectively. Memoization is basically caching the results of expensive functions in case they are executed again, and if so, then the cached values will be returned instead of executing the functions, which in turn will increase performance.

Instead of returning a function as `useCallback` does, `useMemo` will return a value. The React team defines `useMemo` as:

```ts
  function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
```

Same as every single hook shown before, generics are dominant. `useMemo` will take a *factory* or *create* function that returns a value of type `T` (think of React components, for example), and a dependency list to subscribe to. If any of the values in the list change, the hook will execute again. Otherwise it'll simply return the cached result!

`useMemo` is a very, very useful hook. It can be implemented in many, many places within any application to improve performances. Here are some very simple examples of `useMemo` used inside [this hero-slider component](https://github.com/rmolinamir/hero-slider/blob/master/src/Slider/HeroSlider.tsx).

There are two worker functions declared as `getChildren` and `setSlides` that can potentially be performance expensive. These functions will filter the `React.Children` props, and filter them to set up the slides of the hero slider according to the previously set settings. By using `useMemo`, we can memoize the initial returned values, so that every time these functions are executed in the future, the memoized values will be returned instead, and thus increasing performance.

```tsx
  const heroSlider = React.memo((props: ISliderProps) => {
    ...

    /**
     * `getChildren` will categorize the `props.children` elements array into the `children` object.
     */
    const getChildren = (): IChildren => {
      const children: IChildren = {
        slidesArray: [],
        navbarsArray: [],
        autoplayButtonsArray: [],
        othersArray: [],
        navDescriptions: []
      }
      React.Children.toArray(props.children).forEach(child => {
        if (typeof child.type === 'function' && React.isValidElement(child)) {
          // tslint:disable-next-line:variable-name
          const RFC_Child: React.FunctionComponent = child.type as React.FunctionComponent
          const displayName = RFC_Child.displayName
          switch (displayName) {
            case 'hero-slider/slide':
              const props = child.props as ISlideProps
              children.navDescriptions.push(props.navDescription)
              return children.slidesArray.push(child)
            case 'hero-slider/nav':
            case 'hero-slider/menu-nav':
              return children.navbarsArray.push(child)
            case 'hero-slider/autoplay-button':
              return children.autoplayButtonsArray.push(child)
            default:
              return children.othersArray.push(child)
          }
        }
        return children.othersArray.push(child)
      })
      return children
    }

    /**
     * `setSlides` clones the necessary properties for each slide to work.
     */
    const setSlides = () => {
      return React.Children.map(slidesArray, (child, index) => {
        const currentSlide = index + 1
        return (
          React.cloneElement(
            child as React.ReactElement<ISlideProps>,
            {
              isActive: activeSlide === currentSlide,
              isDoneSliding: isDoneSliding,
              slidingAnimation: settings.slidingAnimation
            }
          )
        )
      })
    }

    /**
     * Sets up initial slides array, `useMemo` is used for performance optimization since a loop is
     * ran inside `getChildren`.
     */
    const children: IChildren = React.useMemo(() => {
      return getChildren()
    }, [])

    /**
     * Performance optimization to avoid re-rendering after mouse over captures.
     * Only updates if `activeSlide` or `isDoneSliding` change.
     */
    const slides = React.useMemo(() => {
      return children.slidesArray && setSlides()
    }, [activeSlide, isDoneSliding])

    return (
      <div
        {...}
      >
        {slides}
        {...}
      </div>
    );
  }
```

[⬆️ Back to top](#table-of-contents)<br>

### useRef

`useRef` is a hook commonly used to set up a reference to a DOM node. Unfortunately, most articles about this hook touch upon using `useRef` *only* to setup references to DOM nodes, as just previously mentioned. In reality, `useRef` sets a reference to a mutable object which is then paired to a DOM node, but, there are *a lot* of equally or even more useful applications.

Before talking about different `useRef` applications other than DOM nodes, it is worth mentioning that `useRef` behaves very similarly to pointers. [In computer science, a *pointer* is defined as](https://en.wikipedia.org/wiki/Pointer_(computer_programming)):

> A pointer references a location in memory, and obtaining the value stored at that location is known as dereferencing the pointer. As an analogy, a page number in a book's index could be considered a pointer to the corresponding page; dereferencing such a pointer would be done by flipping to the page with the given page number and reading the text found on that page.

The most obvious comparison would be C++ pointers. With the references returned by `useRef` we can achieve very similar results, and instead of setting up references for DOM nodes, we can set up references to handlers within a component, for example.

`useRef` is defined by the React team as:

```ts
  function useRef<T>(initialValue: T): MutableRefObject<T>;
```

Very, very straightforward, but what's important here is to take a look at the `MutableRefObject` interface:

```tsx
  interface MutableRefObject<T> {
    current: T;
  }
```

It is quite literally just an object defined as `{ current: T }`. Where `T`, can be anything. The React team has a very good explanation as to how `useRef` works:

> `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

As mentioned above at the introduction of this section, and to emphasize what the React team has to say about `useRef`, we can use this hook to set mutable values that will persist until the component is unmounted.

Instead of providing a generic and simple example about using `useRef` to set a reference to a DOM node that you could find anywhere, let's look at relatively advanced yet simple applications of `useRef`, by using the previously referenced [hero-slider component](https://github.com/rmolinamir/hero-slider/blob/master/src/Slider/HeroSlider.tsx) in the `useMemo` section as a guide.

In the `hero-slider` component, a couple features are available that use `useRef` to their advantage:

The first feature are watchers that help both the autoplay instance of the hero-slider and the next, previous or specific slide setters to dictate if they should change the slide, or wait until the slider is actually done sliding, and to also make them self-aware of which slide is currently active.

We will use two references to achieve this. `activeSlideWatcher` and `isDoneSlidingWatcher` are a mutable objects that will persist for the full lifetime of the hero-slider component.

- `isDoneSlidingWatcher` will serve as a pointer in case a `nextSlide` or any other event is called from an upper scope, like the autoplay instance.
- `activeSlideWatcher` serves as a pointer to the `activeSlide` so that the auto play instance won't be out of sync with the current active slide. It is updated during the `useEffect` hooks subscribed to the `activeSlide` state variable whenever the user changes slide:

```tsx
  ...

  const isDoneSlidingWatcher = React.useRef<boolean>(true)
  const activeSlideWatcher = React.useRef<number>(activeSlide)

  const autoplayInstanceRef = React.useRef((React.useMemo(() => {
    return new IntervalTimer(autoplay, settings.autoplayDuration + slidingTimeoutDuration)
  }, [])))
  const autoplayInstance = autoplayInstanceRef.current

  /**
   * Update the respective watchers' current values.
   */
  React.useEffect(() => {
    activeSlideWatcher.current = activeSlide
  }, [activeSlide])
  React.useEffect(() => {
    isDoneSlidingWatcher.current = isDoneSliding
  }, [isDoneSliding])

  ...

  /**
   * `autoplay` is the callback sent to the autoplay instance.
   */
  const autoplay = (): void => {
    const nextSlide = getNextSlide(activeSlideWatcher.current)
    if (settings.isSmartSliding) {
      smartAnimations(nextSlide)
    }
    changeSlide(getNextSlide(activeSlideWatcher.current))
  }

  /**
   * `changeSlide` sets a new slide then executes `onSlidingHandler` to handle the smooth transition and
   * set `isDoneSlidingWatcher.current` (a pointer) as true. While `isDoneSliding` is true, the
   * slides won't change.
   * The `onBeforeChange` event is executed here.
   */
  const changeSlide = (nextSlide: number): void => {
    if (isDoneSlidingWatcher.current) {
      if (props.onBeforeChange) {
        props.onBeforeChange(activeSlideWatcher.current, nextSlide)
      }
      setActiveSlide(nextSlide)
      onSlidingHandler(nextSlide)
    }
  }

  ...
```

There is another incredible use-case scenario for `useRef`. By using a `useEffect` hook to work similarly to the `componentDidMount` lifecycle method by passing an empty dependencies list, we can run an initial setup for the hero-slider.

In this initial setup, by passing unset `useRef` mutable objects as props down to the hero-slider component, we can set handlers from **within** our component so that these handlers can be used from an upper scope, as next or previous buttons for example.

```tsx
  ...

  /**
   * After mounting, akin to `componentDidMount`.
   */
  React.useEffect(() => {
    activeSlideWatcher.current = activeSlide
    /**
     * Turn on autoplay if `props.shouldAutoplay` is true.
     */
    if (settings.shouldAutoplay) {
      autoplayInstance.start()
    }
    /**
     * Sets up the `nextSlide` and `previousSlide` reference object if they exist.
     */
    if (props.nextSlide) {
      props.nextSlide.current = setNextSlide
    }
    if (props.previousSlide) {
      props.previousSlide.current = setPreviousSlide
    }
    return () => {
      ...
      autoplayInstance.stop()
    }
  }, [])

  ...
```

[Here's a link showcasing this particular example](https://www.robertmolina.dev/codelab/hero-slider#buttons). Notice how the initial `activeSlideWatcher.current` variable is also set up in here, which will change in the future whenever a slide changes, and the autoplay instance is started here as well (which is yet another reference).

[⬆️ Back to top](#table-of-contents)<br>

### useImperativeHandle

`useImperativeHandle` is **very rarely** used. This hook exposes the instantiated custom value of a React reference to parent components ([more details in `useRef`](#useref)). This means that you can setup a React reference object, customize it in any way possible, e.g. adding methods, then forward it with `React.forwardRef`. If a parent component then creates a reference then "hooks" it to the child component, the parent component will have access to the reference.

Here's what the React team has to say about this hook:

> `useImperativeHandle` customizes the instance value that is exposed to parent components when using:
    - `ref`. As always, imperative code using refs should be avoided in most cases.
    - `useImperativeHandle` should be used with `React.forwardRef`.

`useImperativeHandle` is defined by the React team as:

```tsx
  function useImperativeHandle<T, R extends T>(
    ref: Ref<T>|undefined,
    init: () => R,
    deps?: DependencyList
  ): void;
```

Where:

1. `ref` is the React `RefObject<T>`.
2. `init` the common hook initialize function as used in other hooks as well.
3. `deps` is the dependency list of variables used in `init` that the hook will subscribe to.

[Here's an example that uses the react hooks example about `useImperativeHandle` as a guideline](https://reactjs.org/docs/hooks-reference.html#useimperativehandle).

First, let's define a component that uses `useImperativeHandle` then apply `forwardRef` on it to expose the `ref` object:

```tsx
  interface IInputRefObject {
    exposedFocusMethod (): void
  }

  interface IInputProps {
    [propName: string]: any;
  }

  const Input: React.RefForwardingComponent<IInputRefObject, IInputProps> = (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => ({
      exposedFocusMethod: () => {
        if (inputRef.current) {
          inputRef.current.focus();
          /// Possibly more logic
        };
      }
    }));
    return <input ref={inputRef} {...props} />;
  }
  
  const ImperativeInput = forwardRef(Input);
  export default ImperativeInput;
```

Now let's use it in a parent component, and access `ref`:

```tsx
  interface IAutofocusProps {
    shouldFocusOnMount: boolean;
    [propName: string]: any;
  }

  const AutofocusedInput = (props: IAutofocusProps) => {
    const { shouldFocusOnMount = true, ...rest } = props;
    const myInputRef = useRef<IInputRefObject>(null);

    useEffect(() => {
      if (shouldFocusOnMount && myInputRef.current) {
        myInputRef.current.exposedFocusMethod();
      }
    }, [shouldFocusOnMount]);

    return <ImperativeInput ref={myInputRef} {...rest} />
  }
```

Notice how the `AutofocusedInput` component focuses on functionality with almost no declarations. The `focus` propety of the `ImperativeInput` component's DOM node is not directly executed inside `AutofocusedInput`, instead we are executing the exposed method declared as `exposedFocusMethod`, which then executes `focus`. This is why the React team named this hook as `useImperativeHandle`.

> In computer science, imperative programming [is a programming paradigm that uses statements that change a program's state](https://en.wikipedia.org/wiki/Imperative_programming).

[⬆️ Back to top](#table-of-contents)<br>

### useLayoutEffect

`useLayoutEffect` is very similar to `useEffect`, the difference is that the initial execution of `useLayoutEffect` is a bit delayed, specifically fired in [the same phase as componentDidMount and componentDidUpdate](https://reactjs.org/docs/hooks-reference.html#useimperativehandle).

It is worth noting that this hook is very rarely used. It is necessary for very specific use-case scenarios where the program needs to wait for the initial rendering.

One scenario where the program might need to wait for the initial rendering, is when there are DOM calculations that must be ran before displaying the components. For example, think of a self-aware popover tooltip that renders towards the center of the page depending on where it's placed at.

Here's how the React team defines `useLayoutEffect` (which is literally identical to the definition of `useEffect`), and what do they have to say about it:

```tsx
  function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
```

> The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations. **Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.**
Prefer the standard `useEffect` when possible to avoid blocking visual updates.
If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as `componentDidMount` and `componentDidUpdate`.

[⬆️ Back to top](#table-of-contents)<br>

### useDebugValue

[`useDebugValue` can be used to display a label for custom hooks in React DevTools.](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)

As this is exclusively used for custom hooks, it's recommended by the React team to only use it for hooks that are part of shared libraries.

`useDebugValue` is defined as:

```tsx
  function useDebugValue<T>(value: T, format?: (value: T) => any): void;
```

The `value` argument is what will be displayed next to its respective label in the *Elements* tab of the React DevTools.

Sometimes though, formatting values might be an expensive operation as noted in the official documentation. For this reason the second parameter `format` exists, where it essentially allows you to access formatting methods, such as:

```tsx
useDebugValue(date, date => date.toDateString());
```

Here's an example showcased in the official documentation about `useDebugValue`:

```tsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```

The label shown in the React DevTools will be the name of the function without the "use" prefix of hooks. The example above would result in: **"FriendStatus: Online"**.

[⬆️ Back to top](#table-of-contents)<br>

### Custom Hooks

As shown in `useDebugValue`, hooks are expected to be declared with variable names prefixed by "use". In this section, the most important factors to keep in mind when creating a custom hook will be emphasized, however, [definitely check the official documentation for more general information](https://reactjs.org/docs/hooks-custom.html).

> Custom Hooks offer the flexibility of sharing logic that wasn’t possible in React components before. You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. What’s more, you can build Hooks that are just as easy to use as React’s built-in features.

There is literally an infinite amount of different custom hooks we can create. For this reason, it is extremely important to be consistent with them. Any custom hooks should be developed in a way that is consistent with the new functional paradigm imposed by the React team as shown in the prepacked React hooks such as `useState`, and `useEffect`.

Here are three pointers worth quoting from the React official documentation about custom hooks:

> **Do I have to name my custom Hooks starting with “use”?** Please do. This convention is very important. Without it, we wouldn’t be able to automatically check for violations of rules of Hooks because we couldn’t tell if a certain function contains calls to Hooks inside of it.
> **Do two components using the same Hook share state?** No. Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

And finaly, paraphrasing the third point:

> **How does a custom Hook get isolated state?** Each call to a Hook gets isolated state. Because we call a custom hook directly, from React’s point of view our component just calls any hooks that might be used inside the custom hook, such as `useState` and `useEffect`. And as we learned earlier, we can call `useState` and `useEffect` many times in one component, and they will be completely independent.

To summarize, be consistent. Do you want to declare a state that involves additional functionality not offered by `useState`? Make sure to return a value, and possibly a dispatcher too. Do you want to handle side-effects based on `useEffect`? Pass a dependency list, or even just a single dispatcher [to pass a minimal amount of dependencies as mentioned here by Dan Abramov](https://github.com/facebook/create-react-app/issues/6880#issuecomment-488158024).

Let's now do our first two custom hooks!

First, let's begin by developing a hook that can throttle **any** callback, within a specified and limited (minimum) amount of time between function calls. Basically, a custom hook used to throttle function callbacks. It will be declared as `useThrottled` and it will accept a `callback` as its first parameter, and a `limit` as its second parameter.

- `callback` can and will be *any* callback that is passed to the hook, and it will **only be executed if the amount of time between the current and last function call is higher than `limit`**.
- `limit` will be the minimum time required to wait between callbacks.

```tsx
  import React from "react";
  const { useState } = React;

  export const useThrottle = (
    callback: () => void,
    limit: number
  ): (() => void) => {
    const [callbackTimeoutId, setCallbackTimeoutId] = useState<number>();
    const [lastCallbackRunDate, setLastCallbackRunDate] = useState<number>();
    return () => {
      if (!lastCallbackRunDate) {
        setLastCallbackRunDate(Date.now());
      } else {
        clearTimeout(Number(callbackTimeoutId));
        setCallbackTimeoutId(
          setTimeout(() => {
            if (Date.now() - lastCallbackRunDate >= limit) {
              callback();
              setLastCallbackRunDate(Date.now());
            }
          }, limit - (Date.now() - lastCallbackRunDate))
        );
      }
    };
  };
```

The `callback` parameter will **only** execute if the difference between the current date and the last time the callback fire is higher than the throttle limit.

Next, let's develop a hook that handles the scroll event callbacks while also throttling them. We will call this hook `useScrollCallback`:

```tsx
  import React from "react";

  // Dependencies
  import { useThrottle } from "../useThrottle";
  const { useState, useCallback, useEffect } = React;

  export const useScrollCallback = (
    minimumOffset: number = 50, // Minimum height offset to actually execute the callback
    throttleLimit: number = 500, // Minimum time between calls in milliseconds
    callback: (scrollPosition: number) => void
  ) => {
    const [scrollPosition, setScrollPosition] = useState<number>(
      window.pageYOffset
    );

    const onThrottledScrollHandler = useCallback(() => {
      const currentScrollHeight = window.pageYOffset;
      setScrollPosition(currentScrollHeight);
      if (currentScrollHeight > minimumOffset) callback(scrollPosition);
    }, [minimumOffset, callback, scrollPosition]);

    const throttled = useThrottle(onThrottledScrollHandler, throttleLimit);

    useEffect(() => {
      window.addEventListener("scroll", throttled);

      // Return clause.
      return () => window.removeEventListener("scroll", throttled);
    }, [throttled]);
  };
```

Throttling is a very important concept to keep in mind. Even more so in this case when using the scroll event listener because of how often it fires. By throttling it, we are increasing performance significantly. Let's now create our `App` container to put everything together:

```tsx
  // Libraries
  import * as React from "react";
  import { render } from "react-dom";

  // Global styles
  import "./styles.css";

  // Hooks
  import { useScrollCallback } from "./hooks/useOnScrollCallback";

  // Dependencies
  import randomColor from "randomcolor";
  const minimumOffset: number = 0; // Minimum height offset to actually execute the callback
  const throttleLimit: number = 500; // Minimum time between calls in milliseconds

  function App() {
    /**
    * We're randomly changing the color of the body when scrolling!
    */
    useScrollCallback(minimumOffset, throttleLimit, (scrollPosition: number) => {
      console.log(`I'm currently scrolling at ${scrollPosition}!`);
      document.body.style.backgroundColor = randomColor({
        luminosity: "light",
        format: "hsla" // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
      });
    });
    return (
      <div className="App">
        <div className="fixed">
          <h1>
            Open the console and scroll the page to see the throttling in action!
          </h1>
          <h1>
            Feel free to experiment by changing the throttle limit to see a change in the frequency of the callbacks.
          </h1>
        </div>
        <div className="empty-space" />
      </div>
    );
  }

  const rootElement = document.getElementById("root");
  render(<App />, rootElement);
```

And that's it! A couple of things are worth pointing out:

- Did you notice how `useThrottled` returns a function similar to `useCallback`, but with extra functionality, yet still following the new paradigm?
- Did you also notice how `useScrollCallback` handles side-effects only, similar to `useEffect` without a dependency list?

The key to creating custom hooks is to keep them as consistent as possible with the new functional mindset the React team is pushing, keep that in mind!

Here's the example hosted in CodeSandbox of the hooks shown above, with a few more functionalities to play around with them. Feel free to fork it as well.

[![Custom Hooks example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/custom-hooks-example-68n7l?fontsize=14)  

[⬆️ Back to top](#table-of-contents)<br>

---

## Feedback

This repository. Submit a PR with any change or addition you'd like to see!

And thank you very much for taking the time to do so 💖

[⬆️ Back to top](#table-of-contents)<br>

---

## Collaborators

This is a list of all the awesome collaborators (present or past) and contributors of the TypeScript Cheatsheet:

- [evdama](https://github.com/evdama)
- [KevinKelbie](https://www.reddit.com/user/KevinKelbie)
- [Ical89](https://github.com/Ical89)
- [disco0](https://github.com/disco0)
- [kberg](https://github.com/kberg)
- [Svish](https://github.com/Svish)
- [MaxmaxmaximusAWS](https://github.com/MaxmaxmaximusAWS)
- [nfedyashev](https://github.com/nfedyashev)

Make sure to buy them a beer if you ever meet one of them 😊

[⬆️ Back to top](#table-of-contents)<br>

---

## Contribute

Contributions are always welcome! Just like before, all you would have to do is submit a PR and I will be reviewing it shortly. If you have any doubts you can let me know at:

- [u/rmolinamir](https://www.reddit.com/user/rmolinamir)
- [rmolinamir@gmail.com](mailto:rmolinamir@gmail.com)

[⬆️ Back to top](#table-of-contents)<br>
