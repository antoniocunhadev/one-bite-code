let saldo = prompt("Quanto dinheiro você tem?");
saldo = parseFloat(saldo);
let controleFinanceiro = "";
do {
  controleFinanceiro = prompt(
    "Você tem o total de R$ " +
      saldo +
      "\n" +
      "\n1. Adicionar dinheiro" +
      "\n2. Remover dinheiro" +
      "\n3. Sair"
  );
  switch (controleFinanceiro) {
    case "1":
      saldo += parseFloat(prompt("Valor do déposito"));
      break;
    case "2":
      saldo -= prompt("Valor do saque");
      break;
    case "3":
      alert("sair");
      break;
    default:
      "Opção invalida";
  }
} while (controleFinanceiro !== "3");
