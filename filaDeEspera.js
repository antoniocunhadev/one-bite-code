let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (index = 0; index < fila.length; index += 1) {
    pacientes += index + 1 + "° - " + fila[index] + "\n";
  }
  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma opção:\n1. Novo paciente\n2.Consultar paciente\n3. Sair"
  );
  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Nome do paciente?");
      fila.push(novoPaciente);
      break;
    case "2":
      let pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi consultado");
      } else {
        alert("Não há pacientes na fila");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida");
  }
} while (opcao !== "3");
