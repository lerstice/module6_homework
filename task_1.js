// Задание 1.
// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.


function getInfoAboutElements(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  let nullElement = 0;
  let notNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      if (arr[i] % 2 === 0 & arr[i] !== 0) {
        sumEven += 1
      } else {
        if (arr[i] % 2 !== 0) {
          sumOdd += 1
        } else {
          if (arr[i] === 0) {
            nullElement = 'Массив содержит нулевой элемент'
          }
        }
        }
      } else {
        if (typeof arr[i] !== 'number') {
          notNumber = 'Массив содержит элементы не являющиеся числами'
        }
      }
    }
  console.log(`Массив содержит ${sumEven} чётных и ${sumOdd} нечётных числа`);
  if (nullElement !== 0) {
    console.log(nullElement)
  };
  if (notNumber !== 0) {
    console.log(notNumber)
  };
};

let arr = [1, 4, 5, 7, 2, 0, null];

getInfoAboutElements(arr);