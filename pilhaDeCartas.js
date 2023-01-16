let pilhaDeCartas = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      pilhaDeCartas.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      let novaCarta = prompt("Escolha uma carta!");
      pilhaDeCartas.push(novaCarta);
      break;
    case "2":
      let puxaCarta = pilhaDeCartas.pop();
      if (!puxaCarta) {
        alert("Não há nenhuma carta no baralho");
      } else {
        alert("Você puxou " + puxaCarta);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção invalida");
  }
} while (opcao !== "3");
