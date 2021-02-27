// Чётные числа
// Проверка на четность

// function isEven (num) {
//   return num % 2 === 0;
// }
// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// Тесты
// Объявлена функция getEvenNumbers(start, end).
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4].
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10].
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12].
// Вызов функции getEvenNumbers(8, 8) возвращает [8].
// Вызов функции getEvenNumbers(7, 7) возвращает [].
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив.


// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки


    
//     // Пиши код выше этой строки
//   }
function getEvenNumbers(start) {
    // Пиши код ниже этой строки

const newArr = []
for (let elem of start) {
	if(elem % 2 === 0) {
    	newArr.push(elem)
    }
}
return newArr
    
    // Пиши код выше этой строки
  }

  console.log(getEvenNumbers(5));