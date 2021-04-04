// Задание 3.
// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.


function funcSum(a) {
  let sum = 0;
  return function(b) {
    sum = a + b;
    return sum;
  };
};

let a = 3;
let b = 4;

const result = funcSum(a);

console.log(result(b));