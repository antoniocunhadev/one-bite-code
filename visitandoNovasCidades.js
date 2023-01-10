let turista = prompt("Qual o seu nome?");

let cidades = "";
let contagem = 0;

let visitouCidades = prompt("Você visitou alguma cidade (sim/não)");

while (visitouCidades === "sim") {
  let cidade = prompt("Qual o nome da cidade?");
  //cidades += " - " + cidade + "\n";
  cidades += ` - ${cidade} \n`;
  contagem += 1;
  visitouCidades = prompt("Você visitou mais alguma cidade? (sim/não)");
}
alert(turista + "\n" + contagem + "\n" + cidades);
