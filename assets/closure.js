// Змініть приклад із заняття по замиканню (counter) так, щоб при кожному виклику значення лічильника змінювалося не на 1, а на передане користувачем число (передати його при виклику зовнішньої функції customCounter).

// Приклад використання:
// const myCounter = customCounter1(5);
// const result1 = myCounter(); // => 5
// const result2 = myCounter(); // => 10
// const result3 = myCounter(); // => 15

function customCounter(number) {
  let count = 0;

  function inc() {
    return (count += number);
  }

  return inc;
}

const myCounter = customCounter(5);

const result1 = myCounter();
const result2 = myCounter();
const result3 = myCounter();
console.log(result1);
console.log(result2);
console.log(result3);

// * Змініть приклад із заняття по замиканню (counter) так, щоб користувач задавав початкове значення лічильника (у прикладі із заняття це 0) і крок зміни лічильника (у прикладі із заняття це 1).

// Приклад використання:
// const myCounter = customCounter2 (1, 5);
// const result1 = myCounter(); // => 6
// const result2 = myCounter(); // => 11
// const result3 = myCounter(); // => 16

function customCounter2(count, number) {
  function inc() {
    return (count += number);
  }

  return inc;
}

const myCounter2 = customCounter2(1, 5);

const result4 = myCounter2();
const result5 = myCounter2();
const result6 = myCounter2();

console.log(result4);
console.log(result5);
console.log(result6);
