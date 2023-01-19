let opcao = "";

do {
  opcao = prompt(
    "Calcule a área geométrica!\n" +
      "\n1. área do triângulo " +
      "\n2. área do retângulo " +
      "\n3. área do quadrado " +
      "\n4. área do trapézio " +
      "\n5. área do circulo " +
      "\n6. Sair"
  );

  switch (opcao) {
    case "1":
      function areaTriangulo(base, altura) {
        base = prompt("Largura da base?");
        altura = prompt("Altura do triângulo?");
        return (base * altura) / 2;
      }
      alert("A área do triângulo é " + areaTriangulo());
      break;
    case "2":
      function areaRetangulo(base, altura) {
        base = prompt("Largura da base?");
        altura = prompt("Altura do retângulo?");
        return base * altura;
      }
      alert("A área do retângulo é " + areaRetangulo());
      break;
    case "3":
      function areaQuadrado(lado) {
        lado = prompt("Qual a medida da laretal?");
        return lado ** 2;
      }
      alert("A área do retângulo é " + areaQuadrado());
      break;
    case "4":
      function areaTrapezio(baseMaior, baseMenor, altura) {
        baseMaior = parseFloat(prompt("Medida da base maior?"));
        baseMenor = parseFloat(prompt("Medida da base menor?"));
        altura = prompt("Qual a altura?");
        return ((baseMaior + baseMenor) * altura) / 2;
      }
      alert("A área do trapézio é " + areaTrapezio());
      break;
    case "5":
      function areaCirculo(raio) {
        raio = prompt("Qual o raio do circulo?");
        return 3.14 * raio ** 2;
      }
      alert("A área do circulo é " + areaCirculo());
      break;
    case "6":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "6");
