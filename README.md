# Understanding JavaScript's 'this' Keyword

This repository demonstrates a common source of confusion in JavaScript: the `this` keyword. The value of `this` is determined by how a function is called, not where it's defined.  This can lead to unexpected behavior if not properly understood.

## Bug Description

The `bug.js` file contains a function `myFunc` that logs the value of `this`. When called directly, `this` refers to the global object (window in browsers, undefined in strict mode). However, when called as a method of an object, `this` refers to the object itself.  This difference can be unexpected and lead to errors.

## Solution

The `bugSolution.js` file offers a few ways to address this issue using `bind()`, arrow functions, or explicitly setting the context.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment (e.g., browser's console, Node.js).
3. Run the code and observe the output to understand the differences.