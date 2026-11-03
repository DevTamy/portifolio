const listaProjetos = document.querySelector("#lista-projetos");

function criarCard(projeto) {
    const card = document.createElement("section");
    card.classList.add("card");

    const titulo = document.createElement("h2");
    titulo.textContent = projeto.titulo;

    const texto = document.createElement("p");
    texto.textContent = projeto.descricao;
    card.appendChild(titulo);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
}

fetch("js/projetos.json")
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (projetos) {
       for (const projeto of projetos) {
            criarCard(projeto);
        }
  }); 