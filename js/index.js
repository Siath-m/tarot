// Lista inicial de cartas para o protótipo
const baralho = [
    {
        nome: "O Louco",
        significadoNormal: "Representa novos começos, liberdade e espontaneidade. Indica disposição para explorar o desconhecido e se abrir ao novo, podendo marcar o início de um novo ciclo pessoal ou profissional. É uma carta de coragem, movimento e mudança de perspectiva, que incentiva a seguir adiante mesmo sem ter todas as respostas",
        significadoInvertido: "Indica impulsividade, pressa e dificuldade em avaliar as consequências das próprias escolhas. Pode revelar falta de planejamento e clareza, desatenção e uma tendência a agir sem aprender com experiências anteriores. Também aponta para a fuga de responsabilidades e para a dificuldade em assumir as consequências dos próprios atos.",
        imagem: "imagens/o-louco.jfif"
    },
    {
        nome: "O Mago",
        significadoNormal: "Representa o poder de manifestação, a força de vontade e a capacidade de transformar ideias em realidade. É uma carta de iniciativa, habilidade e novos começos, indicando um momento favorável para agir, abrir caminhos e colocar seus planos em prática. Também pede foco e clareza sobre o que se deseja alcançar, evitando dispersões e utilizando a criatividade e a comunicação como ferramentas para superar obstáculos.",
        significadoInvertido: "Indica potencial desperdiçado, falta de foco e dificuldade em transformar intenção em ação. Pode revelar insegurança, falta de disciplina, planejamento ruim e dificuldade em assumir o controle das próprias emoções. Em seu aspecto mais negativo, aponta para manipulação, falta de integridade e transparência, além da tendência a agir de maneira questionável ou usar as próprias habilidades de forma inadequada.",
        imagem: "imagens/o-mago.jfif"
    },
    {
        nome: "A Sacerdotisa",
        significadoNormal: "Representa a intuição, o mistério e a sabedoria que existe além do que é imediatamente revelado. Indica um momento de recolhimento, observação e paciência, no qual é mais importante escutar e compreender do que agir. Pode apontar para situações ainda ocultas, revelações futuras e uma conexão mais profunda consigo mesmo e com o mundo espiritual. É um convite a confiar nos próprios instintos, ponderar antes de decidir e permitir que as respostas surjam no seu próprio tempo.",
        significadoInvertido: "Indica bloqueio da intuição e dificuldade em expressar ou compreender os próprios sentimentos. Pode revelar silêncio excessivo, afastamento, passividade e tendência a guardar ressentimentos em vez de lidar com aquilo que incomoda. Também aponta para insegurança e dúvidas que dificultam a confiança nos próprios instintos, levando a ignorar aquilo que, no fundo, já se sabe.",
        imagem: "imagens/a-sacerdotisa.jfif"
    },
    {
        nome: "A Imperatriz",
        significadoNormal: "Representa abundância, criatividade, fertilidade e prosperidade. É uma carta ligada ao prazer, à beleza, à sensualidade e ao conforto, indicando um período de crescimento e bem-estar. Também simboliza afeto, cuidado, generosidade e harmonia nos relacionamentos, além de incentivar o amor próprio, o autocuidado e uma conexão mais profunda com a natureza e com aquilo que traz satisfação à vida.",
        significadoInvertido: "Indica excesso, desequilíbrio e dificuldade em estabelecer limites. Pode revelar uma tendência a superproteger, controlar situações ou criar dependência emocional, além de apego à aparência, ao conforto e às coisas materiais. Também aponta para sobrecarga, desgaste, acomodação e futilidade, quando o desejo de segurança e prazer acaba impedindo o crescimento e comprometendo o equilíbrio.",
        imagem: "imagens/a-imperatriz.jfif"
    },
    {
        nome: "O Imperador",
        significadoNormal: "Representa autoridade, estrutura, disciplina e estabilidade. Indica capacidade de assumir responsabilidades, tomar decisões firmes e liderar situações importantes com lógica, maturidade e pragmatismo. É uma carta de planejamento, organização e construção de bases sólidas, trazendo segurança, proteção e perseverança para alcançar objetivos e manter aquilo que foi conquistado.",
        significadoInvertido: "Indica rigidez, autoritarismo e uma necessidade excessiva de controle. Pode revelar teimosia, inflexibilidade diante das mudanças, frieza emocional e dificuldade em abrir mão de posições ou padrões do passado. Também aponta para abuso de poder e controle sufocante, ou, no extremo oposto, falta de disciplina, desorganização e dificuldade em estabelecer limites, levando à instabilidade.",
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

        // Escolhe qual significado usar baseado na posição
        const textoSignificado = isInvertida ? carta.significadoInvertido : carta.significadoNormal;

        const divCarta = document.createElement("div");
        divCarta.className = "carta";

        divCarta.innerHTML = `
            <img 
                src="${carta.imagem}" 
                alt="${carta.nome}" 
                class="${isInvertida ? 'imagem-invertida' : ''}"
            >
            <h3>${carta.nome}</h3>
            <p class="${isInvertida ? 'texto-invertido' : 'texto-normal'}">
            <strong>Posição:</strong> ${isInvertida ? 'Invertida 🙃' : 'Normal ⬆️'}
            </p>
            <p class="descricao-carta"><small>${textoSignificado}</small></p>
        `;

        container.appendChild(divCarta);
    }
}