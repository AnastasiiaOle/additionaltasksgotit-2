// Проверка пароля (ранний возврат)
// Задание
// Функция checkPassword получает пароль пользователя в параметр password, 
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD 
// и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.
// Тесты
// Объявлена функция checkPassword(password).
// Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
//   // Пиши код выше этой строки
// }


function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
  
    if (password === ADMIN_PASSWORD) {
      return 'Добро пожаловать!';
    } 
      return 'Доступ запрещен, неверный пароль!';
    

  }