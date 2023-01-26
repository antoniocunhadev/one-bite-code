function addJogador() {
  let jogadoresList = document.getElementById("jogadores-list");

  const h3 = document.createElement("h3");
  h3.innerText = "Jogador";

  const ul = document.createElement("ul");

  const posicaoLi = document.createElement("li");
  posicaoLi.innerText = "Posição: ";
  const posicaoInput = document.createElement("input");
  posicaoInput.type = "text";
  posicaoInput.name = "fullname";
  posicaoLi.appendChild(posicaoInput);
  ul.appendChild(posicaoLi);
  ul.appendChild(document.createElement("br"));

  

  jogadoresList.append(h3, ul);
}


