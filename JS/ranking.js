const topJogos = [
    {
        titulo: "Hollow Knight: Silksong",
        publisher: "Team Cherry",
        genero: "Metroidvania",
        posicao: null,
        notas: { arte: 9.8, narrativa: 9.6, mundo: 9.2, combate: 9.4 },
        nota_final: null,
        imagem: "../Images/silksong2.jpg",
        descricao: "Jogo metroidvania 2D, sequência de Hollow Knight. O jogador controla Hornet, capturada e levada ao reino estranho de Pharloom. Tem exploração extensa, combate ágil, inimigos e chefes desafiadores, e muitas sidequests."
    },
    {
        titulo: "Borderlands 4",
        publisher: "Gearbox",
        genero: "FPS RPG",
        posicao: null,
        notas: { arte: 9.0, narrativa: 9.1, mundo: 8.9, combate: 9.2 },
        nota_final: null,
        imagem: "../Images/borderlands2.jpg",
        descricao: "Continua como um looter-shooter com classes diferentes, armas variadas e o humor característico da série. Busca recuperar o 'sabor' original da franquia."
    },
    {
        titulo: "Dying Light: The Beast",
        publisher: "Techland",
        genero: "Ação/Horror",
        posicao: null,
        notas: { arte: 8.5, narrativa: 9.4, mundo: 9.4, combate: 8.9 },
        nota_final: null,
        imagem: "../Images/dying.jpg",
        descricao: "Retorno de Kyle Crane, 13 anos após os eventos anteriores. Combate corpo a corpo, parkour, elementos de horror/survival e mundo aberto. Introduz o 'Beast Mode'."
    },
    {
        titulo: "Final Fantasy XVII",
        publisher: "Square Enix",
        genero: "RPG",
        posicao: null,
        notas: { arte: 9.1, narrativa: 9.2, mundo: 9.8, combate: 8.2 },
        nota_final: null,
        imagem: "../Images/ff14.jpg",
        descricao: "Sem muitas informações oficiais, mas deve seguir a tradição de RPGs de grande escala da série Final Fantasy."
    },
    {
        titulo: "Elder Scrolls VI",
        publisher: "Bethesda",
        genero: "RPG Mundo Aberto",
        posicao: null,
        notas: { arte: 8.9, narrativa: 8.8, mundo: 9.9, combate: 9.1 },
        nota_final: null,
        imagem: "../Images/tes6.jpg",
        descricao: "RPG de mundo aberto ambientado em Tamriel, com exploração, facções, magia e combates. Ainda sem muitos detalhes revelados."
    },
    {
        titulo: "Cyberpunk 2077: Rebirth",
        publisher: "CD Projekt Red",
        genero: "RPG Futurista",
        posicao: null,
        notas: { arte: 9.2, narrativa: 8.8, mundo: 8.9, combate: 9.1 },
        nota_final: null,
        imagem: "../Images/cp2077.jpg",
        descricao: "Continuação/expansão de Cyberpunk 2077. O subtítulo 'Rebirth' sugere um renascimento da franquia."
    },
    {
        titulo: "GTA VI",
        publisher: "Rockstar Games",
        genero: "Ação/Mundo Aberto",
        posicao: null,
        notas: { arte: 9.9, narrativa: 9.4, mundo: 10, combate: 8.9 },
        nota_final: null,
        imagem: "../Images/gta6.jpg",
        descricao: "Provável ambientação em Vice City, mundo aberto gigante, narrativa cinematográfica e múltiplos protagonistas."
    },
    {
        titulo: "Overwatch 3",
        publisher: "Blizzard",
        genero: "FPS Competitivo",
        posicao: null,
        notas: { arte: 8.8, narrativa: 8.2, mundo: 8.8, combate: 9.2 },
        nota_final: null,
        imagem: "../Images/overwatch-3.jpg",
        descricao: "Continuação do combate em equipe com heróis e habilidades distintas, novos modos e melhorias de balanceamento."
    },
    {
        titulo: "Monster Hunter: Eclipse",
        publisher: "Capcom",
        genero: "Ação/Aventura",
        posicao: null,
        notas: { arte: 9.8, narrativa: 9.2, mundo: 9.1, combate: 9.5 },
        nota_final: null,
        imagem: "../Images/mh.jpg",
        descricao: "Mantém a fórmula da série: caçar monstros gigantes, coletar recursos e fabricar equipamentos. Cooperação multiplayer esperada."
    },
    {
        titulo: "The Legend of Zelda: Echoes of Time",
        publisher: "Nintendo",
        genero: "Aventura",
        posicao: null,
        notas: { arte: 9.2, narrativa: 9.8, mundo: 9.1, combate: 8.7 },
        nota_final: null,
        imagem: "../Images/zelda.jpg",
        descricao: "Rumores indicam uma aventura épica com exploração, puzzles e elementos de viagem no tempo, seguindo o estilo clássico de Zelda."
    }
];

function funcaoCalcularNotaMedia(notas) {
    const notasValidas = Object.values(notas);
    const somaDasNotas = notasValidas.reduce((soma, notaAtual) => soma + notaAtual, 0);
    const mediaDasNotas = somaDasNotas / notasValidas.length;
    return Number(mediaDasNotas.toFixed(2));
}

function classificarJogosPorNota() {
    topJogos.forEach((jogo) => {
        jogo.nota_final = funcaoCalcularNotaMedia(jogo.notas);
    });
    topJogos.sort((a, b) => b.nota_final - a.nota_final);
    topJogos.forEach((jogo, i) => (jogo.posicao = i + 1));
}

function gerarRanking() {
    const container = document.querySelector(".cards");
    container.innerHTML = "";
    classificarJogosPorNota();

    topJogos.forEach((jogo, index) => {
        const card = document.createElement("section");
        card.classList.add("card");
        card.setAttribute("data-index", index);

        card.innerHTML = `
            <div style="cursor: pointer">
                <div class="card__img">
                    <img src="${jogo.imagem}" alt="${jogo.titulo}">
                </div>
                <div class="card__body">
                    <div class="card__meta">
                        <div class="card__info">
                            <h3 class="card__titulo">${jogo.titulo}</h3>
                            <div class="card__publisher">${jogo.publisher}</div>
                            <div class="card__genero">${jogo.genero}</div>
                        </div>
                        <div class="card__posicao ${jogo.posicao <= 3 ? `top${jogo.posicao}` : ""}">
                            ${jogo.posicao <= 3 ? `<i class="fa-solid fa-medal"></i>` : ""}#${jogo.posicao}
                        </div>
                    </div>
                    <div class="card__nota">
                        <i class="fa-solid fa-star" style="margin-right: 0.2rem"></i>${jogo.nota_final}/10
                    </div>
                </div>
            </div>
        `;

        card.addEventListener("click", () => abrirModalJogo(jogo));
        container.appendChild(card);
    });
}

function abrirModalJogo(jogo) {
    const modalTitulo = document.getElementById("modalTitulo");
    const modalImagem = document.getElementById("modalImagem");
    const modalNotas = document.getElementById("modalNotas");
    const modalDescricao = document.getElementById("modalDescricao");
    const modalMedia = document.getElementById("modalMedia");

    modalTitulo.textContent = jogo.titulo;
    modalImagem.src = jogo.imagem;
    modalImagem.alt = jogo.titulo;
    modalNotas.innerHTML = `
        <li>Arte: ${jogo.notas.arte}</li>
        <li>Narrativa: ${jogo.notas.narrativa}</li>
        <li>Mundo: ${jogo.notas.mundo}</li>
        <li>Combate: ${jogo.notas.combate}</li>
    `;
    modalMedia.innerHTML = `<strong>Média Final:</strong> ${jogo.nota_final}/10`;
    modalDescricao.textContent = jogo.descricao;

    const modal = new bootstrap.Modal(document.getElementById("jogoModal"));
    modal.show();
}

document.addEventListener("DOMContentLoaded", gerarRanking);
