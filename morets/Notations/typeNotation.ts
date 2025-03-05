let apples: number = 5; // only number can be assigned to apples
let speed: string = "fast";
let hasName: boolean = true;
let nothungMuch: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, true];

// classes

class Car {}

let car: Car = new Car();

// object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  // notation   (i: number)=> void
  console.log(i);
};

// when to use anotations
// 1) Function that returns the "any" type

// note:- variable of type any is bad

const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

/*
note:-
type interface is ability of ts that identifies the type of vatiable automatically
for that the declariation and initiliazation of variable should done on same line 
*/

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
