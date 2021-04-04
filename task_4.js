// Задание 4.
// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).


function numberOutput(a, b) {
  if (a < b) {
    let i = a;
    let intervalId = setInterval(function() {
      console.log(i);
      if (i === b) {
        clearInterval(intervalId);
      }
      i++;
    }, 1000);
  } else if (a > b) {
    let j = b;
    let intervalId = setInterval(function() {
      console.log(j);
      if (j === a) {
        clearInterval(intervalId);
      }
      j++;
    }, 1000);
  } else {
    console.log('Ошибка.');
  }
}

numberOutput(4, 8);