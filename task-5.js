const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';

let clientCountry = prompt('Ввведите названия страны');
let cost;

clientCountry = clientCountry.toLowerCase();

switch (clientCountry) {
  case 'китай':
    cost = 100;
    console.log(`Доставка в Китай будет стоить ${cost} кредитов`);
    break;

  case 'чили':
    cost = 250;
    console.log(`Доставка в Чили будет стоить ${cost} кредитов`);
    break;

  case 'австралия':
    cost = 170;
    console.log(`Доставка в Австралию будет стоить ${cost} кредитов`);
    break;

  case 'индия':
    cost = 80;
    console.log(`Доставка в Индию будет стоить ${cost} кредитов`);
    break;

  case 'ямайка':
    cost = 120;
    console.log(`Доставка в Ямайку будет стоить ${cost} кредитов`);
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}
