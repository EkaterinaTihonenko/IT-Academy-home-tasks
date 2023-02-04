const { indexOf, array, max, xor, chunk } = require('./index4.js');

describe("indexOf", () => {
   test("Returns the search result", () => {
      expect(indexOf([1, 3])).toBeTruthy();
   });
});

describe("Reverse", () => {
   test("Returns an array in the opposite direction", () => {
      expect(array([3, 2, 1])).toBeTruthy();
   });
});

describe("Max", () => {
   test("Returns the max number", () => {
      expect(max([4, 2, 8, 6])).toBe(8);
   });
});

describe("Xor", () => {
   test("Returns the created array of unique values", () => {
      expect(xor([1, 3])).toBeTruthy();
   });
});

describe("Chunk", () => {
   test("Returns the created arrays of elements", () => {
      expect(chunk([['a', 'b'], ['c', 'd']])).toBeTruthy();
   });
});

