console.log("Olá! Bem-vindo ao meu portfólio!");

const nome = "Tania";
let hora = new Date().getHours();
console.log(hora);

let saudacao;
if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

/*procura um h1 que seja especifico da pgina inicial (ex: com id-"titulo-home")
 e altera o texto do h1 para a saudação e o nome da pessoa.*/
const titulo = document.querySelector("#titulo-home");

if (titulo) {
    titulo.textContent = `${saudacao} Meu nome é ${nome}.`;
}

// modo escuro: funciona no botão de qualquer página
const botao = document.querySelector("#tema");

if (botao) {
botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botao.textContent = "Modo claro";
    } else {
        botao.textContent = "Modo escuro";
    }
});
}
const gostos = ["Amo programar", "Gosto de aprender coisas novas", "Gosto de desafios"];
console.log(gostos.length);
console.log(gostos[0]);
const lista = document.querySelector("#gostos");

for (const gosto of gostos) {
    const item = document.createElement("li");
    item.textContent = gosto;
    lista.appendChild(item);
}