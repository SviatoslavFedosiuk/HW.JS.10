// 1
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems тут
function countItems(array, condition) {
  let count = 0; 
  for (const num of array) {
    if (condition(num)) { 
      count++;
    }
  }
  return count; 
}
function countsItems(array, condition) {
  let counts = 0; 
  for (const word of array) {
    if (condition(word)) { 
      counts++;
    }
  }
  return counts; 
}
// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));
// 2
function calculator(callback, a, b) {
   return callback(a, b)
}

const add = (a, b) =>    `result of numbers add ${a} + ${b} = ${a + b}`

const minus = (a, b) => `result of numbers minus ${a} - ${b} = ${a - b}`

const multiply = (a, b) =>`result of numbers multiply ${a} * ${b} = ${a * b}`

const divide = (a, b) => `result of numbers divide ${a} / ${b} = ${a / b}`

console.log(calculator(add, 10, 5));
console.log(calculator(divide, 10, 0));
console.log(calculator(divide, 10, 5));
console.log(calculator(multiply, 10, 5));
console.log(calculator(minus, 10, 5));
// 3
function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times.length; i++) {
    messageCreator(i);
  }
}

const times = [1, 2, 3];

repeatMessage(times, (i) => {
  console.log("Повідомлення №" + (i + 1));
});
