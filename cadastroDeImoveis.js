let lista = [];
let opcao = "";

do {
  opcao = prompt(
    "Quantidade de imóveis cadastrados:\n" +
      lista.length +
      "\nEscolha uma opção:\n1. Cadastrar imóvel\n2.Consultar imóvel\n3. Sair"
  );

  switch (opcao) {
    case "1":
      let novoImovel = {};
      novoImovel.proprietario = prompt("Nome do proprietario?");
      novoImovel.quartos = prompt("Quantidade de quartos?");
      novoImovel.banheiro = prompt("Quantidade de banheiros");
      novoImovel.garagem = prompt("Tem garagem? sim/não");

      let confirmacao = confirm(
        "Salvar esse imóvel?\n" +
          "\nProprietário: " +
          novoImovel.proprietario +
          "\nQuartos: " +
          novoImovel.quartos +
          "\nBanheiros " +
          novoImovel.banheiro +
          "\nPossui garagem? " +
          novoImovel.garagem
      );

      if (confirmacao) {
        lista.push(novoImovel);
        alert("Imovel cadastrado com sucesso");
      } else {
        alert("Retornando ao menu principal");
      }
      break;

    case "2":
      for (let index = 0; index < lista.length; index += 1) {
        alert(
          "Imóvel: " +
            (index + 1) +
            "\nProprietário: " +
            lista[index].proprietario +
            "\nQuartos: " +
            lista[index].quartos +
            "\nBanheiros: " +
            lista[index].banheiro +
            "\nPossui garagem? " +
            lista[index].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida");
  }
} while (opcao !== "3");
