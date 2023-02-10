const indexOf = (arr, target) => {
   let index = [];
   arr.forEach((j, i) => {
      if (j === target) index.push(i);
   });

   return index;
};

console.log(indexOf([1, 2, 1, 2], 2));

const array = (arr) => {
   let result = [];
   for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
   };

   return result;
};

console.log(array([1, 2, 3]));

const max = (arr) => {
   let result = arr[0] || null;
   let number = null;
   for (let i = 0; i < arr.length; i++) {
      number = arr[i];
      result = Math.max(result, number);
   };

   return result;
};

console.log(max([4, 2, 8, 6]));

const xor = (arr1, arr2) => {
   arr1 = arr1.concat(arr2);
   return arr1.filter((el, id) => arr1.indexOf(id) === el);
};

console.log(xor([2, 1], [2, 3]));

const chunk = (arr, number) => {
   let result = [];
   for (let i = 0; i < Math.ceil(arr.length / number); i++) {
      result[i] = arr.slice((i * number), (i * number) + number);
   };

   return result;
};

console.log(chunk(['a', 'b', 'c', 'd'], 2));

module.exports = {
   indexOf,
   array,
   max,
   xor,
   chunk,
};