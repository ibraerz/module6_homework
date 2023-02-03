//Задача 1
let arr = [
  5,
  7,
  9,
  2,
  2,
  2,
  4,
  4,
  68,
  "",
  NaN,
  NaN,
  NaN,
  NaN,
  null,
  NaN,
  NaN,
  NaN,
  undefined,
  "String",
  "String",
  "String",
];

function Chet() {
  let result2 = 0;
  let result1 = 0;
  let result = 0;
  let resNAN = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] % 2 === 0) {
        result2 += 1;
      } else if (isNaN(arr[i])) {
        resNAN += 1;
      } else if (arr[i] % 2 !== 0) {
        result1 += 1;
      } else {
        result += 0;
      }
    } else {
      result += 1;
    }
  }

  console.log(`Количество четных элементов: ${result2}`);
  console.log(`Количество нечетных элементов: ${result1}`);
  console.log(`Количество элементов NaN: ${resNAN}`);
  console.log(`Количество остальных элементов: ${result}`);
}

Chet();
