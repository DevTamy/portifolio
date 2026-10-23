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

console.log(`${saudacao} Meu nome é ${nome}.`);

const titulo = document.querySelector("h1");
titulo.textContent = `${saudacao} Meu nome é ${nome}.`;

const botao = document.querySelector("#tema");
botao.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        botao.textContent = "Modo claro";
    } else {
        botao.textContent = "Modo escuro";
    }
});