const ADMIN_PASSWORD = 'jqueryismyjam';

let massege = prompt('Введите Пароль');

if (massege === null) {
  console.log('Отменено пользователем!');
} else if (massege === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else console.log('Доступ запрещен, неверный пароль!');
