// Фильтрация массива чисел
// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// Тесты
// Объявлена функция filterArray(numbers, value).
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив.
// В цикле for использовался метод push.

function filterArray(numbers, value) {
  // Пиши код ниже этой строки

let newArray = [];
for (let i = 0; i < numbers.length; i++) 
{if (numbers[i] > value) {            
  newArray.push(numbers[i]);}    
}   
 return newArray; 
} 


  // Пиши код выше этой строки
}
 
    // let newValue = [];
     
    // for (const number of numbers) {
    // if (number > value){
    // newValue.push(number)
    // return newValue}
      
    // } return numbers
    

    console.log(filterArray([12, 24, 8, 41, 76], 38));