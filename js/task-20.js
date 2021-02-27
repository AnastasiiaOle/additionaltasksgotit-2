// Подсчёт суммы покупки
// Задание
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// Тесты
// Объявлена функция calculateTotalPrice(order).
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение.


function calculateTotalPrice(order) {
    let total = 0;
    // Пиши код ниже этой строки
      for (let count = 0; count < order.length; [count+1])
  
          total += order[count++];
          return total;
    // Пиши код выше этой строки
    return total;
  }