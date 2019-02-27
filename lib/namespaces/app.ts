/// <reference path="./src/circleMath.ts" />
/// <reference path="./src/rectangleMath.ts" />

import Circle = MyMath.Circle;
import calculateRectangle = MyMath.Rectangle.calculateRectangle;

console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log(calculateRectangle(25, 25));