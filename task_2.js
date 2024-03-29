// Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.


function isSimple(N) {
  let result = `${N} - простое число.`
  if (N === 0 || N === 1 && !isNaN(N)) {
    result = `${N} не относится к простым числам.`;
  } else
  if (N < 1000) {
    for (i = 2; i < N; i++) {
      if (N % i === 0) {
        result = `${N} не относится к простым числам.`;  
      }
    }
  } else {
    result = `Данные не верны.`;
  }
  console.log(result);
};

isSimple(0);
isSimple(1);
isSimple(11);
isSimple(20);
isSimple(NaN);