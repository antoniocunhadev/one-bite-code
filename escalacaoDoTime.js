function addJogador() {
  let jogadoresList = document.getElementById("jogadores-list");

  let h3 = document.createElement("h3");
  h3.innerText = "Jogador";

  let ul = document.createElement("ul");

  let posicaoLi = document.createElement("li");
  posicaoLi.innerText = "Posição: ";
  let posicaoInput = document.createElement("input");
  posicaoInput.type = "text";
  posicaoInput.name = "fullname";
  posicaoLi.appendChild(posicaoInput);
  ul.appendChild(posicaoLi);
  ul.appendChild(document.createElement("br"));

  let nomeLi = document.createElement("li");
  nomeLi.innerText = "Nome: ";
  let nomeInput = document.createElement("input");
  nomeInput.type = "text";
  nomeInput.name = "fullname";
  nomeLi.appendChild(nomeInput);
  ul.appendChild(nomeLi);
  ul.appendChild(document.createElement("br"));

  let camisaLi = document.createElement("li");
  camisaLi.innerText = "Numero da camisa: ";
  let camisaInput = document.createElement("input");
  camisaInput.type = "text";
  camisaInput.name = "fullname";
  camisaLi.appendChild(camisaInput);
  ul.appendChild(camisaLi);
  ul.appendChild(document.createElement("br"));

  jogadoresList.append(h3, ul);
}
