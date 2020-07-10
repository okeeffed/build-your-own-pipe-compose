const { add, addTwo, addTen, addTenMillion, addThirtySix } = require('./index');

// random numbers to illustrate our point
const numbers = [1, 2, 5, 7, 8, 11];

describe('curried add function', () => {
  test('expect 1 + 2 = 3', () => {
    expect(add(1)(2)).toEqual(3);
  });

  test('expects addTwo to add two to any number', () => {
    for (const number of numbers) {
      expect(addTwo(number)).toEqual(number + 2);
    }
  });

  test('expects addTen to add ten to any number', () => {
    for (const number of numbers) {
      expect(addTen(number)).toEqual(number + 10);
    }
  });

  test('expects addTwo to add ten million to any number', () => {
    for (const number of numbers) {
      expect(addTenMillion(number)).toEqual(number + 10_000_000);
    }
  });

  test('expects addThirtySix to add 36 to each number', () => {
    for (const number of numbers) {
      expect(addThirtySix(number)).toEqual(number + 36);
    }
  });
});
