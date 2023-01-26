// Some de 1 a 50

let resultado = 0;

for (let index = 1; index <= 50; index += 1) {
  resultado += index;
}
console.log("A soma total de 1 a 50 é: " + resultado);

// Encontre os numeros divisiveis por 3
let divisiveis = [];
let quantidade = 0;
for (let index = 2; index < 150; index += 1) {
  if (index % 3 === 0) {
    quantidade = divisiveis.push(index);
  }
}
console.log("De 2 à 150 existe", quantidade, "números divisivéis por 3.");
if (quantidade > 50) {
  console.log("Uauuu quantos números");
}

// Pedra, papel e tesoura

let player1 = "pedra";
let player2 = "pedra";

if (player1 === player2) {
  console.log("A ties");
} else if (
  (player1 === "pedra" && player2 === "papel") ||
  (player1 === "papel" && player2 === "pedra") ||
  (player1 === "tesoura" && player2 === "papel")
) {
  console.log("Player1 Won!!!");
} else {
  console.log("Player2 Won!!!");
}

// Verifica se a pessoa é maior ou menor de idade

let idade = 18;
resultado =
  idade >= 18 ? "A pessoa é maior de idade" : "A pessoa é menor de idade";
console.log(resultado);

// Verifica qual dos amigos é o mais novo.

let carolzita = 26;
let flavio = 25;
let noel = 20;

if (carolzita < flavio && carolzita < noel) {
  console.log("Carolzita é a mais nova");
} else if (flavio < carolzita && flavio < noel) {
  console.log("Flávio é o mais novo");
} else {
  console.log("Noel é o mais novo");
}
