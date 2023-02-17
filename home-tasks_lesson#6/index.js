/*
Разработать «чистую» функцию treeSum, которая получает массив, элементы которого могут быть числами или снова массивами, и так до любого уровня.
Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней.
При написании функции не описывать каких-либо вложенных в неё функций.
Проверить работу функции можно на следующем массиве (сумма 50):
[ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ]
*/

const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

function treeSum(arr) {
   return arr.reduce(
      (sum, n) =>
         sum += (typeof n == "number" ? n : treeSum(n)), 0
   );
};

console.log(treeSum(arr));