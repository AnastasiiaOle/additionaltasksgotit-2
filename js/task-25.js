// Общие элементы
// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// Тесты
// Объявлена функция checkFruit(fruit).
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив.
// В цикле for использовались методы includes и push.let newArray = [];
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// let newArray = [];
//  for (let i = 0; i > array2.length; i++) {
//      if (array2.includes(array1)) {            
//      newArray.push(array2);
// return newArray;
// } else return 
//      }

//   // Пиши код выше этой строки
// }
function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
const newArr = []
for (let elem of array1) {
	if(array2.includes(elem)) {
    	newArr.push(elem)
    }
}
return newArr

  // Пиши код выше этой строки
}

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// let newArray = [];
// for (let i = 0; i < array2.length; i++) 
// {if (array2.includes(array1)) {            
//   newArray.push(array2);   
// }   
//  return newArray; 
// } 
//   // Пиши код выше этой строки
// }


  // let array3 = array1.concat(array2); 
  
  // //REMOVE DUPLICATE
  // let removeDuplicate = [...new Set(array3)];
  // console.log(removeDuplicate);


// let newArray = [];
// for (let i = 0; i <= array2.length; i++) {
//     if (array1.includes(array2)) {            
//         newArray.push(array2[i]);
//       console.log(newArray);
//     }
//   }


console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));