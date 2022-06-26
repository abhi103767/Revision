// What is Prototypes 
// Whenever we create anything in Javascript (object,function) 
// javascript automitcally attaches that thing with some properties
// and method

let arr = ['amam']

// array have Array.prototypes
// object have Object.prototypes
// object.protypes is null
console.log(arr.__proto__);
console.log(Array.prototype)
console.log(arr.__proto__.__proto__);
console.log(Object.prototype);
console.log(arr.__proto__.__proto__.__proto__)

// this is called prototype chain

