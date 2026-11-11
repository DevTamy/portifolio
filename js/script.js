console.log("Olá! Bem-vindo ao meu portfólio!");

// --- 1. SAUDAÇÃO AUTOMÁTICA ---
const nome = "Tania";
const hora = new Date().getHours();
let saudacao;

if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

const titulo = document.querySelector("#titulo-home");
if (titulo) {
    titulo.textContent = `${saudacao} Meu nome é ${nome}.`;
}

// --- 2. LISTA DE GOSTOS ---
const gostos = ["Amo programar", "Gosto de aprender coisas novas", "Gosto de desafios"];
const lista = document.querySelector("#gostos");

if (lista) {
    for (const gosto of gostos) {
        const item = document.createElement("li");
        item.textContent = gosto;
        lista.appendChild(item);
    }
}
const botaoTema = document.querySelector("#tema");

// 1. Aplica o estado ao carregar
if (localStorage.getItem("modoEscuro") === "ativo") {
    document.documentElement.classList.add("escuro");
    document.body.classList.add("escuro");
    if (botaoTema) botaoTema.textContent = "✨";
} else {
    if (botaoTema) botaoTema.textContent = "🪐";
}

// 2. Evento de clique no botão de alternar
if (botaoTema) {
    botaoTema.addEventListener("click", function () {
        // Alterna em ambos para garantir compatibilidade total
        document.documentElement.classList.toggle("escuro");
        document.body.classList.toggle("escuro");

        if (document.documentElement.classList.contains("escuro")) {
            localStorage.setItem("modoEscuro", "ativo");
            botaoTema.textContent = "✨";
        } else {
            localStorage.setItem("modoEscuro", "inativo");
            botaoTema.textContent = "🪐";
        }
    });
}