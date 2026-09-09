// Lista inicial de cartas para o protótipo
const baralho = [
    {
        nome: "O Louco",
        descricao: "Novos começos, inocência, fé no futuro.",
        imagem: "imagens/o-louco.jfif"
    },
    {
        nome: "O Mago",
        descricao: "Ação, poder de manifestação, habilidade.",
        imagem: "imagens/o-mago.jfif"
    },
    {
        nome: "A Sacerdotisa",
        descricao: "Intuição, mistério, conhecimento interior.",
        imagem: "imagens/a-sacerdotisa.jfif"
    },
    {
        nome: "A Imperatriz",
        descricao: "Abundância, fertilidade, criação.",
        imagem: "imagens/a-imperatriz.jfif"
    },
    {
        nome: "O Imperador",
        descricao: "Estrutura, autoridade, estabilidade.",
        imagem: "imagens/o-imperador.jfif"
    }
];

function tirarCartas(quantidade) {
    // Cria uma cópia do baralho para não alterar o original
    let baralhoEmbaralhado = [...baralho].sort(() => Math.random() - 0.5);

    const container = document.getElementById("resultado");
    container.innerHTML = ""; // Limpa a tela antes de mostrar novas cartas

    for (let i = 0; i < quantidade; i++) {
        const carta = baralhoEmbaralhado[i];
        const isInvertida = Math.random() < 0.5; // 50% de chance de vir invertida

        const divCarta = document.createElement("div");
        divCarta.className = "carta";

        divCarta.innerHTML = `
            <img 
                src="${carta.imagem}" 
                alt="${carta.nome}" 
                class="${isInvertida ? 'imagem-invertida' : ''}"
        >
        <h3>${carta.nome}</h3>
        <p class="${isInvertida ? 'invertida' : ''}">
        <strong>Posição:</strong> ${isInvertida ? 'Invertida 🙃' : 'Normal ⬆️'}
        </p>
        <p><small>${carta.descricao}</small></p>
        `;

        container.appendChild(divCarta);
    }
}