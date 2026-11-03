const listaProjetos = document.querySelector("#lista-projetos");

function criarCardProjeto(projeto) {
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

fetch("projetos.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (projetos) {
       for (const projeto of projetos) {
            criarCardProjeto(projeto);
        }
}); 