const add = (x) => (y) => x + y;

// partially applied functions
const addTwo = add(2);
const addTen = add(10);
// using the underscores for readability
const addTenMillion = add(10_000_000);

// our pipe function
const pipe = (...fns) => (data) => fns.reduce((acc, fn) => fn(acc), data);
const compose = (...fns) => (data) =>
  fns.reduceRight((acc, fn) => fn(acc), data);

// calling the curried function straight away
const addTwelve = pipe(addTwo, addTen);
const addTwentyTwo = pipe(addTen, addTwelve);
const addThirtySix = pipe(addTwelve, addTwentyTwo, addTwo);

const lowercase = (str) => str.toLowerCase();
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const removeFirstTwoChars = (str) => str.slice(2);
const addPrefix = (str) => 'pre-' + str;

const strPipe = pipe(lowercase, removeFirstTwoChars, capitalize, addPrefix);
const strCompose = compose(
  lowercase,
  removeFirstTwoChars,
  capitalize,
  addPrefix,
);

console.log(strPipe('Hello, World!'));
console.log(strCompose('Hello, World!'));

module.exports = {
  add,
  addTwo,
  addTen,
  addTenMillion,
  addThirtySix,
};
