let nomePersonagem1 = 'Nutella'
let poderAtaque1 = 20

let nomePersonagem2 = 'Todynho'
let pontosVida2 = 100
let poderDefesa2 = 10
let escudo2 = true

let resultado = poderAtaque1 - (poderDefesa2 + escudo2)

if (poderAtaque1 > poderDefesa2 && escudo2 === false) {
  console.log(pontosVida2 - resultado );
} else if (poderAtaque1 > poderDefesa2 && escudo2 === true) {
  console.log(pontosVida2 - ((resultado+=1) /2));
} else if (poderAtaque1 <= poderDefesa2){
  console.log(pontosVida2);
}

