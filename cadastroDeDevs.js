const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function (addTecnologia) {
  addTecnologia.preventDefault();
  const nome = document.getElementById("name").value;
  const tecnologia = document.getElementById("tecnologia").value;
  const tempo = document.getElementsByName("experiencia").value;

  const confirmation = confirm(
    "Add " + tecnologia + " com " + tempo + " anos de experiência?"
  );

  if (confirmation) {
    const tecnologiaList = document.getElementById("tecnologia-list");
    const tecnologiaItem = document.createElement("li");
    tecnologiaItem.id = "tecnologia-" + tecnologia;
    tecnologiaItem.innerText = nome + " : " + tecnologia;
    tecnologiaList.appendChild(tecnologiaItem);

    document.getElementById("name").value = "";
    // document.getElementById("tecnologia").value = "";
  }
});
