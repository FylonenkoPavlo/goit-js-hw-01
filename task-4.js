let credits = 23580;
const pricePerDroid = 3000;

let numberOfDroids = prompt('Сколько дроидов Вы хотите купить?');

if (numberOfDroids === null) {
  console.log('Отменено пользователем!');
} else if (numberOfDroids * pricePerDroid >= credits) {
  console.log('Недостаточно средств на счету!');
} else {
  credits = credits - numberOfDroids * pricePerDroid;
  console.log(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов`
  );
}
