//Задача 2

function easyNumber(a) {
  if (a < 1000 && a > 1) {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return `${a} - Составное число`;
      }
    }
    return `${a} - Простое число`;
  }
}
console.log(easyNumber(5));
