// Задание 5.
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.


const toDegree = (x, n) => {
  if (Number.isInteger(x) && Number.isInteger(n) && x > 0 && n > 0) {
    console.log(Math.pow(x, n));
  } else {
    console.log('Введены не натуральные числа.')
  }
}

toDegree(2, 3);