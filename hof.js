function calcular(a, b, operacao) {
  console.log("Realizar operação.");
  let resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma.");
  return x + y;
}

function subtrair(c, d) {
  console.log("Realizando uma subtração.");
  return c - d;
}

console.log(calcular(5, 6, subtrair));
console.log(calcular(5, 6, somar));
