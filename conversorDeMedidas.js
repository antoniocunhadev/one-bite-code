let metro = 1;
let conversor = 'quilometro';
switch (conversor) {
  case 'milimetro':
    console.log(metro + " metros tem " + metro * 1000 + " mm");
    break;
  case 'centimetro':
    console.log(metro + " metros tem " + metro * 100 + " cm");
    break;
  case 'decimetro':
    console.log(metro + " metros tem " + metro * 10 + " dm");
    break;
  case 'decametro':
    console.log(metro + " metros tem " + metro / 10 + " dam");
    break;
  case 'hectometro':
    console.log(metro + " metros tem " + metro / 100 + " hm");
    break;
  case 'quilometro':
    console.log(metro + " metros tem " + metro / 1000 + " km");
    break;
  default:
    console.log("Opção inválida");
}
