let vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  let nome = prompt("Informe um nome para a vaga:");
  let descricao = prompt("Informe uma descrição para a vaga:");
  let dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:");

  let confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );
  if (confirmacao) {
    let novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso.");
  }
}

function exibirVaga() {
  let indice = prompt("Informe o numero da vaga que deseja exibir:");
  let vaga = vagas[indice];

  let candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga n " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  let candidato = prompt("Informe o nome do(a) candidato(a):");
  let indice = prompt("Informe o numero da vaga que deseja se cadastrar?");
  let vaga = vagas[indice];

  let confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada com sucesso.");
  }
}

function excluirVaga() {
  let indice = prompt("Informe o numero da vaga que deseja excluir?");
  let vaga = vagas[indice];

  let confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluida.");
  }
}

function exibirMenu() {
  let opcao = prompt(
    "Bem vindo ao sitemas de vagas\n" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrição a uma vaga" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );
  return opcao;
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

executar();
