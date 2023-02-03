//Задача 4 (Я так увлекся, что написал функцию в обе стороны!
// И от большего к меньшему тоже)

function Chisla(a, b) {
  let dez = a;

  const Numb = function () {
    console.log(dez);
    if (dez == b) {
      clearInterval(time);
    } else if (dez > b) {
      dez--;
    } else {
      dez++;
    }
  };
  let time = setInterval(Numb, 1000);
}

Chisla(22, 15);
