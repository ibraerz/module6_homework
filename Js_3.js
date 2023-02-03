// Задача 3

function example(a) {
  return function (b) {
    return a + b;
  };
}
const result = example(5)(6);
console.log(result);
