do {
  menu = prompt(
    "\n1. Canal 01" +
      "\n2. Canal 02" +
      "\n3. Canal 03" +
      "\n4. Canal 04" +
      "\n5. Encerrar"
  );
  switch (menu) {
    case "1":
      alert("canal-01");
      break;
    case "2":
      alert("canal-02");
      break;
    case "3":
      alert("canal-03");
      break;
    case "4":
      alert("canal-04");
      break;
    case "5":
      alert("encerrar");
      break;
    default:
      alert("Opção invalida");
  }
} while (menu !== "5");
