function myFunc() {
  console.log(this);
}

myFunc(); // this will refer to the global object (window in browsers, undefined in strict mode)

const obj = {
  myMethod: myFunc
};

obj.myMethod(); // this will refer to the object obj