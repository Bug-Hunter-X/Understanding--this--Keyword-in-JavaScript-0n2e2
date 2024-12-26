function myFunc() {
  console.log(this);
}

// Using bind to explicitly set 'this'
const boundMyFunc = myFunc.bind({ name: 'Bound Object' });

// Using an arrow function (lexical 'this')
const arrowMyFunc = () => {
  console.log(this);
};

const obj = {
  myMethod: function() {
    console.log(this);  // this refers to obj
  }
};

myFunc(); // this will refer to the global object
boundMyFunc(); // this will refer to { name: 'Bound Object' }
arrowMyFunc(); // this will refer to the global object
obj.myMethod(); // this will refer to obj