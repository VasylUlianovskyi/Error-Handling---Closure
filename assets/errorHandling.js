// 1. Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію значень, що передаються, і генерацію помилок відповідних типів.
// Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.

// Для спрощення замість рекурсивного алгоритму можна реалізувати повернення значення base**exponent, основу base вважайте цілим числом, показник exponent -- додатнім, реалізувати тільки те, що стосується роботи з помилками.

function numberToPow(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("Values is not a number");
  }

  if (exponent === 0) {
    return 1;
  }
  return base * numberToPow(base, exponent - 1);
}
try {
  console.log(numberToPow(2, 2));
  console.log(numberToPow("2", 2));
} catch (err) {
  console.error(err);
}

// console.log(numberToPow(2, 3));
// console.log("Рядок для перевірки чи працює код після помилок");

// 2. *Реалізувати функцію для валідації імейлу. Імейл має бути рядком і містити символ "@", цей символ не має бути першим або останнім.

function validEmail(email) {
  if (typeof email !== "string") {
    throw new TypeError("email must be a string");
  }
  if (!email.includes("@")) {
    throw new Error("Email must include '@'");
  }
  if (email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1) {
    throw new Error("'@' can`t be first or last in email");
  }
  return `Email "${email}" is valid`;
}

try {
  console.log(validEmail("test@mail.com"));
  console.log(validEmail(43));
} catch (err) {
  console.error("err", err);
}

try {
  console.log(validEmail("testmail.com"));
} catch (err) {
  console.error("err", err);
}

try {
  console.log(validEmail("@testmail.com"));
} catch (err) {
  console.error("err", err);
}

try {
  console.log(validEmail("testmail.com@"));
} catch (err) {
  console.error("err", err);
}

console.log(validEmail("test@mail.com"));

document.write(`<h1>Test</h1>`);
