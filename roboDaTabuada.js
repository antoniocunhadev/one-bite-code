let tabuada = prompt("Escolha a tabuada:");
let resultado = "";
for (let index = 1; index <= 10; index += 1) {
  resultado += tabuada + " X " + index + " = " + (tabuada * index + "\n");
}
alert(resultado);

// Tabuada apenas no console
// let tabuada2 = 2
// let resultado2 = "";
// for (let index = 1; index <= 10; index += 1) {
//   resultado2 += tabuada2 + " X " + index + " = " + (tabuada2 * index + "\n");

// }
// console.log( resultado2);
